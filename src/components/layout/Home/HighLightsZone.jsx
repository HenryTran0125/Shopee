/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { Highlights } from "../../../data/Highlights";

const HighLightsZoneContainer = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-around;
  width: 1200px;
  min-height: 108px;
  margin: 10px auto 0;
`;

const HighlightsElement = styled.div`
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 108px;
`;

const HighlightsName = styled.div`
  margin-top: 12px;
`;

const HighlightsIcon = styled.div`
  margin: 18px auto 8px;
  padding: 12px;
  background-image: url(${(props) => props.url});
  background-size: contain;
  background-position: center;
  width: 45px;
  height: 45px;
  background-repeat: no-repeat;
  border: 1px solid #dededf;
  border-radius: 30%;
`;

function HighLightsZone() {
  return (
    <HighLightsZoneContainer>
      {Highlights.map((item) => (
        <HighlightsElement key={item.name}>
          <HighlightsIcon url={item.imageUrl}></HighlightsIcon>
          <HighlightsName>{item.name}</HighlightsName>
        </HighlightsElement>
      ))}
    </HighLightsZoneContainer>
  );
}

export default HighLightsZone;
