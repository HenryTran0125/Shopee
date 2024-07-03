/* eslint-disable no-unused-vars */
import CheckoutHeaderNavigation from "./CheckoutHeaderNavigation";
import CheckoutHeaderSearch from "./CheckoutHeaderSearch";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background: linear-gradient(-180deg, #f53d2d, #f63);
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 50rem;
`;

function CheckoutHeader() {
  return (
    <HeaderContainer>
      <CheckoutHeaderNavigation />
      <CheckoutHeaderSearch />
    </HeaderContainer>
  );
}

export default CheckoutHeader;
