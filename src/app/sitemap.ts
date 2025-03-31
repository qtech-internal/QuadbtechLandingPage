import { MetadataRoute } from "next";

export default async function siteMap() : Promise<MetadataRoute.Sitemap> {

    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/career`,
            lastModified: new Date(),
            priority:0.8,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs`,
            lastModified: new Date(),
            priority:1
        },
        {
            url:  `${process.env.NEXT_PUBLIC_BASE_URL}/contact us`,
            lastModified: new Date(),
            priority:0.5
        }
    ]
}