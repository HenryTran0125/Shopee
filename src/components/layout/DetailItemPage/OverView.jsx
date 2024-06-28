/* eslint-disable no-unused-vars */
import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { roundingNumber } from "../../../utilities/helpers";
import PlayButton from "../../../Icons/PlayButton";
import LeftArrow from "../../../Icons/LeftArrow";
import RightArrow from "../../../Icons/RightArrow";

const Overview = styled.section`
  display: block;
  width: 480px;
  padding: 15px;
  flex-shrink: 1;
  min-height: 450px;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`;

const HoveredElementContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  min-height: 450px;
`;

const HoveredVideoContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const HoveredVideo = styled.video`
  height: inherit;
  width: 100%;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const ListElements = styled.div`
  flex: 0;
  display: flex;
  width: ${(props) => props.length * 100}px;
  margin: 5px 0;
  flex-wrap: nowrap;
  align-items: center;
`;

const ElementContainer = styled.div`
  cursor: pointer;
  display: inline-block;
  box-sizing: border-box;
  padding: 5px;
  height: 100%;
  min-height: 100%;
  width: ${(props) => (props.length * 10) / 5}%;
  /* width: 20%; */
  position: relative;
`;

const Video = styled.video`
  display: block;
  height: 90px;
  width: 100%;
  position: relative;
`;

const Img = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  border: 0;
`;

const LeftArrowButton = styled.button`
  background-color: rgba(0, 0, 0, 0.2) !important;
  color: #fff;
  height: 40px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 2.5rem;
  width: 1.5rem;
  left: 5px;
  border: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 1;
  outline: none;
  transition: background-color 0.1s cubic-bezier(0.4, 0, 0.6, 1);
  padding: 0;
`;

const RightArrowButton = styled.button`
  background-color: rgba(0, 0, 0, 0.2) !important;
  color: #fff;
  height: 40px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 2.5rem;
  width: 1.5rem;
  right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 1;
  outline: none;
  transition: background-color 0.1s cubic-bezier(0.4, 0, 0.6, 1);
  padding: 0;
`;

const ShareAndLove = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

const SocialMedia = styled.div`
  border-right: 1px solid rgba(0, 0, 0, 0.09);
  padding: 0 30px;
  display: flex;
  align-items: center;
`;

const Share = styled.div`
  color: #222;
  font-size: 16px;
`;

const Messenger = styled.button`
  cursor: pointer;
  border: 0;
  height: 25px;
  margin-left: 5px;
  outline: 0;
  overflow: visible;
  padding: 0;
  position: relative;
  width: 25px;
  background-position: 0 -100%;
  background-color: transparent;
  background-image: url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/12f585f9c56d4f30.png);
  background-size: 100%;
`;
const Facebook = styled.button`
  cursor: pointer;
  border: 0;
  height: 25px;
  margin-left: 5px;
  outline: 0;
  overflow: visible;
  padding: 0;
  position: relative;
  width: 25px;
  background-position: 0 0;
  background-color: transparent;
  background-image: url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/12f585f9c56d4f30.png);
  background-size: 100%;
`;
const Pinterest = styled.button`
  cursor: pointer;
  border: 0;
  height: 25px;
  margin-left: 5px;
  outline: 0;
  overflow: visible;
  padding: 0;
  position: relative;
  width: 25px;
  background-position: 0 -300%;
  background-color: transparent;
  background-image: url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/12f585f9c56d4f30.png);
  background-size: 100%;
`;
const Twitter = styled.button`
  cursor: pointer;
  border: 0;
  height: 25px;
  margin-left: 5px;
  outline: 0;
  overflow: visible;
  padding: 0;
  position: relative;
  width: 25px;
  background-position: 0 -400%;
  background-color: transparent;
  background-image: url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/12f585f9c56d4f30.png);
  background-size: 100%;
`;

const Favorite = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const FavoriteButton = styled.button`
  background-color: transparent;
  border: 0;
  display: flex;
  outline: 0;
  overflow: visible;
  position: relative;
  cursor: pointer;
`;

const FavoriteText = styled.div`
  color: #222;
  font-size: 16px;
`;

function OverView({ slideImgs, likeCount }) {
  const [chosenElement, setChosenElement] = useState();
  const [isChosen, setIsChosen] = useState();
  const lengthOfImgs = slideImgs.length;
  function onHover(hoveredElement) {
    setChosenElement(hoveredElement);
  }
  return (
    <Overview>
      <MainContent>
        <HoveredElementContainer>
          {chosenElement?.includes("cvf") ? (
            <HoveredVideoContainer>
              <HoveredVideo
                src={chosenElement ? chosenElement : slideImgs[0]}
                autoPlay
                muted
              />
            </HoveredVideoContainer>
          ) : (
            <Img src={chosenElement ? chosenElement : slideImgs[0]} />
          )}
        </HoveredElementContainer>

        <Wrapper>
          <ListElements length={lengthOfImgs}>
            {slideImgs?.map((element, index) => (
              <ElementContainer length={lengthOfImgs} key={index}>
                {element.includes("cvf") ? (
                  <>
                    <Video src={element}></Video>
                    <PlayButton />
                  </>
                ) : (
                  <Img src={element} />
                )}

                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    bottom: "0",
                    right: "0",
                    border: `${isChosen == index ? "2px solid #d0011b" : ""}`,
                  }}
                  onMouseEnter={() => {
                    setIsChosen(isChosen == index ? isChosen : index);
                    onHover(element);
                  }}
                ></div>
              </ElementContainer>
            ))}

            <LeftArrowButton>
              <LeftArrow border={0} fill={"white"} />
            </LeftArrowButton>

            <RightArrowButton>
              <RightArrow fill={"white"} />
            </RightArrowButton>
          </ListElements>
        </Wrapper>
      </MainContent>

      <ShareAndLove>
        <SocialMedia>
          <Share>Share: </Share>
          <Messenger />
          <Facebook />
          <Pinterest />
          <Twitter />
        </SocialMedia>

        <Favorite>
          <FavoriteButton>
            <svg
              style={{ overflow: "hidden", marginRight: "10px" }}
              width="24"
              height="20"
            >
              <path
                d="M19.469 1.262c-5.284-1.53-7.47 4.142-7.47 4.142S9.815-.269 4.532 1.262C-1.937 3.138.44 13.832 12 19.333c11.559-5.501 13.938-16.195 7.469-18.07z"
                stroke="#FF424F"
                strokeWidth="1.5"
                fill="none"
                fillRule="evenodd"
                strokeLinejoin="round"
              ></path>
            </svg>
            <FavoriteText>Favorite({roundingNumber(likeCount)})</FavoriteText>
          </FavoriteButton>
        </Favorite>
      </ShareAndLove>
    </Overview>
  );
}

export default OverView;

OverView.propTypes = {
  slideImgs: PropTypes.any,
  likeCount: PropTypes.any,
};
