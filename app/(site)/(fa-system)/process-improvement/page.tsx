import Digitalization from '@/components/FaSystem/digitalization'
import ProcessImprovement from '@/components/FaSystem/processImprovement'
import HeroHeader from '@/components/Hero/HeroHeader'
import { getArticleBySlug } from '@/services/ArticleService'
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata({ params }: any): Promise<Metadata> {
    const slug = "process-improvement";
    try {
        const res = await getArticleBySlug(slug);
        const article: any = res.data;
        return {
            title: "Process Improvement - " + process.env.NEXT_PUBLIC_SITE_NAME,
            openGraph: {
                title: "Process Improvement - " + process.env.NEXT_PUBLIC_SITE_NAME,
                description: article.description || process.env.NEXT_PUBLIC_META_DESCRIPTION,
                url: process.env.NEXT_PUBLIC_URL + '/' + slug,
                siteName: process.env.NEXT_PUBLIC_SITE_NAME,
                images: [
                    {
                        url: article.image_url,
                        width: 1200,
                        height: 630,
                    },
                ],
                locale: "id-ID",
                type: "website",
            },
            description: article.description || process.env.NEXT_PUBLIC_META_DESCRIPTION,
        };
    } catch (error) {
        console.error("Gagal mengambil metadata:", error);
        return {
            title: "Artikel tidak ditemukan",
            description: "Artikel ini tidak dapat ditemukan.",
        };
    }
}


const ProcessImprovementPage = async () => {
    let data: any = {};
    try {
        const slug = "process-improvement";
        const res = await getArticleBySlug(slug);
        data = res.data;
    } catch (error) {
        console.error("Error fetching articles:", error);
        data = [];
    }
    return (
        <>
            <HeroHeader
                title="Process Improvement"
                image="/images/hero/process-improvement.avif"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    {
                        label: "Process Improvement",
                    },

                ]}
            />
            <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
                <div className="container mx-auto">
                    <div className="flex flex-wrap">
                        <div className="max-w-5xl mx-auto px-4">
                            <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
                                <div className="mx-auto max-w-c-1390  px-4 md:px-8 xl:px-0">
                                    <div dangerouslySetInnerHTML={{ __html: data?.content }}></div>
                                </div>
                            </section >
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProcessImprovementPage
