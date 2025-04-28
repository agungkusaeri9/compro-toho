import api from "@/libs/api";
import { ApiResponse } from "@/types/apiResponse";
import { Client } from "@/types/client";
import { FAQ } from "@/types/faq";
import { Testimonial } from "@/types/testimonial";

export const getTestimonial = async (): Promise<ApiResponse<Testimonial[]>> => {
  try {
    const res = await api.get("/api/testimonials");
    return res.data;
  } catch (error) {
    return {
      status: "error",
      success: false,
      message: "Failed to fetch testimonials",
      data: [],
    };
  }
};

export const getFaqs = async (): Promise<ApiResponse<FAQ[]>> => {
  try {
    const res = await api.get("/api/faqs");
    return res.data;
  } catch (error) {
    return {
      status: "error",
      success: false,
      message: "Failed to fetch faqs",
      data: [],
    };
  }
};

export const getBanner = async (): Promise<ApiResponse<any[]>> => {
  try {
    const res = await api.get("/api/banners");
    return res.data;
  } catch (error) {
    return {
      status: "error",
      success: false,
      message: "Failed to fetch banners",
      data: [],
    };
  }
};
