/* eslint-disable no-unused-vars */
import axios from "axios";
import { apiToken } from "./apiToken";
import { useQuery } from "@tanstack/react-query";

export async function getShopeeShop(dataItem) {
  const validItems = dataItem.filter(
    (item) => item.shop_id && item.is_official_shop
  );

  if (validItems.length === 0) {
    throw new Error("No valid shops found");
  }

  const bestShop = validItems.reduce((maxRatingItem, currentItem) => {
    return currentItem.rate_info.rating_star >
      maxRatingItem.rate_info.rating_star
      ? currentItem
      : maxRatingItem;
  });

  const bestShopId = bestShop.shop_id;

  const { data } = await axios.get(
    `/api/shopee/shop/shop_info?apiToken=${apiToken}&site=sg&shop_id=${bestShopId}&username=fangzhong.sg`
  );

  return data;
}

export function useShopeeShop(dataItem) {
  return useQuery({
    queryKey: ["shopeeShop", dataItem],
    queryFn: () => getShopeeShop(dataItem),
  });
}
