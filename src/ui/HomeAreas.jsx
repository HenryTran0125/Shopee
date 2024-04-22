/* eslint-disable no-unused-vars */
import styled from "styled-components";
import VouchersBanner from "./VouchersBanner";
import HomeShopeeMall from "./HomeShopeeMall";
import HomeCategories from "./HomeCategories";

const ProductsAlignment = styled.div`
  width: 100%;
`;

function HomeAreas() {
  return (
    <ProductsAlignment>
      <HomeCategories />
      <VouchersBanner />
      <HomeShopeeMall />
    </ProductsAlignment>
  );
}

export default HomeAreas;
