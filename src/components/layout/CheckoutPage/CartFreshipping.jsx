/* eslint-disable no-unused-vars */
import styled from "styled-components";
import FreeShipping from "../../../assets/images/Shipping/FreeShipping.png";

const Container = styled.div`
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.09);
  display: flex;
  padding: 1.25rem 0 1.25rem 2.5rem;
`;

const LearnMoreContainer = styled.div`
  display: flex;
  outline: 0;
  overflow: visible;
  position: relative;
`;

const LearnMoreText = styled.span`
  color: #05a;
  cursor: pointer;
  margin-left: 0.375rem;
`;

function CartFreshipping() {
  return (
    <Container>
      <img width={36} height={20} src={FreeShipping} />

      <div style={{ marginLeft: ".9375rem" }}>
        Up to $1.99 off shipping on orders from $15.00
      </div>

      <LearnMoreContainer>
        <LearnMoreText></LearnMoreText>
      </LearnMoreContainer>
    </Container>
  );
}

export default CartFreshipping;
