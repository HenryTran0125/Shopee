/* eslint-disable no-unused-vars */
import DefaultHeaderNavigation from "./DefaultHeaderNavigation";
import DefaultHeaderSearch from "./DefaultHeaderSearch";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background: linear-gradient(-180deg, #f53d2d, #f63);
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 50rem;
`;

function DefaultHeader() {
  return (
    <HeaderContainer>
      <DefaultHeaderNavigation />
      <DefaultHeaderSearch />
    </HeaderContainer>
  );
}

export default DefaultHeader;
