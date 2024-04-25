/* eslint-disable no-unused-vars */
import styled from "styled-components";
import SearchFilterText from "./SearchFilterText";
import ShippingFrom from "./ShippingFrom";
import ShippingOptions from "./ShippingOptions";
import ShopTypes from "./ShopTypes";

const Container = styled.div`
  flex: 0 0 13.825rem;
  margin: 0 1.25rem 1.25rem 0;
  min-width: 0;
`;

function SearchFilter() {
  return (
    <Container>
      <SearchFilterText />
      <ShippingFrom />
      <ShippingOptions />
      <ShopTypes />
    </Container>
  );
}

export default SearchFilter;
