import IndustrialMachine from '@/components/Engineering/industrialMachine'
import Digitalization from '@/components/FaSystem/digitalization'
import ProcessImprovement from '@/components/FaSystem/processImprovement'
import HeroHeader from '@/components/Hero/HeroHeader'
import { getArticleBySlug } from '@/services/ArticleService'
import { Metadata } from 'next'
import React from 'react'
export async function generateMetadata({ params }: any): Promise<Metadata> {
    const slug = "industrial-machine";
    try {
        const res = await getArticleBySlug(slug);
        const article: any = res.data;
        return {
            title: "Industrial Machine - " + process.env.NEXT_PUBLIC_SITE_NAME,
            openGraph: {
                title: "Industrial Machine - " + process.env.NEXT_PUBLIC_SITE_NAME,
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

const IndustrialMachinePage = async () => {
    let data: any = {};
    try {
        const slug = "industrial-machine"
        const res = await getArticleBySlug(slug);
        data = res.data;
    } catch (error) {
        console.error("Error fetching articles:", error);
        data = [];
    }
    return (
        <>
            <HeroHeader
                title="Industrial Machine"
                image="/images/hero/industrial-machine.avif"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    {
                        label: "Industrial Machine",
                    },

                ]}
            />
            <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
                <div className="container mx-auto">
                    <div className="flex flex-wrap">

                        <div className="w-full px-4">
                            <IndustrialMachine />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default IndustrialMachinePage
