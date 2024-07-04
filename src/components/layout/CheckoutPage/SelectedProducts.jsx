/* eslint-disable no-unused-vars */
import styled from "styled-components";
import CheckoutShopName from "./CheckoutShopName";
import CheckoutProductFromShop from "./CheckoutProductFromShop";

const ProductInformationContainer = styled.section`
  background: #fff;
  border-radius: 0.125rem;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
  margin-bottom: 0.9375rem;
  overflow: visible;
`;

function SelectedProducts() {
  return (
    <ProductInformationContainer>
      <CheckoutShopName />

      <CheckoutProductFromShop />
    </ProductInformationContainer>
  );
}

export default SelectedProducts;
