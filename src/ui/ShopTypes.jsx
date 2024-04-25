import { ShopType } from "../data/SearchFilter";
import FilterTypes from "./FilterTypes";

function ShopTypes() {
  return <FilterTypes LegendTitle="Shop Type" FilterType={ShopType} />;
}

export default ShopTypes;
