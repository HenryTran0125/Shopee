/* eslint-disable no-unused-vars */
import axios from "axios";
import { apiToken } from "./apiToken";
import { useQuery } from "@tanstack/react-query";

export async function getProductSameShop(shopId) {
  try {
    const { data } = await axios.get(
      `/api/shopee/shop/items/v2?apiToken=${apiToken}&site=sg&shop_id=${shopId}&by=relevancy&order=desc&page=1&pageSize=20`
    );

    // const realData = data?.items;

    return data;
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw error;
  }
}

export function useProductSameShop(shopId) {
  return useQuery({
    queryKey: ["Product Same Shop", shopId],
    queryFn: () => getProductSameShop(shopId),
    enabled: !!shopId,
    staleTime: 10000,
  });
}
