
import DigitalizationPageIndex from "@/components/Fa-system/Digitalization";
import VisualizationPageIndex from "@/components/Fa-system/Visualization";
import HeroHeader from "@/components/Hero/HeroHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Digitalization - " + process.env.NEXT_PUBLIC_SITE_NAME,
    openGraph: {
        title: "Digitalization - " + process.env.NEXT_PUBLIC_SITE_NAME,
        description: process.env.NEXT_PUBLIC_META_DESCRIPTION,
        url: "https://www.toho.co.id",
        siteName: process.env.NEXT_PUBLIC_SITE_NAME,
        images: [
            {
                url: "/images/logo-toho2.png",
                width: 800,
                height: 600,
            },
        ],
        locale: "en-US",
        type: "website",
    },
    description: process.env.NEXT_PUBLIC_META_DESCRIPTION,
};


export default function DigitalizationPage() {
    return (
        <>
            <HeroHeader
                title="Digitalization"
                image="/images/hero/hero-digitalization.jpg"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Digitalization" },
                ]}
            />
            <DigitalizationPageIndex />
        </>
    );
}
