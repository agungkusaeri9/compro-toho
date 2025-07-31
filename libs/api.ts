// api.ts
import axios from "axios";
import { toast } from "react-hot-toast";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
  timeout: 20000,
});

api.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // console.error("[API Error]", error);

    if (error.code === "ECONNABORTED") {
      toast.error("Request timeout. Server tidak merespon.");
    } else if (!error.response) {
      // Tidak ada response dari server, bisa karena server down / offline
      toast.error("Tidak bisa terhubung ke server. Coba lagi nanti.");
    } else {
      // toast.error(
      //   `Terjadi kesalahan: ${error.response.data.message || "Unknown error"}`,
      // );
    }

    return Promise.reject(error);
  },
);

export default api;
