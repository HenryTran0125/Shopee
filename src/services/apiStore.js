import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { apiToken } from "./apiToken";

export async function apiStore(shopId) {
  try {
    const { data } = await axios.get(
      `/api/shopee/shop/shop_info?apiToken=${apiToken}&site=sg&shop_id=${shopId}&username=fangzhong.sg`
    );

    const realData = data.data;

    return realData;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export function useStore(shopId) {
  const query = useQuery({
    queryKey: ["store", shopId],
    queryFn: () => apiStore(shopId),
    enabled: !!shopId,
    retry: false,
  });

  if (!shopId) {
    console.error("shopId is undefined");
    return {
      data: null,
      error: new Error("shopId is undefined"),
      isLoading: false,
    };
  }

  return query;
}
