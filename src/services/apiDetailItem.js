/* eslint-disable no-empty */

import axios from "axios";
import { apiToken } from "./apiToken";
import { useQuery } from "@tanstack/react-query";

/* eslint-disable no-unused-vars */
export async function getDetailItem(shopId, itemId) {
  try {
    const { data } = await axios.get(
      `/api/shopee/item_detail?apiToken=${apiToken}&site=sg&item_id=${itemId}&shop_id=${shopId}`
    );
    return data;
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw error;
  }
}

export function useDetailItem(shopId, itemId, encodedTitle) {
  return useQuery({
    queryKey: ["itemDetail", shopId, itemId, encodedTitle],
    queryFn: () => getDetailItem(shopId, itemId),
    enabled: !!shopId && !!itemId && !!encodedTitle,
    cacheTime: 1000 * 60 * 5, // 5 phút
    staleTime: 1000 * 60, // 1 phút
  });
}
