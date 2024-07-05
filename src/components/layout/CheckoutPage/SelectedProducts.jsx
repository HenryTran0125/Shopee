/* eslint-disable no-unused-vars */
import styled from "styled-components";
import CartProductFromShop from "./CartProductFromShop";
import CartShopName from "./CartShopName";
import CartVouchersAvailable from "./CartVouchersAvailable";
import CartFreshipping from "./CartFreshipping";

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
      <CartShopName />
      <CartProductFromShop />
      <CartVouchersAvailable />
      <CartFreshipping />
    </ProductInformationContainer>
  );
}

export default SelectedProducts;
