import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://swiss-berry.com',
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: 'https://swiss-berry.com/faq',
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: 'https://swiss-berry.com/contact',
            lastModified: new Date(),
            priority: 0.8,
        },
        {
            url: 'https://swiss-berry.com/politique-de-confidentialite',
            lastModified: new Date(),
            priority: 0.7,
        },
    ];
}
