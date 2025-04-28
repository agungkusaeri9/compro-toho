import api from "@/libs/api";
import { ApiResponse } from "@/types/apiResponse";
import { CategoryArticle } from "@/types/categoryArticle";

export const getArticleCategory = async (): Promise<
  ApiResponse<CategoryArticle[]>
> => {
  try {
    const res = await api.get("/api/article-categories");
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
