/* eslint-disable no-unused-vars */
import styled from "styled-components";
import SearchFilterText from "./SearchFilterText";
import ShippingFrom from "./ShippingFrom";

const Container = styled.div`
  flex: 0 0 11.875rem;
  margin: 0 1.25rem 1.25rem 0;
  min-width: 0;
`;

function SearchFilter() {
  return (
    <Container>
      <SearchFilterText />
      <ShippingFrom />
    </Container>
  );
}

export default SearchFilter;
