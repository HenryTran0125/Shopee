/* eslint-disable no-unused-vars */
import styled from "styled-components";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { List } from "@mui/material";

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
  overflow-x: hidden;
`;

const CarouselList = styled.ul`
  width: 400%;
  height: 100%;
  list-style-type: none;
  display: flex;
`;

const CarouselImage = styled.li`
  background-image: url(${(props) => props.source});
  background-repeat: no-repeat;
  background-size: cover;
  alt: ${(props) => props.alt};
  height: 100%;
  width: 100%;
`;

function HomePageMall() {
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
          <ListContainer>
            <CarouselList>
              {CarouselInformation.map((item) => (
                <CarouselImage
                  key={item.alt}
                  alt={item.alt}
                  source={item.source}
                ></CarouselImage>
              ))}
            </CarouselList>
          </ListContainer>
        </Carousel>

        <div></div>
      </Body>
    </Container>
  );
}

export default HomePageMall;
