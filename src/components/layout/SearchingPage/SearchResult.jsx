/* eslint-disable no-unused-vars */
import styled from "styled-components";
import SearchResultProduct from "./SearchResultProduct";
import ShopRelation from "./ShopRelation";
import { useSearchParams } from "react-router-dom";
import { useKeyWords } from "../../../services/apiSearchKeyWords";

const Container = styled.div`
  flex: 1;
  min-width: 0;
  width: 0;
`;

function SearchResult() {
  const [searchParams] = useSearchParams();
  const keywords = searchParams.get("keyword") || "";
  const { data, error, isLoading } = useKeyWords(keywords);
  const { searchData, dataShop } = data || {};

  // Kiểm tra trạng thái loading hoặc lỗi
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  const dataInformation =
    searchData && searchData.data && searchData.data.items
      ? searchData.data.items
      : null;

  return (
    <Container>
      <ShopRelation keywords={keywords} dataShop={dataShop} />
      <SearchResultProduct keywords={keywords} data={dataInformation} />
    </Container>
  );
}

export default SearchResult;
