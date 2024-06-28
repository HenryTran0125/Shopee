/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { useProductSameShop } from "../../../services/apiProductSameShop";
import { useData } from "../../../context/dataContext";

const Alignment = styled.div`
  margin-left: -0.3125rem;
  margin-right: -0.3125rem;
  padding-top: 0.3125rem;
`;

const Container = styled.div`
  height: 100%;
  position: relative;
  width: 100%;
`;

const List = styled.ul`
  width: 400%;
  transform: translate(0px, 0px);
  display: flex;
  height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
`;

const Item = styled.li`
  padding: 5px 5px 0;
  float: left;
  list-style: none;
  overflow-x: hidden;
`;

function ProductOfTheSameShop() {
  const { shopIdProductSameShop } = useData();
  const { data, isLoading, error } = useProductSameShop(shopIdProductSameShop);
  const theItems = data?.data?.items;
  const lengthOfItems = theItems?.length;

  console.log(theItems, lengthOfItems);

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
  return (
    <Alignment>
      <Container>
        <List>
          {theItems?.map((item, index) => (
            <Item key={index}></Item>
          ))}
        </List>
      </Container>
    </Alignment>
  );
}

export default ProductOfTheSameShop;
