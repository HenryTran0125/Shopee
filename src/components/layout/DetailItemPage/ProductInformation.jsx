/* eslint-disable no-unused-vars */
import styled from "styled-components";
import PropTypes from "prop-types";
import { getCurrentDate, getIntegerPart } from "../../../utilities/helpers";
import ShopVouchers from "./ShopVouchers";
import ProductDetailInformation from "./ProductDetailInformation";

const ProductContent = styled.div`
  display: flex;
  min-height: 40rem;
`;

function ProductInformation({ data }) {
  const discountValue = data?.promotions[0]?.discount_value;
  const minSpend = data?.promotions[0]?.min_spend;
  const productLimit = data?.promotions[0]?.product_limit;
  const Date = getCurrentDate();

  return (
    <div>
      <ProductContent>
        <ProductDetailInformation />

        <ShopVouchers
          discountValue={discountValue}
          minSpend={minSpend}
          productLimit={productLimit}
          Date={Date}
        />
      </ProductContent>
    </div>
  );
}

export default ProductInformation;

ProductInformation.propTypes = {
  data: PropTypes.any,
};
