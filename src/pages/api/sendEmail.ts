import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import axios from "axios";
import { RateLimiterMemory } from "rate-limiter-flexible";

// Rate limiter: Allow 5 requests per minute per IP
const rateLimiter = new RateLimiterMemory({
  points: 5, // Max 5 requests
  duration: 60, // Per minute
  keyPrefix: "email_limiter", // Prefix for rate limiter keys
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, subject, message, recaptchaToken } = req.body;

  if (!name || !email || !subject || !message || !recaptchaToken) {
    return res
      .status(400)
      .json({ success: false, error: "Missing required fields" });
  }

  // Extract IP address
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  // Apply rate limiting
  try {
    await rateLimiter.consume(ip as string);
  } catch {
    return res
      .status(429)
      .json({
        success: false,
        error: "Too many requests. Please try again later.",
      });
  }

  // Verify reCAPTCHA
  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY as string,
        response: recaptchaToken,
      })
    );

    if (!response.data.success) {
      return res
        .status(400)
        .json({ success: false, error: "reCAPTCHA verification failed" });
    }
  } catch {
    return res
      .status(500)
      .json({ success: false, error: "reCAPTCHA verification error" });
  }

  // Configure Nodemailer
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
    subject: `📩 New Inquiry: ${subject} | ${name} | QuadB Technologies`,

    text: `Dear QuadB Technologies Team,

You have received a new inquiry via the website contact form. Please find the details below:

--------------------------------------
🔹 Name: ${name}
🔹 Email: ${email}
🔹 Phone: ${phone || "Not Provided"}
🔹 Subject: ${subject}
🔹 Message:  

${message}
--------------------------------------

Please respond to the sender at your earliest convenience.

Best regards,  
QuadB Technologies  
📧 sales@quadbtech.com  
📍 15313 O'Connell Park, Belleville 48990  
☎ +91 8360543857`,

    html: `
    <div style="font-family: 'Arial', sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #ffffff; max-width: 600px; margin: auto;">
      
      <h2 style="color: #ff6600; text-align: center; font-size: 24px;">📩 New Contact Inquiry</h2>
      
      <p style="font-size: 16px; color: #333; text-align: center;">
        You have received a new inquiry via the website contact form.
      </p>

      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
      
      <table style="width: 100%; border-collapse: collapse; font-size: 16px;">
        <tr><td style="padding: 10px; font-weight: bold; width: 30%;">Name:</td><td style="padding: 10px;">${name}</td></tr>
        <tr><td style="padding: 10px; font-weight: bold;">Email:</td><td style="padding: 10px;">${email}</td></tr>
        <tr><td style="padding: 10px; font-weight: bold;">Phone:</td><td style="padding: 10px;">${
          phone || "Not Provided"
        }</td></tr>
        <tr><td style="padding: 10px; font-weight: bold;">Subject:</td><td style="padding: 10px;">${subject}</td></tr>
        <tr><td style="padding: 10px; font-weight: bold;">Message:</td><td style="padding: 10px;">${message.replace(
          /\n/g,
          "<br>"
        )}</td></tr>
      </table>

      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
      
      <p style="font-size: 14px; color: #777;">
        Please respond to the sender at your earliest convenience.
      </p>
      
      <p style="font-size: 14px; color: #333; text-align: center;">
        <strong>QuadB Technologies</strong><br>
        📍 15313 O'Connell Park, Belleville 48990 | ☎ +91 8360543857
      </p>
    </div>
  `,
  };


  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", info.response);
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error: unknown) {
    console.error("Failed to send email:", error);
    res.status(500).json({ success: false, error: "Failed to send email" });
  }
}
