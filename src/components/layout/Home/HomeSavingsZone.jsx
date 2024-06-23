/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Ads } from "../../../data/AdsSavingsZone";

import HighLightsZone from "./HighLightsZone";

import Gift from "./Gift";
import HomeCarouselAds from "./HomeCarouselAds";

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

function HomeSavingsZone() {
  const [isHovered, setIsHovered] = useState(false);
  const [moving, setMoving] = useState(0);
  const [dot, setDot] = useState(0);
  const numberOfDots = Ads.length;

  function onSelectDot(index) {
    setDot(index);
  }

  console.log(Ads);

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

  return (
    <Zone>
      <Advertisement>
        <AdvertisementAlignment>
          <HomeCarouselAds
            Ads={Ads}
            isHovered={isHovered}
            moving={moving}
            onSlide={onSlide}
            onHover={onHover}
            dot={dot}
            numberOfDots={numberOfDots}
            onSelectDot={onSelectDot}
          />

          <Gift />
        </AdvertisementAlignment>
      </Advertisement>

      <HighLightsZone />
    </Zone>
  );
}

export default HomeSavingsZone;
