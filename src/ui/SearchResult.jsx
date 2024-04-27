/* eslint-disable no-unused-vars */
import styled from "styled-components";
import SearchResultProduct from "./SearchResultProduct";
import ShopRelation from "./ShopRelation";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  min-width: 0;
  width: 0;
`;

function SearchResult() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const getKeyWords = searchParams.get("keyword") || "";
  // console.log(getKeyWords);
  // console.log(location)

  return (
    <Container>
      <ShopRelation />
      <SearchResultProduct />
    </Container>
  );
}

export default SearchResult;
