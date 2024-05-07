/* eslint-enable no-unused-vars */ // Cân nhắc bật lại rule này để kiểm soát tốt hơn các biến không sử dụng
import { useSearchParams } from "react-router-dom";
import { useKeyWords } from "../services/apiSearchKeyWords";
import SearchProducts from "./SearchProducts";
import SearchResultFor from "./SearchResultFor";
import SearchSortBy from "./SearchSortBy";

function SearchResultProduct() {
  const [searchParams] = useSearchParams();
  const keywords = searchParams.get("keyword") || "";
  const { data, error, isLoading } = useKeyWords(keywords);

  // Kiểm tra trạng thái loading hoặc lỗi
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  const dataInformation =
    data && data.data && data.data.items ? data.data["items"] : null;

  return (
    <section>
      <SearchResultFor keywords={keywords} />
      <SearchSortBy />
      {data && <SearchProducts data={dataInformation} />}
    </section>
  );
}

export default SearchResultProduct;
