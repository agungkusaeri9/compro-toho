import Contact from "@/components/Contact";
import SidebarLink from "@/components/Docs/SidebarLink";
import HeroHeader from "@/components/Hero/HeroHeader";
import ProductsIndex from "@/components/Products/ProductsIndex";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Products - " + process.env.NEXT_PUBLIC_SITE_NAME,
    openGraph: {
        title: "Products - " + process.env.NEXT_PUBLIC_SITE_NAME,
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

export default function ProductPage() {
    return (
        <>
            <HeroHeader
                title="Products"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Products" },
                ]}
            />
            <ProductsIndex />
        </>
    );
}
