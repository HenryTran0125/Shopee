/* eslint-disable no-unused-vars */
import axios from "axios";
import { apiToken } from "./apiToken";
import { useQuery } from "@tanstack/react-query";

export async function searchShopsKeyWords(inputKeywords) {
  const { data } = await axios.get(
    `/api/shopee/search/shops?apiToken=${apiToken}&site=my&keyword=${inputKeywords}&page=1&pageSize=10`
  );

  return data;
}

export function useShopKeyWords(keyword) {
  return useQuery({
    queryKey: ["search shop", keyword],
    queryFn: () => searchShopsKeyWords(keyword),
    enabled: !!keyword,
  });
}
