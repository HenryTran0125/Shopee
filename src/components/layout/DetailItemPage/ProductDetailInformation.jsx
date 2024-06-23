/* eslint-disable no-unused-vars */
import styled from "styled-components";
import ProductSpecifications from "./ProductSpecifications";
import ProductDescription from "./ProductDescription";
import ProductRatings from "./ProductRatings";
import ProductSameShop from "./ProductSameShop";

const Container = styled.div`
  flex: 1;
  min-width: 0;
`;

const Alignment = styled.div`
  background: #fff;
  border-radius: 0.125rem;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
  margin-top: 0.9375rem;
  overflow: hidden;
  padding: 0.625rem;
`;

function ProductDetailInformation() {
  return (
    <Container>
      <Alignment>
        <ProductSpecifications />
        <ProductDescription />
        <ProductRatings />
        <ProductSameShop />
      </Alignment>
    </Container>
  );
}

export default ProductDetailInformation;
