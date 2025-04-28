"use client";
import { getArticleCategory } from '@/services/ArticleCategoryService';
import { CategoryArticle } from '@/types/categoryArticle';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const SidebarListCategory = () => {

    const [categories, setCategories] = useState<CategoryArticle[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await getArticleCategory();
                setCategories(res.data);
            } catch (error) {
                console.error("Failed to fetch categories", error);
            }
        }
        fetchCategories();
    }, []);

    return (
        <>
            <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
                    Categories
                </h4>

                <ul>
                    {categories?.map((category: CategoryArticle, index) => (
                        <li key={index} className="mb-5 last:mb-0">
                            <Link href={`/articles?category_id=${category.id}`} className="text-black hover:text-primary dark:text-white dark:hover:text-primary">
                                {category.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default SidebarListCategory
