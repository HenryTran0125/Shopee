// /* eslint-disable no-unused-vars */
// import axios from "axios";
// import { apiToken } from "./apiToken";
// import { useQuery } from "@tanstack/react-query";

// export async function getShopeeShop(dataItem) {
//   const bestShopId = dataItem
//     .map(
//       (Id) =>
//         `/api/shopee/shop/shop_info?apiToken=${apiToken}&site=sg&shop_id=${Id}&username=fangzhong.sg`
//     )
//     .filter((Id) => Id.is_official_shop)
//     .reduce((maxRating, currentRating) => {
//       return currentRating.rate_info.rating_star >
//         maxRating.rate_info.rating_star
//         ? currentRating.rate_info.rating_star
//         : maxRating.rate_info.rating_star;
//     }, dataItem[0]);

//   const { data } = await axios.get(
//     `/api/shopee/shop/shop_info?apiToken=${apiToken}&site=sg&shop_id=${bestShopId}&username=fangzhong.sg`
//   );

//   return data;
// }

// export function useShopeeShop(dataItem) {
//   return useQuery({
//     queryKey: ["shopeeShop", dataItem],
//     queryFn: () => getShopeeShop(dataItem),
//   });
// }
