

import MariusOllivier from '@/public/projects/marius-ollivier.png';
import HumanaServices from '@/public/projects/humana-services.png'
import { StaticImageData } from 'next/image';

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
  ] as const;



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
