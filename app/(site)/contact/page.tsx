import Contact from "@/components/Contact";
import SidebarLink from "@/components/Docs/SidebarLink";
import HeroHeader from "@/components/Hero/HeroHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - " + process.env.NEXT_PUBLIC_SITE_NAME,
  openGraph: {
    title: "Contact - " + process.env.NEXT_PUBLIC_SITE_NAME,
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

export default function DocsPage() {
  return (
    <>
      <HeroHeader
        title="Contact"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="flex flex-wrap">

            <div className="w-full px-4">
              <Contact />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
