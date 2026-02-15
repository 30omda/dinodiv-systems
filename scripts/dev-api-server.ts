/**
 * Local API server for development. Proxied by Vite so /api/contact works with npm run dev.
 */
import { createServer } from "http";
import { config } from "dotenv";
import { sendContactEmails } from "../api/contact-core";

config();

const PORT = 3001;

const server = createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method !== "POST" || req.url !== "/api/contact") {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not Found" }));
    return;
  }

  let body = "";
  for await (const chunk of req) body += chunk;

  let data: Record<string, string | undefined>;
  try {
    data = JSON.parse(body || "{}");
  } catch {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Invalid JSON" }));
    return;
  }

  const result = await sendContactEmails(data);

  const status = result.success
    ? 200
    : result.error?.includes("required") || result.error?.includes("Invalid")
      ? 400
      : 500;

  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify(result.success ? { success: true } : { error: result.error })
  );
});

server.listen(PORT, () => {
  console.log(`[dev-api] Contact API at http://localhost:${PORT}/api/contact`);
});
