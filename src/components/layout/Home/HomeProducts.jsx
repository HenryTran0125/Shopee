/* eslint-disable no-unused-vars */
import styled from "styled-components";
import SingleBanner from "./SingleBanner";
import HomeAreas from "./HomeAreas";

const Main = styled.div`
  width: 1200px;
  margin: 0 auto;
  opacity: 1;
`;

function HomeProducts() {
  return (
    <Main>
      <SingleBanner />
      <HomeAreas />
    </Main>
  );
}

export default HomeProducts;
