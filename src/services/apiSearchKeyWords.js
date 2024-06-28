/* eslint-disable no-unused-vars */
import { apiToken } from "./apiToken";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export async function searchKeyWord(inputKeywords) {
  try {
    const { data } = await axios.get(
      `/api/shopee/search/items/v2?apiToken=${apiToken}&site=sg&keyword=${inputKeywords}&by=pop&order=desc&page=1&pageSize=30`
    );

    const dataShop = data?.data?.items;

    return { searchData: data, dataShop };
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw error;
  }
}

export function useKeyWords(keyword) {
  return useQuery({
    queryKey: ["search", keyword],
    queryFn: () => searchKeyWord(keyword),
    enabled: !!keyword,
  });
}
