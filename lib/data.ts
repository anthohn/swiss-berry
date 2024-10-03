import MariusOllivier from '@/public/projects/marius-ollivier.png';
import HumanaServices from '@/public/projects/humana-services.png'
import { StaticImageData } from 'next/image';

//svg Faq
import Group from '@/public/svg/group.svg';
import QueryStats from '@/public/svg/queryStats.svg'
import Security from '@/public/svg/security.svg'
import Payements from '@/public/svg/payements.svg'
import Handshake from '@/public/svg/handshake.svg'
import PartnerExchange from '@/public/svg/partnerExchange.svg'

type Link = {
  label: string;
  href: string;
};

export const links: Link[] = [
  {
    label: "FAQ",
    href: "/faq",
  },
  {
    label: "Contact",
    href: "/contact",
  }
];

interface Project {
  displayLink: string;
  urlLink: string;
  imageSrc: StaticImageData;
  title: string;
}

export const projects: Project[] = [
  {
    displayLink: 'marius-ollivier.ch',
    urlLink: 'https://marius-ollivier.ch',
    imageSrc: MariusOllivier,
    title: 'Portfolio photographe Marius Ollivier',
  },
  {
    displayLink: 'humana-services.ch',
    urlLink: 'https://humana-services.ch',
    imageSrc: HumanaServices,
    title: 'Site web entreprise d\'aide à domicile',
  },
];

// data.ts
export interface Faq {
  question: string;
  answer: string;
  icon: StaticImageData;
}

export const faq: Faq[] = [
  {
    question: "Pourquoi choisir notre agence ?",
    answer:
      "Nous ne créons pas seulement des sites web, mais des expériences digitales qui transforment vos visiteurs en clients. Avec un design captivant et une approche axée sur vos besoins, nous vous aidons à vous démarquer dans votre secteur.",
    icon: Group,
  },
  {
    question: "Mon site sera-t-il visible sur Google ?",
    answer:
      "Avec notre optimisation SEO avancée et des technologies de référencement de pointe comme Next.js, votre site se démarquera sur les moteurs de recherche, attirant ainsi un trafic qualifié et boostant votre chiffre d'affaires.",
    icon: QueryStats,
  },
  {
    question: "Comment allez-vous sécuriser mon site ?",
    answer:
      "Ne vous inquiétez plus des failles de sécurité ! Grâce à notre maintenance continue, votre site est protégé 24h/24, prêt à performer sans interruption, comme une machine bien huilée.",
    icon: Security,
  },
  {
    question: "Combien cela va-t-il me coûter ?",
    answer:
      "Nous vous offrons des tarifs transparents, adaptés à votre budget et aux spécificités de votre projet. Pas de frais cachés : vous bénéficierez d’une collaboration ouverte et sans surprise.",
    icon: Payements,
  },
  {
    question: "Quels types de projets acceptez-vous ?",
    answer:
      "Que vous soyez une startup en pleine croissance ou une entreprise établie, notre expertise s'adapte à des projets de toutes tailles, en personnalisant nos solutions selon vos objectifs.",
    icon: Handshake,
  },
  {
    question: "Comment allons-nous démarrer ce projet ?",
    answer:
      "Dès notre premier échange, nous mettons vos ambitions au centre de notre stratégie. Vous nous confiez votre vision, et nous la transformons en réalité, pas à pas, jusqu’à ce que vous ayez un site qui vous ressemble et performe à 100 %.",
    icon: PartnerExchange,
  },
];

export interface PrivacyPolicySection {
  section: string;
  description: string;
}

export const privacyPolicy: PrivacyPolicySection[] = [
  {
    section: "Collecte des données",
    description:
      "Nous collectons les informations que vous nous fournissez volontairement via notre formulaire de contact, telles que votre nom, votre adresse e-mail, votre numéro de téléphone et toute autre donnée que vous nous transmettez pour répondre à vos demandes ou établir un devis.",
  },
  {
    section: "Utilisation des données",
    description:
      "Les informations que vous nous transmettez sont utilisées uniquement pour répondre à vos demandes, établir un devis ou pour communiquer avec vous concernant les services que nous proposons. Elles ne seront ni vendues, ni partagées sans votre consentement.",
  },
  {
    section: "Partage des données",
    description:
      "Vos données ne sont jamais partagées avec des tiers sans votre consentement, sauf dans les cas requis par la loi ou dans le cadre de services techniques nécessaires à la gestion de notre site.",
  },
  {
    section: "Sécurité des données",
    description:
      "Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données contre toute perte, utilisation abusive ou accès non autorisé. Vos données sont stockées de manière sécurisée.",
  },
  {
    section: "Durée de conservation",
    description:
      "Nous conservons vos données personnelles uniquement pendant la durée nécessaire pour répondre à vos demandes ou pour respecter nos obligations légales.",
  },
  {
    section: "Cookies",
    description:
      "Notre site web n'utilise pas de cookies pour collecter ou stocker des informations personnelles. Vous pouvez naviguer librement sans être suivi par des traceurs publicitaires.",
  },
  {
    section: "Vos droits",
    description:
      "Conformément à la législation en vigueur, vous disposez des droits suivants : accès, rectification, suppression et opposition au traitement de vos données. Pour exercer ces droits, contactez-nous à l'adresse suivante : contact@swiss-berry.com.",
  },
  {
    section: "Modifications",
    description:
      "Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute mise à jour sera publiée sur cette page avec une nouvelle date de mise à jour.",
  },
];