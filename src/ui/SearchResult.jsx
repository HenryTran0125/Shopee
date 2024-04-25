/* eslint-disable no-unused-vars */
import styled from "styled-components";
import SearchResultProduct from "./SearchResultProduct";
import ShopRelation from "./ShopRelation";

const Container = styled.div`
  flex: 1;
  min-width: 0;
  width: 0;
`;

function SearchResult() {
  return (
    <Container>
      <ShopRelation />
      <SearchResultProduct />
    </Container>
  );
}

export default SearchResult;
