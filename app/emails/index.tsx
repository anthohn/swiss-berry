import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  senderFirstName: string,
  senderLastName: string,
  senderEmail: string,
  senderNumberPhone: string,
  senderWebSite?: string, // optionnel
  senderComplInfo?: string, // optionnel
};

export default function EmailTemplate ({
  senderFirstName,
  senderLastName,
  senderEmail,
  senderNumberPhone,
  senderWebSite,
  senderComplInfo
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Nouveau message de votre site portfolio</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                Vous avez reçu un message de {senderFirstName} {senderLastName} depuis votre <a href="https://swiss-berry.com">portfolio</a>
              </Heading>
              <Text>Prénom : {senderFirstName}</Text>
              <Text>Nom : {senderLastName}</Text>
              <Text>Numéro de téléphone : {senderNumberPhone}</Text>
              {/* Afficher le site web seulement s'il est fourni */}
              {senderWebSite && <Text>Site web : {senderWebSite}</Text>}
              {/* Afficher les informations complémentaires seulement si elles sont fournies */}
              {senderComplInfo && <Text>Information complémentaire : {senderComplInfo}</Text>}
              <Hr />
              <Text>L&apos;e-mail de l&apos;expéditeur est : {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
