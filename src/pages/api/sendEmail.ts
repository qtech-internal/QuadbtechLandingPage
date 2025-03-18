import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res
      .status(400)
      .json({ success: false, error: "Missing required fields" });
  }

  const transporter = nodemailer.createTransport({
    host: "smtppro.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.ZOHO_EMAIL,
      pass: process.env.ZOHO_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.ZOHO_EMAIL,
    to: "prashant.sagar.shakya@gmail.com",
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${
      phone || "Not Provided"
    }\nSubject: ${subject}\nMessage: ${message}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", info.response);
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error: any) {
    console.error("Failed to send email:", error);
    res
      .status(500)
      .json({ success: false, error: error.message || "Failed to send email" });
  }
}
