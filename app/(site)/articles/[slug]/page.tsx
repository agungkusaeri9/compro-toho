// File: app/(site)/articles/[slug]/page.tsx

import { Metadata } from "next";
import api from "@/libs/api";
import HeroHeader from "@/components/Hero/HeroHeader";
import Image from "next/image";
import { formatDate } from "@/utils/dateFormat";
import SidebarBlogCategory from "@/components/BlogCategory/SidebarBlogCategory";
import { getArticleBySlug } from "@/services/ArticleService";

// 1. Fungsi generateMetadata untuk SEO
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { slug } = await params;
  try {
    const res = await getArticleBySlug(slug);
    const article: any = res.data;
    return {
      title: article.title,
      openGraph: {
        title: article.title,
        description: article.description,
        url: process.env.NEXT_PUBLIC_URL,
        siteName: "PT. Toho Technology Indonesia",
        images: [
          {
            url: article.image_url,
            width: 800,
            height: 600,
          },
        ],
        locale: "en_US",
        type: "website",
      },
      description: article.description,
    };
  } catch (error) {
    console.error("Gagal mengambil metadata:", error);
    return {
      title: "Artikel tidak ditemukan",
      description: "Artikel ini tidak dapat ditemukan.",
    };
  }
}

const SingleBlogPage = async ({ params }: any) => {
  const { slug } = await params;
  let article: any = null;

  try {
    const res = await getArticleBySlug(slug);
    article = res.data;
  } catch (err) {
    console.error("Gagal mengambil detail artikel", err);
  }

  if (!article) {
    return <p className="text-center">Artikel tidak ditemukan.</p>;
  }

  return (
    <>
      <HeroHeader
        title={article.title}
        breadcrumbs={[
          { label: "Beranda", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: article.title },
        ]}
      />
      <section className="lg:pb-25 xl:pb-30 pt-10">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden">
                  <div className="relative w-full h-[500px] sm:h-[600px]">
                    <Image
                      src={article.image_url}
                      alt={article.title}
                      fill
                      className="rounded-md "
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  {article.title}
                </h2>

                <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                  <li>
                    <span className="text-black dark:text-white">
                      Published On: {formatDate(article.created_at, "MMMM DD, YYYY")}
                    </span>
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Category: {article?.category?.name}
                    </span>
                  </li>
                </ul>

                <div
                  className="blog-details"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />

              </div>
            </div>
            <SidebarBlogCategory category_id={article.category.id} />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
