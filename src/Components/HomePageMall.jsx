/* eslint-disable no-unused-vars */
import styled from "styled-components";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { List } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

const CarouselInformation = [
  {
    alt: "Puma",
    source: "/MallCarousel/1.jpg",
  },
  {
    alt: "Apple",
    source: "/MallCarousel/2.jpg",
  },
  {
    alt: "Enjoy",
    source: "/MallCarousel/3.jpg",
  },
  {
    alt: "Authentic",
    source: "/MallCarousel/4.jpg",
  },
];

const Container = styled.div`
  margin-top: 12px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

const Headlines = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #d8d8d8;
`;

const Policy = styled.div`
  display: flex;
  /* width: 55%; */
  justify-content: space-around;
`;

const PolicyElement = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;

const MallContainer = styled.div`
  border-right: 1px solid #d8d8d8;
  padding-right: 24px;
`;

const MallText = styled.span`
  font-size: 1.0625rem;
  font-weight: 500;
  height: 100%;
  color: #d0011b;
  text-transform: uppercase;
`;

const PolicyText = styled.span`
  font-size: 1.0625rem;
  height: 100%;
`;

const Img = styled.img`
  height: 1.0625rem;
  width: 1.0625rem;
  margin-right: 6px;
`;

const More = styled.span`
  font-size: 1.0625rem;
  height: 100%;
  color: #d0011b;
`;

const Body = styled.div`
  margin-top: 12px;
  display: flex;
`;

const Carousel = styled.div`
  width: 390px;
  height: 452px;
  padding: 10px 0 10px 10px;
  background-color: #fff;
`;

const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  overflow-y: hidden;
`;

const CarouselList = styled.ul`
  width: 400%;
  height: 100%;
  list-style-type: none;
  display: flex;
`;

const CarouselContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const CarouselImage = styled.li`
  background-image: url(${(props) => props.source});
  background-repeat: no-repeat;
  background-size: cover;
  alt: ${(props) => props.alt};
  height: 100%;
  width: 100%;
  transform: translate(${(props) => props.translation}%, 0);
  transition: transform 500ms;
`;

const DotContainer = styled.ul`
  list-style-type: none;
  display: flex;
  position: absolute;
  left: 45%;
  top: 93%;
  width: 50px;
  height: 50px;
`;

const Dot = styled.li`
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin-right: 5px;
  background-color: ${(props) =>
    props.isActive ? "rgb(238, 77, 45)" : "rgb(255 255 255 / 40%)"};
  border: 1px solid
    ${(props) =>
      props.isActive ? "rgb(238, 77, 45)" : "rgb(255 255 255 / 40%)"};
`;

function HomePageMall() {
  const [isHovered, setIsHovered] = useState(false);
  const [moving, setMoving] = useState(0);
  const [checkDot, setCheckDot] = useState(0);

  const numberOfDots = 4;

  useEffect(() => {
    const timer = setInterval(() => {
      setCheckDot();
    }, 3000);
  });

  function onTranslate(newNumber) {
    setMoving((currNumber) => currNumber + newNumber);
  }

  function onHover() {
    setIsHovered((check) => !check);
  }
  return (
    <Container>
      <Headlines>
        <Policy>
          <PolicyElement>
            <MallContainer>
              <MallText>shopee mall</MallText>
            </MallContainer>
          </PolicyElement>
          <PolicyElement>
            <Img src="/ShopeeMall/FreeReturn.png" />
            <PolicyText>15-Day Free Returns</PolicyText>
          </PolicyElement>
          <PolicyElement>
            <Img src="/ShopeeMall/Authentic.png" />
            <PolicyText>100% Authentic</PolicyText>
          </PolicyElement>
          <PolicyElement>
            <Img src="/ShopeeMall/FreeShipping.png" />
            <PolicyText>Free Shipping</PolicyText>
          </PolicyElement>
        </Policy>

        <PolicyElement>
          <More>See All</More>
          <ChevronRightIcon
            style={{
              backgroundColor: "#d0011b",
              color: "#fff",
              borderRadius: "50%",
              marginLeft: "0.5rem",
            }}
          />
        </PolicyElement>
      </Headlines>

      <Body>
        <Carousel>
          <ListContainer
            onMouseEnter={() => onHover()}
            onMouseLeave={() => onHover()}
          >
            <CarouselList>
              {CarouselInformation.map((item, index) => (
                <CarouselContainer key={index}>
                  <CarouselImage
                    translation={moving}
                    alt={item.alt}
                    source={item.source}
                  ></CarouselImage>
                </CarouselContainer>
              ))}
            </CarouselList>
            <ChevronLeftIcon
              onClick={() => onTranslate(100)}
              style={{
                position: "absolute",
                top: "50%",
                left: 0,
                color: "rgb(255, 255, 255)",
                backgroundColor: "rgb(0 0 0 / 18%)",
                height: "50px",
                width: "24px",
                cursor: "pointer",
                visibility: isHovered ? "visible" : "hidden",
              }}
            />
            <ChevronRightIcon
              onClick={() => onTranslate(-100)}
              style={{
                position: "absolute",
                top: "50%",
                right: 0,
                color: "rgb(255, 255, 255)",
                backgroundColor: "rgb(0 0 0 / 18%)",
                height: "50px",
                width: "24px",
                cursor: "pointer",
                visibility: isHovered ? "visible" : "hidden",
              }}
            />
            {/* <DotContainer>
              <Dot></Dot>
              <Dot></Dot>
              <Dot></Dot>
              <Dot></Dot>
            </DotContainer> */}

            <DotContainer>
              {Array.from({ length: numberOfDots }).map((_, index) => (
                <Dot key={index} isActive={checkDot === index}></Dot>
              ))}
            </DotContainer>
          </ListContainer>
        </Carousel>

        <div></div>
      </Body>
    </Container>
  );
}

export default HomePageMall;
