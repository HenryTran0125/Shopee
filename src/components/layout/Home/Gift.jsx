/* eslint-disable no-unused-vars */
import img11 from "../../../assets/images/Ads/11.jpg";
import img12 from "../../../assets/images/Ads/12.png";
import styled from "styled-components";

const GiftContainer = styled.div`
  /* width: 40%; */
  gap: 6px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
`;

const GiftElement = styled.div`
  width: 100%;
  height: 100%;
  /* display: inline-block; */
  flex: 1 1 50%;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

function Gift() {
  return (
    <GiftContainer>
      <GiftElement src={img11} />
      <GiftElement src={img12} />
    </GiftContainer>
  );
}

export default Gift;
