
export const patterns = [
    {
        seo: "animated-navigation"
    },
    {
        seo: "animated-circular-navigation"
    },
    {
        seo: "animated-keyboard"
    },
    {
        seo: "overlay"
    },
    {
        seo: "data-table"
    },
    {
        seo: "tabs"
    },
]

export async function generateStaticParams() {
    return [];
}

export default async function sitemap() {
    const baseUrl = 'https://uipatternfactory.com'; // Replace with your actual domain

    const patternsArray = patterns.map((pattern) => {
        return {
            url: `${baseUrl}/p=${pattern.seo}`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        }
    })

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        ...patternsArray,
    ];
}