/* eslint-disable no-unused-vars */
import { useSearchParams } from "react-router-dom";
import { useKeyWords } from "../services/apiSearchKeyWords";
import SearchProducts from "./SearchProducts";
import SearchResultFor from "./SearchResultFor";
import SearchSortBy from "./SearchSortBy";

function SearchResultProduct() {
  const [searchParams] = useSearchParams();
  const keywords = searchParams.get("keyword") || "";
  const { data, error, isLoading } = useKeyWords(keywords);
  // const { data, error, isLoading } = useShopKeyWords(keywords);

  return (
    <section>
      <SearchResultFor keywords={keywords} />
      <SearchSortBy />
      <SearchProducts data={data} />
    </section>
  );
}

export default SearchResultProduct;
