


import IndustrialPageIndex from "@/components/Engineering/industrialMachine";
import HeroHeader from "@/components/Hero/HeroHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Industrial Machine - " + process.env.NEXT_PUBLIC_SITE_NAME,
    openGraph: {
        title: "Industrial Machine - " + process.env.NEXT_PUBLIC_SITE_NAME,
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


export default function IndustrialPage() {
    return (
        <>
            <HeroHeader
                title="Industrial Machine"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Industrial Machine" },
                ]}
            />
            <IndustrialPageIndex />
        </>
    );
}
