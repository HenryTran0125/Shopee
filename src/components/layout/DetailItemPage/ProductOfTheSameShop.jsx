/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { useProductSameShop } from "../../../services/apiProductSameShop";

const Alignment = styled.div`
  margin-left: -0.3125rem;
  margin-right: -0.3125rem;
  padding-top: 0.3125rem;
`;

const Container = styled`
    height: 100%;
    position: relative;
    width: 100%;
`;

function ProductOfTheSameShop() {
  //   const { data, isLoading, error } = useProductSameShop();
  //   console.log(data);
  return (
    <Alignment>
      <Container></Container>
    </Alignment>
  );
}

export default ProductOfTheSameShop;
