/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { ShipFrom } from "../data/SearchFilter";
import FilterTypes from "./FilterTypes";

function ShippingFrom() {
  return <FilterTypes LegendTitle={"Shipped From"} FilterType={ShipFrom} />;
}

export default ShippingFrom;
