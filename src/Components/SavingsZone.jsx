/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Highlights } from "./Highlights";
import { Ads } from "./AdsSavingsZone";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";

const Zone = styled.div`
  background-color: #fff;
  padding-top: 30px;
  opacity: 1;
`;

const Advertisement = styled.div`
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const AdvertisementAlignment = styled.div`
  display: flex;
  min-height: 235px;
  max-height: 235px;
`;

const CarouselAlignment = styled.div`
  flex-grow: 2;
  flex-shrink: 1;
  flex-basis: 0;
  overflow: hidden;
  position: relative;
  cursor: pointer;
`;

const CarouselContainer = styled.ul`
  width: 1200%;
  height: 100%;
  list-style-type: none;
  display: flex;
`;

const Carousel = styled.li`
  width: 100%;
  /* height: 270px; */
  height: 100%;
  background-image: url(${(props) => props.source});
  transform: translate(-0%, 0);
`;

const GiftContainer = styled.div`
  /* width: 40%; */
  gap: 6px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
`;

const Gift = styled.div`
  width: 100%;
  height: 100%;
  /* display: inline-block; */
  flex: 1 1 50%;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;
const HighLightsZone = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-around;
  width: 1200px;
  min-height: 108px;
  margin: 10px auto 0;
`;

const HighlightsElement = styled.div`
  text-align: center;
  /* display: flex; */
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
  background-image: url(/HighlightsIcons/${(props) => props.imageUrl});
  background-size: contain;
  background-position: center;
  width: 45px;
  height: 45px;
  background-repeat: no-repeat;
  border: 1px solid #dededf;
  border-radius: 30%;
`;

function SavingsZone() {
  const [isHovered, setIsHovered] = useState(false);

  const dots = Ads.length;

  function onHover() {
    setIsHovered((currState) => !currState);
  }

  return (
    <Zone>
      <Advertisement>
        <AdvertisementAlignment>
          <CarouselAlignment
            onMouseEnter={() => onHover()}
            onMouseLeave={() => onHover()}
          >
            <CarouselContainer>
              {Ads.map((item) => (
                <Carousel source={item.source} key={item.source}></Carousel>
              ))}
            </CarouselContainer>

            <ChevronLeft
              style={{
                position: "absolute",
                top: "50%",
                left: "0",
                width: "1rem",
                height: "1rem",
                backgroundColor: "rgba(0, 0, 0, .18)",
                cursor: "pointer",
                boxShadow: "0 1px 8px 0 rgba(0, 0, 0, .09)",
                opacity: "0",
                color: "rgba(0,0,0, .87)",
                transition: "opacity .3s ease",
                visibility: isHovered ? "visible" : "hidden",
              }}
            />
            <ChevronRight
              style={{
                position: "absolute",
                top: "50%",
                right: "0",
                width: "1rem",
                height: "1rem",
                backgroundColor: "rgba(0, 0, 0, .18)",
                cursor: "pointer",
                boxShadow: "0 1px 8px 0 rgba(0, 0, 0, .09)",
                // opacity: "0",
                color: "rgba(0,0,0, .87)",
                transition: "opacity .3s ease",
                visibility: isHovered ? "visible" : "hidden",
              }}
            />
          </CarouselAlignment>

          <GiftContainer>
            <Gift src="/Ads/11.jpg" />
            <Gift src="/Ads/12.png" />
          </GiftContainer>
        </AdvertisementAlignment>
      </Advertisement>

      <HighLightsZone>
        {Highlights.map((item) => (
          <HighlightsElement key={item.name}>
            <HighlightsIcon imageUrl={item.imageUrl}></HighlightsIcon>
            <HighlightsName>{item.name}</HighlightsName>
          </HighlightsElement>
        ))}
      </HighLightsZone>
    </Zone>
  );
}

export default SavingsZone;
