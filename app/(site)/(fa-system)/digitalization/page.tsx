import Digitalization from '@/components/FaSystem/digitalization'
import HeroHeader from '@/components/Hero/HeroHeader'
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
    title: "Digitalization - " + process.env.NEXT_PUBLIC_SITE_NAME,
    openGraph: {
        title: "Digitalization - " + process.env.NEXT_PUBLIC_SITE_NAME,
        description: process.env.NEXT_PUBLIC_META_DESCRIPTION,
        url: process.env.NEXT_PUBLIC_SITE_URL,
        siteName: process.env.NEXT_PUBLIC_SITE_NAME,
        images: [
            {
                url: process.env.NEXT_PUBLIC_LOGO || "",
                width: 1200,
                height: 630,
            },
        ],
        locale: "en-US",
        type: "website",
    },
    description: process.env.NEXT_PUBLIC_META_DESCRIPTION,
};
const DigitalizationPage = () => {
    return (
        <>
            <HeroHeader
                title="Digitalization"
                image="/images/hero/digitalization.avif"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    {
                        label: "Digitalization",
                    },

                ]}
            />
            <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
                <div className="container mx-auto">
                    <div className="flex flex-wrap">

                        <div className="w-full px-4">
                            <Digitalization />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DigitalizationPage
