/* eslint-disable no-unused-vars */
import { apiToken } from "./apiToken";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// let keyword = "iphone";
// const tmapiUrl = `/api/shopee/search/items/v2?apiToken=${apiToken}&site=sg&keyword=${keyword}&by=relevancy&order=desc&page=1&pageSize=20`;

export async function searchKeyWord(inputKeywords) {
  const { data } = await axios.get(
    `/api/shopee/search/items/v2?apiToken=${apiToken}&site=sg&keyword=${inputKeywords}&by=pop&order=desc&page=1&pageSize=20`
  );
  return data;
}

export function useKeyWords(keyword) {
  return useQuery({
    queryKey: ["search", keyword],
    queryFn: () => searchKeyWord(keyword),
    enabled: !!keyword,
  });
}
