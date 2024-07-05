/* eslint-disable no-unused-vars */
import CartHeaderNavigation from "./CartHeaderNavigation";
import CartHeaderSearch from "./CartHeaderSearch";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background: linear-gradient(-180deg, #f53d2d, #f63);
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 50rem;
`;

function CartHeader() {
  return (
    <HeaderContainer>
      <CartHeaderNavigation />
      <CartHeaderSearch />
    </HeaderContainer>
  );
}

export default CartHeader;
