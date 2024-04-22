/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Highlights } from "../data/Highlights";
import { Ads } from "../data/AdsSavingsZone";
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
  height: 100%;
  background-image: url(${(props) => props.source});
  background-position: contain;
  transform: translate(${(props) => props.move}%, 0);
  transition: transform 500ms ease 0s;
`;

const DotContainer = styled.ul`
  display: flex;
  position: absolute;
  width: 100%;
  text-align: center;
  top: 90%;
  left: 50%;
  transform: translate(-50%);
  transition: transform opacity 0.5s ease;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const Dot = styled.li`
  background-color: ${(props) =>
    props.check === "true" ? "#ee4d2d" : "hsla(0, 0%, 100%, 0.4)"};
  /* background-color: #ee4d2d; */
  border: ${(props) =>
    props.check === "true"
      ? "1px solid #ee4d2d"
      : "1px solid hsla(0, 0%, 100%, 0.4)"};
  opacity: 1;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  cursor: pointer;
  display: inline-block;
  list-style-type: none;
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
  background-image: url(/HighlightsIcons/${(props) => props.url});
  background-size: contain;
  background-position: center;
  width: 45px;
  height: 45px;
  background-repeat: no-repeat;
  border: 1px solid #dededf;
  border-radius: 30%;
`;

function HomeSavingsZone() {
  const [isHovered, setIsHovered] = useState(false);
  const [moving, setMoving] = useState(0);
  const [dot, setDot] = useState(0);

  const numberOfDots = Ads.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setDot((currDot) => (currDot === numberOfDots - 1 ? 0 : currDot + 1));
      setMoving((currIndex) =>
        currIndex === Ads.length - 1 ? 0 : currIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [numberOfDots, dot]);

  function onHover() {
    setIsHovered((currState) => !currState);
  }

  function onSlide(move) {
    if (move === "next") {
      setMoving((currIndex) =>
        currIndex === Ads.length - 1 ? 0 : currIndex + 1
      );
      setDot((currDot) => (currDot === numberOfDots - 1 ? 0 : currDot + 1));
    } else if (move === "prev") {
      setMoving((currIndex) =>
        currIndex === 0 ? Ads.length - 1 : currIndex - 1
      );
      setDot((currDot) => (currDot === 0 ? numberOfDots - 1 : currDot - 1));
    }
  }

  function onSelectDot(index) {
    setDot(index);
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
                <Carousel
                  move={moving * -100}
                  source={item.source}
                  key={item.source}
                ></Carousel>
              ))}
            </CarouselContainer>

            <ChevronLeft
              onClick={() => onSlide("prev")}
              style={{
                position: "absolute",
                top: "50%",
                left: "0",
                width: "2.1875rem",
                height: "3.75rem",
                fontSize: "20px",
                lineHeight: "20px",
                textAlign: "center",
                transform: "translateY(-50%)",
                backgroundColor: "rgba(0, 0, 0, .18)",
                cursor: "pointer",
                boxShadow: "0 1px 8px 0 rgba(0, 0, 0, .09)",
                color: "#fff",
                transition: "opacity .3s ease",
                visibility: isHovered ? "visible" : "hidden",
              }}
            />

            <ChevronRight
              onClick={() => onSlide("next")}
              style={{
                position: "absolute",
                top: "50%",
                right: "0",
                width: "2.1875rem",
                height: "3.75rem",
                fontSize: "20px",
                lineHeight: "20px",
                textAlign: "center",
                transform: "translateY(-50%)",
                backgroundColor: "rgba(0, 0, 0, .18)",
                cursor: "pointer",
                boxShadow: "0 1px 8px 0 rgba(0, 0, 0, .09)",
                color: "#fff",
                transition: "opacity .3s ease",
                visibility: isHovered ? "visible" : "hidden",
              }}
            />

            <DotContainer>
              {Array.from({ length: numberOfDots }).map((_, index) => (
                <Dot
                  onClick={() => onSelectDot(index)}
                  key={index}
                  check={dot === index ? "true" : "false"}
                />
              ))}
            </DotContainer>
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
            <HighlightsIcon url={item.imageUrl}></HighlightsIcon>
            <HighlightsName>{item.name}</HighlightsName>
          </HighlightsElement>
        ))}
      </HighLightsZone>
    </Zone>
  );
}

export default HomeSavingsZone;
