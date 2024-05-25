/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-enable no-unused-vars */ // Cân nhắc bật lại rule này để kiểm soát tốt hơn các biến không sử dụng

import SearchProducts from "./SearchProducts";
import SearchResultFor from "./SearchResultFor";
import SearchSortBy from "./SearchSortBy";
import PropTypes from "prop-types";

function SearchResultProduct({ keywords, data }) {
  return (
    <section>
      <SearchResultFor keywords={keywords} />
      <SearchSortBy />
      {data && <SearchProducts data={data} />}
    </section>
  );
}

export default SearchResultProduct;

SearchResultProduct.propTypes = {
  keywords: PropTypes.string,
  data: PropTypes.object,
};
