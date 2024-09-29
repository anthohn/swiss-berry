"use server";
import { Resend } from "resend";
import EmailTemplate from "@/app/emails/index";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const formData = await request.formData();

  const senderFirstName = formData.get("senderFirstName") as string | null;
  const senderLastName = formData.get("senderLastName") as string | null;
  const senderEmail = formData.get("senderEmail") as string | null;
  const senderNumberPhone = formData.get("senderNumberPhone") as string | null;
  const senderWebSite = formData.get("senderWebSite") as string | null;
  const senderComplInfo = formData.get("senderComplInfo") as string | null;

  // Vérifier uniquement les champs obligatoires
  if (!senderFirstName || !senderLastName || !senderEmail || !senderNumberPhone) {
    return Response.json({ error: "Les champs Prénom, Nom, E-mail et Numéro de téléphone sont obligatoires." }, { status: 400 });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Contact de <onboarding@resend.dev>",
      to: "contact@swiss-berry.com",
      subject: "Message de votre site web",
      replyTo: senderEmail,
      react: EmailTemplate({
        senderFirstName,
        senderLastName,
        senderEmail,
        senderNumberPhone,
        senderWebSite: senderWebSite || "", // Si non fourni, on passe une chaîne vide
        senderComplInfo: senderComplInfo || "" // Si non fourni, on passe une chaîne vide
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
