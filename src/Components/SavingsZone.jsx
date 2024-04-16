/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Highlights } from "./Highlights";

const Zone = styled.div`
  background-color: #fff;
  margin-top: 30px;
  opacity: 1;
`;

const ZoneAlignment = styled.div`
  width: 57%;
  min-width: 1200px;
  margin: 0 auto;
`;
const Advertisement = styled.div`
  display: flex;
  gap: 5px;
`;
const CarouselContainer = styled.div`
  /* width: 100%; */
`;

const Carousel = styled.img`
  width: 100%;
  /* height: 270px; */
  height: 100%;
  display: inline-block;
`;

const GiftContainer = styled.div`
  width: 40%;
  gap: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Gift = styled.img`
  width: 100%;
  height: 100%;
  display: inline-block;
`;
const HighLightsZone = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-around;
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
  const [data, setData] = useState(null);

  useEffect(() => {
    async function API() {
      try {
        const response = await fetch(
          "https://partner.shopeemobile.com/api/v2/product/get_category?partner_id=851249&timestamp=1654673582&shop_id=1001094&access_token=367a0a8eb9d1837cbf7c43b587a0faa4&sign=a40fc50a08c382eeee08e2eb00deb8464c6fdcbe4f1c271e033cdbca3ded4d5b&language=zh-hans"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Could not fetch data:", error);
      }
    }

    API();
  }, []);

  return (
    <Zone>
      <ZoneAlignment>
        <Advertisement>
          <CarouselContainer>
            <Carousel src="/Ads/1.jpg" />
          </CarouselContainer>

          <GiftContainer>
            <Gift src="/Ads/11.jpg" />
            <Gift src="/Ads/12.png" />
          </GiftContainer>
        </Advertisement>

        <HighLightsZone>
          {Highlights.map((item) => (
            <HighlightsElement key={item.name}>
              <HighlightsIcon imageUrl={item.imageUrl}></HighlightsIcon>
              <HighlightsName>{item.name}</HighlightsName>
            </HighlightsElement>
          ))}
        </HighLightsZone>
      </ZoneAlignment>
    </Zone>
  );
}

export default SavingsZone;
