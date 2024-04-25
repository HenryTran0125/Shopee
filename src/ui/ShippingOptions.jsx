import { ShippingOption } from "../data/SearchFilter";
import FilterTypes from "./FilterTypes";

function ShippingOptions() {
  return (
    <FilterTypes LegendTitle="Shipping Option" FilterType={ShippingOption} />
  );
}

export default ShippingOptions;
