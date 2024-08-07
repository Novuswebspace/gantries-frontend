import { useCallback, useState } from "react";
import { AxiosError, AxiosRequestConfig } from "axios";
import { ApiResponse } from "@/types";
import axios from "@/lib/axios";

export const useAxios = () => {
  const [loading, setLoading] = useState(false);

  /**
   * @description Utility to fetch data in client components (In server components, use 'fetchServer()' function instead)
   * @param endpoint string
   * @param T Type of data expected Ex:fetch<"Data type expected from the response">(...)
   */
  const fetch = useCallback(async <T>(endpoint: string) => {
    let data: ApiResponse<T> | null = null;
    let error: string = "";
    try {
      setLoading(true);
      const res = await axios.get<ApiResponse<T>>(endpoint);
      data = res.data;
    } catch (err: any) {
      console.log(err);
      if (err instanceof AxiosError) {
        error = err.response?.data?.message || "Something went wrong";
      }
    } finally {
      setLoading(false);
    }

    return { data, error };
  }, []);

  /**
   * @description Utility to mutate data
   * @param method  Type of request --> "put" | "post" | "delete"
   * @param body Request body
   * @param config Axios Config
   * @param T Type of data expected Ex:mutate<"Data type expected from the response">(...)
   */
  const mutate = useCallback(
    async <T>(
      method: "put" | "post" | "delete",
      endpoint: string,
      body?: any,
      config?: AxiosRequestConfig
    ) => {
      let data: ApiResponse<T> | null = null;
      let error: string = "";
      try {
        setLoading(true);
        const res = await axios[method]<ApiResponse<T>>(endpoint, body, config);
        data = res.data;
        console.log("data", data);
      } catch (err: any) {
        console.log(err);
        if (err instanceof AxiosError) {
          error = err.response?.data?.message || "Something went wrong";
        }
      } finally {
        setLoading(false);
      }

      return { data, error };
    },
    []
  );

  return { loading, fetch, mutate };
};
