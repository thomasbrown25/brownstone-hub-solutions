const DESTINATION = "tbrown@brownstonehub.com";
const EMAIL = /^[^\s@\r\n]+@[^\s@\r\n]+\.[^\s@\r\n]+$/;

function response(status, body) {
  return { status, headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" }, body };
}

module.exports = async function contact(context, req) {
  const body = req.body;
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    context.res = response(400, { error: "Please complete the form." });
    return;
  }

  // Hidden field: reject automated submissions without reporting success to the sender.
  if (body.website) {
    context.res = response(200, { ok: true });
    return;
  }

  const fields = ["name", "email", "company", "message"];
  if (fields.some(key => typeof body[key] !== "string")) {
    context.res = response(400, { error: "Please complete all fields." });
    return;
  }
  const { name, email, company, message } = Object.fromEntries(fields.map(key => [key, body[key].trim()]));
  if (!name || name.length > 120 || !EMAIL.test(email) || email.length > 254 || !company || company.length > 150 || !message || message.length > 4000) {
    context.res = response(400, { error: "Please check the information and try again." });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !from) {
    context.log.error("Contact email is not configured: RESEND_API_KEY / CONTACT_FROM_EMAIL missing.");
    context.res = response(503, { error: "Contact form is temporarily unavailable. Please email tbrown@brownstonehub.com directly." });
    return;
  }

  try {
    const result = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [DESTINATION],
        reply_to: email,
        subject: "New Brownstone Hub Solutions website inquiry",
        text: `New website inquiry\n\nName: ${name}\nEmail: ${email}\nBusiness: ${company}\n\nProject details:\n${message}`,
      }),
      signal: AbortSignal.timeout(10000),
    });
    if (!result.ok) {
      context.log.error(`Contact email provider rejected request (${result.status}).`);
      context.res = response(502, { error: "We couldn't send your message. Please email tbrown@brownstonehub.com directly." });
      return;
    }
    context.res = response(200, { ok: true });
  } catch (error) {
    context.log.error(`Contact email delivery failed: ${error instanceof Error ? error.name : "unknown error"}.`);
    context.res = response(502, { error: "We couldn't send your message. Please email tbrown@brownstonehub.com directly." });
  }
};
