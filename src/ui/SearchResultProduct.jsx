/* eslint-disable no-unused-vars */
import { useSearchParams } from "react-router-dom";
import { useKeyWords } from "../services/apiSearchKeyWords";
import SearchResultFor from "./SearchResultFor";
import SearchSortBy from "./SearchSortBy";

function SearchResultProduct() {
  const [searchParams] = useSearchParams();
  const keywords = searchParams.get("keyword") || "";
  const { data, error, isLoading } = useKeyWords(keywords);
  // const { data, error, isLoading } = useShopKeyWords(keywords);

  console.log(data);
  return (
    <section>
      <SearchResultFor keywords={keywords} />
      <SearchSortBy />
    </section>
  );
}

export default SearchResultProduct;
