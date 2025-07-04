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

export const getTeams = async (): Promise<ApiResponse<any[]>> => {
  try {
    const res = await api.get("/api/teams");
    return res.data;
  } catch (error) {
    return {
      status: "error",
      success: false,
      message: "Failed to fetch teams",
      data: [],
    };
  }
};

export const getServices = async (): Promise<ApiResponse<any[]>> => {
  try {
    const res = await api.get("/api/services");
    return res.data;
  } catch (error) {
    return {
      status: "error",
      success: false,
      message: "Failed to fetch teams",
      data: [],
    };
  }
};

export const getOfficeLocations = async (): Promise<ApiResponse<any[]>> => {
  try {
    const res = await api.get("/api/office-locations");
    return res.data;
  } catch (error) {
    return {
      status: "error",
      success: false,
      message: "Failed to fetch office locations",
      data: [],
    };
  }
};


export const getSocialMedia = async (): Promise<ApiResponse<any[]>> => {
  try {
    const res = await api.get("/api/social-media");
    return res.data;
  } catch (error) {
    return {
      status: "error",
      success: false,
      message: "Failed to fetch social media",
      data: [],
    };
  }
};


export const getProfileTohoIndo = async (): Promise<ApiResponse<any>> => {
  try {
    const res = await api.get("/api/profiles/indonesia");
    return res.data;
  } catch (error) {
    return {
      status: "error",
      success: false,
      message: "Failed to fetch profile toho indonesia",
      data: [],
    };
  }
};


export const getProfileTohoJapan = async (): Promise<ApiResponse<any>> => {
  try {
    const res = await api.get("/api/profiles/japan");
    return res.data;
  } catch (error) {
    return {
      status: "error",
      success: false,
      message: "Failed to fetch profile toho japan",
      data: [],
    };
  }
};
