import api from "@/libs/api";
import { ApiResponse } from "@/types/apiResponse";
import { Client } from "@/types/client";

export const getClients = async (): Promise<ApiResponse<Client[]>> => {
  try {
    const res = await api.get("/api/partners");
    return res.data;
  } catch (error) {
    return {
      status: "error",
      success: false,
      message: "Failed to fetch clients",
      data: [],
    };
  }
};
