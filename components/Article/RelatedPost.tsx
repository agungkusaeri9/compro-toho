"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getRelatedArticles } from "@/services/ArticleService";

const RelatedPost = ({ category_id }: { category_id: number }) => {
  const [relatedArticles, setRelatedArticles] = useState<any[]>([]);

  useEffect(() => {
    const fetchRelatedArticles = async () => {
      try {
        const response = await getRelatedArticles(category_id);
        setRelatedArticles(response.data);
      } catch (error) {
        console.log("Failed to fetch related articles:", error);
      }
    };

    fetchRelatedArticles();
  }, [category_id]);

  return (
    <div className="animate_top rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
      <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
        Related Article
      </h4>

      <div>
        {relatedArticles?.map((article, key) => (
          <div
            className="mb-7.5 grid grid-cols-[20%_80%] gap-5"
            key={key}
          >
            <div className="max-w-45 relative h-18 w-full rounded-md overflow-hidden">
              <Image fill className="object-cover" src={article?.image_url} alt={article?.title} />
            </div>
            <h5 className="text-md font-medium text-black transition-all duration-300 hover:text-primary dark:text-white dark:hover:text-primary">
              <Link href={`/articles/${article?.slug}`}>
                {article?.title}
              </Link>
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedPost;
