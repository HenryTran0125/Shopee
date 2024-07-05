/* eslint-disable no-unused-vars */
import styled from "styled-components";
import CartProducts from "./CartProducts";
import CartCheckingPrice from "./CartCheckingPrice";

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 1200px;
`;

function CartBody() {
  return (
    <Container>
      <CartProducts />
      <CartCheckingPrice />
    </Container>
  );
}

export default CartBody;
