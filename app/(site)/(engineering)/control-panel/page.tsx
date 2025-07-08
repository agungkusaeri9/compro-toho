

import ControlPanelPageIndex from "@/components/Engineering/controlPanel";
import HeroHeader from "@/components/Hero/HeroHeader";
import { Metadata } from "next";

// export const metadata: Metadata = {
//     title: "About - " + process.env.NEXT_PUBLIC_SITE_NAME,
//     openGraph: {
//         title: "About - " + process.env.NEXT_PUBLIC_SITE_NAME,
//         description: process.env.NEXT_PUBLIC_META_DESCRIPTION,
//         url: "https://www.toho.co.id",
//         siteName: process.env.NEXT_PUBLIC_SITE_NAME,
//         images: [
//             {
//                 url: "/images/logo-toho2.png",
//                 width: 800,
//                 height: 600,
//             },
//         ],
//         locale: "en-US",
//         type: "website",
//     },
//     description: process.env.NEXT_PUBLIC_META_DESCRIPTION,
// };


export default function ControlPanelPage() {
    return (
        <>
            <HeroHeader
                title="Control Panel"
                image="/images/hero/hero-cp.png"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Control Panel" },
                ]}
            />
            <ControlPanelPageIndex />
        </>
    );
}
