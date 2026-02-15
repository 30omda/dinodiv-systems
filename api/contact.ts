import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sendContactEmails } from "./contact-core";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const result = await sendContactEmails(req.body as Record<string, string | undefined>);

  if (!result.success) {
    const status = result.error?.includes("required") || result.error?.includes("Invalid")
      ? 400
      : 500;
    return res.status(status).json({ error: result.error });
  }

  return res.status(200).json({ success: true });
}
