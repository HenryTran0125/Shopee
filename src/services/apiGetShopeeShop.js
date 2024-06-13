/* eslint-disable no-unused-vars */
import axios from "axios";
import { apiToken } from "./apiToken";
import { useQuery } from "@tanstack/react-query";

export async function getShopeeShop(dataItem) {
  const requests = dataItem?.map((item) => {
    const id = item.shop_id;
    return axios.get(
      `/api/shopee/shop/shop_info?apiToken=${apiToken}&site=sg&shop_id=${id}&username=fangzhong.s`
    );
  });

  const response = await Promise.all(requests);
  const dataResponse = response.map((item) => item.data.data);

  const filteredOfficialShop = dataResponse.filter(
    (shop) => shop.is_official_shop
  );

  if (filteredOfficialShop.length === 0) {
    throw new Error("No official shops found");
  }

  const data = filteredOfficialShop.reduce((maxRatingShop, currShop) => {
    return currShop.rate_info.rating_star >= maxRatingShop.rate_info.rating_star
      ? currShop
      : maxRatingShop;
  }, filteredOfficialShop[0]);

  return data;
}

export function useShopeeShop(dataItem) {
  return useQuery({
    queryKey: ["shopeeShop", getShopeeShop()],
    queryFn: () => getShopeeShop(dataItem),
    enabled: !!dataItem,
  });
}
