import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Client";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Testimonial from "@/components/Testimonial";
import Services from "@/components/Services";
import Teams from "@/components/Teams";
import Client from "@/components/Client";
import Banner from "@/components/Banner";
import AboutTohoIndo from "@/components/About/AboutTohoIndo";

export const metadata: Metadata = {
  title: "IoT solution - " + process.env.NEXT_PUBLIC_SITE_NAME,
  openGraph: {
    title: "IoT solution - " + process.env.NEXT_PUBLIC_SITE_NAME,
    description: "PT Toho Technology Indonesia is a leading technology company specializing in software development, IT consulting, and digital transformation services.",
    url: "https://www.toho.co.id",
    siteName: "PT. Toho Technology Indonesia",
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
  description: "PT Toho Technology Indonesia is a leading technology company specializing in software development, IT consulting, and digital transformation services.",
};

export default function Home() {
  return (
    <main className="">
      <Banner />
      <About />
      <Services />
      <Teams />
      <Testimonial />
      <FAQ />
      <Client />
    </main>

  );
}
