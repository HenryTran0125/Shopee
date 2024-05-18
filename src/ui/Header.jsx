/* eslint-disable no-unused-vars */
import HeaderNavigation from "./HeaderNavigation";
import HeaderSearch from "./HeaderSearch";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background: linear-gradient(-180deg, #f53d2d, #f63);
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 50rem;
`;

function Header() {
  return (
    <HeaderContainer>
      <HeaderNavigation />
      <HeaderSearch />
    </HeaderContainer>
  );
}

export default Header;
