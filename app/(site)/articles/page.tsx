import ArticleList from "@/components/Article";
import HeroHeader from "@/components/Hero/HeroHeader";
import { getArticles } from "@/services/ArticleService";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { Metadata } from "next";
import { Suspense } from "react";
import ArticleSkeleton from "@/components/Skeleton/ArticleSkeleton";

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

interface PageProps {
  params: Promise<{ [key: string]: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const Articles = async ({ searchParams }: PageProps) => {
  const resolvedParams = await searchParams;
  const search = typeof resolvedParams.search === 'string' ? resolvedParams.search : undefined;
  const category_id = typeof resolvedParams.category_id === 'string' ? Number(resolvedParams.category_id) : undefined;

  const queryClient = new QueryClient();

  // Prefetch the articles data
  const articles = await queryClient.fetchQuery({
    queryKey: ['articles', category_id, search],
    queryFn: async () => {
      const res = await getArticles(category_id, search);
      return res.data;
    }
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HeroHeader
        title="Articles"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Articles" },
        ]}
      />
      <Suspense fallback={<ArticleSkeleton />}>
        <ArticleList
          data={articles}
          isTitleHeader={false}
          search={search}
          category_id={category_id}
        />
      </Suspense>
    </HydrationBoundary>
  );
};

export default Articles;
