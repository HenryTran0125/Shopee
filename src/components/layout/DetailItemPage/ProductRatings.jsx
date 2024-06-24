/* eslint-disable no-unused-vars */
import styled from "styled-components";
import AmountOfRatings from "./AmountOfRatings";

const ProductRatingsContainer = styled.div`
  background: #fff;
  border-radius: 0.125rem;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
  margin-top: 0.9375rem;
  overflow: hidden;
  overflow: visible;
  padding: 1.5625rem;
`;

const ProductRatingsTextContainer = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 1em;
`;

const ProductRatingsText = styled.div`
  color: rgba(0, 0, 0, 0.87);
  font-size: 1.125rem;
  margin-right: 0.2em;
  text-transform: capitalize;
`;

function ProductRatings() {
  return (
    <div>
      <div style={{ display: "contents" }}>
        <ProductRatingsContainer>
          <ProductRatingsTextContainer>
            <ProductRatingsText>Product Ratings</ProductRatingsText>
          </ProductRatingsTextContainer>

          <AmountOfRatings />

          <div></div>
        </ProductRatingsContainer>
      </div>
    </div>
  );
}

export default ProductRatings;
