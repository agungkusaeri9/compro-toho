import api from "@/libs/api";
import { ApiResponse } from "@/types/apiResponse";
import { Article } from "@/types/article";

export const getArticles = async (
  category_id: number | null = null,
  search: string | null = null,
): Promise<ApiResponse<Article[]>> => {
  try {
    const params: any = {};
    if (category_id) params.category_id = category_id;
    if (search) params.search = search;

    const res = await api.get("/api/articles", { params });

    return res.data;
  } catch (error) {
    console.error("Failed to fetch related articles", error);
    return {
      status: "error",
      success: false,
      message: "Failed to fetch related articles",
      data: [],
    };
  }
};

export const getArticleBySlug = async (
  slug: string,
): Promise<ApiResponse<Article[]>> => {
  try {
    const res = await api.get(`/api/articles/${slug}`);
    return res.data;
  } catch (error) {
    console.error("Failed to fetch related articles", error);
    return {
      status: "error",
      success: false,
      message: "Failed to fetch related articles",
      data: [],
    };
  }
};

// Mendapatkan artikel terkait
export const getRelatedArticles = async (
  category_id: number,
  limit = 5,
): Promise<ApiResponse<Article[]>> => {
  try {
    const res = await api.get("/api/articles", {
      params: {
        category_id: category_id,
        limit: limit,
      },
    });
    return res.data;
  } catch (error) {
    return {
      status: "error",
      success: false,
      message: "Failed to fetch related articles",
      data: [],
    };
  }
};
