import { Resend } from "resend";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const resend = new Resend(process.env.RESEND_API_KEY);
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(str: string): string {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export default async function handler(
    req: VercelRequest,
    res: VercelResponse
) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { name, email, message, company } = req.body as Record<string, string | undefined>;

    // Validation
    if (!name || !email || !message) {
        return res.status(400).json({ error: "Name, email, and message are required" });
    }

    if (!EMAIL_REGEX.test(email)) {
        return res.status(400).json({ error: "Invalid email format" });
    }

    // Sanitization
    const sanitizedName = String(name).trim().slice(0, 100);
    const sanitizedEmail = String(email).trim().toLowerCase();
    const sanitizedMessage = String(message).trim().slice(0, 5000);
    const sanitizedCompany = company ? String(company).trim().slice(0, 100) : "Not provided";

    try {
        // 1️⃣ Send to company
        await resend.emails.send({
            from: "DinoDiv <contact@dinodiv.info>",
            to: ["contact@dinodiv.info"],
            subject: `New Message from ${escapeHtml(sanitizedName)}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(sanitizedName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(sanitizedEmail)}</p>
        <p><strong>Company:</strong> ${escapeHtml(sanitizedCompany)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(sanitizedMessage)}</p>
      `,
        });

        // 2️⃣ Auto reply to client
        await resend.emails.send({
            from: "DinoDiv <contact@dinodiv.info>",
            to: [sanitizedEmail],
            subject: "We received your message 🚀",
            html: `
        <h2>Hi ${escapeHtml(sanitizedName)},</h2>
        <p>Thank you for contacting DinoDiv.</p>
        <p>We've received your message and will get back to you shortly.</p>
        <br/>
        <p>Best regards,<br/>DinoDiv Team</p>
      `,
        });

        return res.status(200).json({ success: true });
    } catch (err) {
        if (process.env.NODE_ENV !== "production") {
            console.error(err);
        }
        return res.status(500).json({ error: "Something went wrong" });
    }
}
