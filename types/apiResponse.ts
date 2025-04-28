export type ApiResponse<T> = {
  status: string;
  success: boolean;
  message: string;
  data: T;
};
