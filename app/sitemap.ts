export async function generateStaticParams() {
    return [];
}

export default async function sitemap() {
    const baseUrl = 'https://uipatternfactory.com'; // Replace with your actual domain

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
    ];
}