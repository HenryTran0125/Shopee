/* eslint-disable no-unused-vars */
import CheckoutChecking from "./CheckoutChecking";
import CheckoutProducts from "./CheckoutProducts";
import styled from "styled-components";

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 1200px;
`;

function CheckoutBody() {
  return (
    <Container>
      <CheckoutProducts />
      <CheckoutChecking />
    </Container>
  );
}

export default CheckoutBody;
