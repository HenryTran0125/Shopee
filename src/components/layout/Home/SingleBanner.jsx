import styled from "styled-components";
import banner from "../../../assets/images/Banner/banner.png";

const Banner = styled.div`
  background-image: url(${(props) => props.banner});
  width: 100%;
  height: 110px;
  margin-top: 20px;
  cursor: pointer;
`;

function SingleBanner() {
  return <Banner banner={banner} />;
}

export default SingleBanner;
