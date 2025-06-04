import ArticleList from "@/components/Article";
import HeroHeader from "@/components/Hero/HeroHeader";
import { getArticles } from "@/services/ArticleService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles - " + process.env.NEXT_PUBLIC_SITE_NAME,
  openGraph: {
    title: "Articles - " + process.env.NEXT_PUBLIC_SITE_NAME,
    description: "Explore the latest insights, news, and updates from PT Toho Technology Indonesia, a leader in software development, IT consulting, digital transformation, IoT solutions, and industrial automation.",
    url: process.env.NEXT_PUBLIC_URL + "/articles",
    siteName: process.env.NEXT_PUBLIC_SITE_NAME,
    images: [
      {
        url: process.env.NEXT_PUBLIC_URL + '/' + process.env.NEXT_PUBLIC_LOGO,
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  description: "Explore the latest insights, news, and updates from PT Toho Technology Indonesia, a leader in software development, IT consulting, digital transformation, IoT solutions, and industrial automation.",
};

const Articles = async ({ searchParams }: { searchParams: { search?: string, category_id?: number } }) => {
  const params = searchParams;
  const search = params.search ?? "";
  const category_id = params.category_id ?? "";

  let articles: any[] = [];

  try {
    const res = await getArticles(category_id || null, search || null);
    articles = res.data;
    console.log({ articles })
  } catch (error) {
    console.error("Error fetching articles:", error);
    articles = [];
  }

  return (
    <>
      <HeroHeader
        title="Articles"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Articles" },
        ]}
      />
      <ArticleList data={articles} isTitleHeader={false} search={search} category_id={Number(category_id)} />
    </>
  );
};

export default Articles;
