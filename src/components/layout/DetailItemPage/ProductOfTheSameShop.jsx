/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { useProductSameShop } from "../../../services/apiProductSameShop";
import { useData } from "../../../context/dataContext";

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
  const { newData } = useData();
  const { data, isLoading, error } = useProductSameShop(newData);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
          height: "100vh",
        }}
      >
        <div>Loading...</div>
      </div>
    );
  }

  if (error) {
    return <div>Error Loading</div>;
  }
  console.log(data);
  return (
    <Alignment>
      <Container></Container>
    </Alignment>
  );
}

export default ProductOfTheSameShop;
