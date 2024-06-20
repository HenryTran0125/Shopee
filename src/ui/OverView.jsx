/* eslint-disable no-unused-vars */
import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

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
  background-color: transparent(#000);
  height: 2.5rem;
  width: 1.5rem;
  position: absolute;
  left: 0px;
  align-items: center;
  border: 0;
  cursor: pointer;
  display: flex;
  font-size: 0.875rem;
  font-weight: 300;
  justify-content: center;
  letter-spacing: 0;
  line-height: 1;
  outline: none;
  transition: background-color 0.1s cubic-bezier(0.4, 0, 0.6, 1);
  padding: 0;
`;

const RightArrowButton = styled.button`
  background-color: transparent(#000);
  height: 2.5rem;
  width: 1.5rem;
  position: absolute;
  right: 0px;
  align-items: center;
  border: 0;
  cursor: pointer;
  display: flex;
  font-size: 0.875rem;
  font-weight: 300;
  justify-content: center;
  letter-spacing: 0;
  line-height: 1;
  outline: none;
  transition: background-color 0.1s cubic-bezier(0.4, 0, 0.6, 1);
  padding: 0;
`;

const PlayButton = styled.img`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate3d(-16px, -16px, 0);
  width: 32px;
  height: 32px;
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

function OverView({ slideImgs }) {
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

        <ListElements length={lengthOfImgs}>
          {slideImgs?.map((element, index) => (
            <ElementContainer length={lengthOfImgs} key={index}>
              {element.includes("cvf") ? (
                <>
                  <Video src={element}></Video>
                  <PlayButton src="/PlayButton/PlayButton.svg" />
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
            <img src="/Arrow/LeftArrow.svg" />
          </LeftArrowButton>

          <RightArrowButton>
            <img src="/Arrow/RightArrow.svg" />
          </RightArrowButton>
        </ListElements>
      </MainContent>
      <ShareAndLove>
        <SocialMedia>
          <Share>Share: </Share>
          <button></button>
          <button></button>
          <button></button>
        </SocialMedia>
        <div></div>
      </ShareAndLove>
    </Overview>
  );
}

export default OverView;

OverView.propTypes = {
  slideImgs: PropTypes.any,
};
