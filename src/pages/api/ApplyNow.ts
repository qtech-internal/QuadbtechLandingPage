import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import formidable, { File } from "formidable";
import fs from "fs";
import { RateLimiterMemory } from "rate-limiter-flexible";

// bodyParser: false is required as we are ONLY handling multipart/form-data
export const config = {
  api: {
    bodyParser: false,
  },
};

const rateLimiter = new RateLimiterMemory({
  points: 5, // Allow 5 requests per minute per IP
  duration: 60,
  keyPrefix: "job_app_email_limiter", // Use a specific prefix
});

// Interface for job application fields - ALL required
interface JobApplicationFields {
  name: string;
  email: string;
  phone: string; // Now required
  subject: string; // This will be constructed on the frontend
  message: string; // This is the 'whyJoin' field
}

// --- Helper Function to Send Job Application Email ---
async function sendJobApplicationEmail(
  data: JobApplicationFields,
  resumeFile: File
) {
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
    to: "prashant.sagar.shakya@gmail.com", // CHANGE TO YOUR RECIPIENT
    subject: `💼 ${data.subject} | QuadB Technologies`, // Use subject from form data
    attachments: [
      {
        filename: resumeFile.originalFilename || "resume.dat", // Use original filename
        path: resumeFile.filepath, // Path to the temporary uploaded file
        contentType: resumeFile.mimetype || "application/octet-stream",
      },
    ],
    text: `
Dear QuadB Technologies Team,

You have received a new job application via the website.

--------------------------------------
🔹 Name: ${data.name}
🔹 Email: ${data.email}
🔹 Phone: ${data.phone} // Now always present
🔹 Applying For: Blockchain Developer (Implied by subject/form: ${data.subject})

🔹 Reason for Joining / Message:
${data.message}
--------------------------------------

📄 Resume is attached.

Best regards,
QuadB Technologies
`,
    html: `
<div style="font-family: 'Arial', sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #ffffff; max-width: 600px; margin: auto;">
    <h2 style="color: #ff6600; text-align: center; font-size: 24px;">💼 New Job Application Received</h2>
    <p style="font-size: 16px; color: #333; text-align: center;">
        A new application for the Blockchain Developer role was submitted.
    </p>
    <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
    <table style="width: 100%; border-collapse: collapse; font-size: 16px;">
        <tr><td style="padding: 10px; font-weight: bold; width: 30%;">Name:</td><td style="padding: 10px;">${data.name}</td></tr>
        <tr><td style="padding: 10px; font-weight: bold;">Email:</td><td style="padding: 10px;">${data.email}</td></tr>
        <tr><td style="padding: 10px; font-weight: bold;">Phone:</td><td style="padding: 10px;">${data.phone}</td></tr>
        <tr><td style="padding: 10px; font-weight: bold;">Applying For:</td><td style="padding: 10px;">Blockchain Developer (via form)</td></tr>
        <tr><td style="padding: 10px; font-weight: bold; vertical-align: top;">Reason:</td><td style="padding: 10px;">${data.message.replace(/\n/g, "<br>")}</td></tr>
    </table>
    <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
    <p style="font-size: 14px; color: #777;">
        📄 The applicant's resume is attached to this email.
    </p>
    <p style="font-size: 14px; color: #333; text-align: center;">
        <strong>QuadB Technologies</strong><br>
        📍 15313 O'Connell Park, Belleville 48990 | ☎ +91 8360543857
    </p>
</div>
`,
  };

  return transporter.sendMail(mailOptions);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  // Apply Rate Limiting
  const ip =
    (req.headers["x-forwarded-for"] as string) || req.socket.remoteAddress;
  try {
    await rateLimiter.consume(ip);
  } catch {
    return res.status(429).json({
      success: false,
      error: "Too many requests. Please try again later.",
    });
  }

  const form = formidable({ multiples: false });
  let tempFilePath: string | null = null; // To track file for cleanup

  try {
    // Parse the multipart form data
    const [fields, files] = await form.parse(req);

    // --- Extract and Validate ALL Fields ---
    const name = fields.name?.[0];
    const email = fields.email?.[0];
    const phone = fields.phone?.[0]; // Now check for its presence
    const subject = fields.subject?.[0]; // Should be set by frontend
    const message = fields.message?.[0]; // This is the 'whyJoin' text
    const resumeFile = files.resume?.[0] as File | undefined; // Access the uploaded file

    // Updated validation check
    if (!name || !email || !phone || !subject || !message) {
      // Construct a more specific error message
      const missingFields = [
        !name && "name",
        !email && "email",
        !phone && "phone",
        !subject && "subject",
        !message && "message",
      ]
        .filter(Boolean)
        .join(", ");
      throw new Error(`Missing required text fields: ${missingFields}.`);
    }

    if (!resumeFile) {
      throw new Error("Resume file is missing in the form data.");
    }
    tempFilePath = resumeFile.filepath; // Store path for cleanup

    // Create data object - phone is now guaranteed to be a string
    const applicationData: JobApplicationFields = {
      name,
      email,
      phone,
      subject,
      message,
    };

    // --- Send Email ---
    await sendJobApplicationEmail(applicationData, resumeFile);
    console.log("Job application email sent successfully for:", email);

    // --- Cleanup Temporary File ---
    fs.unlink(tempFilePath, (unlinkErr) => {
      if (unlinkErr)
        console.error(
          "Error deleting temp file after successful send:",
          tempFilePath,
          unlinkErr
        );
      else console.log("Successfully deleted temp file:", tempFilePath);
    });

    res
      .status(200)
      .json({ success: true, message: "Application submitted successfully" });
  } catch (error: any) {
    console.error("Error processing job application request:", error);

    // --- Cleanup Temporary File on Error ---
    if (tempFilePath) {
      fs.unlink(tempFilePath, (unlinkErr) => {
        if (unlinkErr)
          console.error(
            "Error deleting temp file after error:",
            tempFilePath,
            unlinkErr
          );
        else
          console.log(
            "Successfully deleted temp file after error:",
            tempFilePath
          );
      });
    }

    // Determine appropriate status code
    let statusCode = 500; // Internal Server Error by default
    // Check if the error is related to missing fields or file
    if (
      error.message.includes("Missing required") ||
      error.message.includes("Resume file is missing")
    ) {
      statusCode = 400; // Bad Request
    }

    res.status(statusCode).json({
      success: false,
      error: error.message || "Failed to process job application",
    });
  }
}
