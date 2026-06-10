// Edge runtime for Cloudflare Pages compatibility.
export const runtime = "edge";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json(
      { success: false, error: "Corps de requête invalide" },
      { status: 400 }
    );
  }

  // Validate required fields
  const required = ["fullName", "phone", "email", "serviceType", "departureCity"];
  for (const field of required) {
    if (!body[field]) {
      return Response.json(
        { success: false, error: `Le champ ${field} est obligatoire` },
        { status: 400 }
      );
    }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(String(body.email))) {
    return Response.json(
      { success: false, error: "Email invalide" },
      { status: 400 }
    );
  }

  // TODO: Integrate Resend or Nodemailer here
  // import { Resend } from "resend"
  // const resend = new Resend(process.env.RESEND_API_KEY)
  // await resend.emails.send({
  //   from: "devis@syanorvoyages.com",
  //   to: "info@syanorvoyages.com",
  //   subject: `Nouvelle demande: ${body.serviceType}`,
  //   html: buildEmailTemplate(body)
  // })

  // TODO: Replace with proper logging / persistence (e.g. Cloudflare KV or D1).

  return Response.json({ success: true });
}
