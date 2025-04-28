import ArticleList from "@/components/Article";
import HeroHeader from "@/components/Hero/HeroHeader";
import ProductList from "@/components/Products";
import { getArticles } from "@/services/ArticleService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products - PT. Toho Technology Indonesia",
  openGraph: {
    title: "Products - PT. Toho Technology Indonesia",
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

const ProductListPage = async ({ searchParams }: { searchParams: { search?: string } }) => {
  const params = searchParams;
  const search = params.search ?? "";

  let articles: any[] = [];

  try {
    const res = await getArticles(null, search || null);
    articles = res.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    articles = [];
  }

  return (
    <>
      <HeroHeader
        title="Products"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products" },
        ]}
      />
      <ProductList data={articles} isTitleHeader={false} search={search} />
    </>
  );
};

export default ProductListPage;
