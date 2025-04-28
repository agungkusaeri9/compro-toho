import ArticleList from "@/components/Article";
import HeroHeader from "@/components/Hero/HeroHeader";
import { getArticles } from "@/services/ArticleService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Article - PT. Toho Technology Indonesia",
  openGraph: {
    title: "Article - PT. Toho Technology Indonesia",
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

const Articles = async ({ searchParams }: { searchParams: { search?: string, category_id?: number } }) => {
  const params = searchParams;
  const search = params.search ?? "";
  const category_id = params.category_id ?? "";

  let articles: any[] = [];

  try {
    const res = await getArticles(category_id || null, search || null);
    articles = res.data;
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
