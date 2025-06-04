"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });

import ToasterContext from "../context/ToastContext";
import Providers from "../providers";
import NextTopLoader from 'nextjs-toploader';
import FooterWhatsapp from "@/components/Footer/FooterWhatsapp";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.className}`}>
        <NextTopLoader
          color="#00499CFF"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <Providers>
            <Lines />
            <Header />
            <ToasterContext />
            {children}
            <Footer />
          </Providers>
          {/* <ScrollToTop /> */}
          <FooterWhatsapp />
        </ThemeProvider>
      </body>
    </html>
  );
}
