import styled from "styled-components";

const Banner = styled.div`
  background-image: url("/Banner/banner.png");
  width: 100%;
  height: 110px;
  margin-top: 20px;
  cursor: pointer;
`;

function SingleBanner() {
  return <Banner />;
}

export default SingleBanner;
