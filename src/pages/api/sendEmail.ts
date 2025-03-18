import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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

  const emailContent = `
    Name: ${name}
    Email: ${email}
    Phone: ${phone || "Not Provided"}
    Subject: ${subject}
    Message: ${message}
  `;

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "prashant.sagarshakya@quadbtech.com",
      subject: `${subject}`,
      text: emailContent,
    });

    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error: any) {
    console.error("Failed to send email:", error);
    res.status(500).json({ success: false, error: error.message });
  }
}
