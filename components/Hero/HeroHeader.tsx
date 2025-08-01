'use client';

import Image from "next/image";

type Breadcrumb = {
    label: string;
    href?: string;
    image?: string;
};

const HeroHeader = ({
    title,
    breadcrumbs,
    image = '/images/hero/hero-default-1.png',
}: {
    title: string;
    breadcrumbs: Breadcrumb[];
    image?: string;
}) => {
    return (
        <section className="relative mt-[100px] overflow-hidden max-h-[500px]">
            <Image
                src={image}
                alt={title}
                width={1200}
                height={600}
                className="w-full object-cover brightness-60"
                priority
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                <h1 className="text-4xl font-bold">{title}</h1>
                <nav className="mt-4 text-sm">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                        {breadcrumbs.map((item, index) => (
                            <li key={index} className="inline-flex items-center space-x-1">
                                {item.href ? (
                                    <>
                                        <a href={item.href} className="hover:underline text-white/70">
                                            {item.label}
                                        </a>
                                        <span className="text-white">/</span>
                                    </>
                                ) : (
                                    <span className="text-white font-medium">{item.label}</span>
                                )}
                            </li>
                        ))}
                    </ol>
                </nav>
            </div>
        </section>
    );
};

export default HeroHeader;
