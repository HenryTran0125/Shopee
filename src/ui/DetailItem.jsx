/* eslint-disable no-unused-vars */
import styled from "styled-components";
import PropTypes from "prop-types";
import { useState } from "react";

const DetailItemAlignment = styled.div`
  margin-top: 1.25rem;
  background: #fff;
`;

const DetailItemContainer = styled.div`
  display: flex;
`;

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

const HoveredImgContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const HoveredImage = styled.img``;

const HoveredVideo = styled.video`
  height: inherit;
  width: 100%;
`;

const ListElements = styled.div`
  display: flex;
  width: 200%;
  margin: 5px 0;
  flex-wrap: nowrap;
  align-items: center;
`;

const ElementContainer = styled.div`
  cursor: pointer;
  /* display: inline-block; */
  box-sizing: border-box;
  padding: 5px;
  height: 100px;
  /* min-height: 100%; */
  width: 20%;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-grow: 1;
  border: ${(props) => (props.check == "true" ? "2px solid #d0011b" : "")};
`;

const Video = styled.video`
  /* display: block; */
  /* min-height: 80px; */
  display: flex;
  /* flex-grow: 1; */
  height: 100%;
  width: 100%;
  object-fit: contain;
  object-position: center;
  box-sizing: border-box;
`;

const Img = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  /* object-fit: cover; */
  /* overflow: hidden; */
`;

const LeftArrowButton = styled.button`
  background-color: #cccccc;
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
  background-color: #cccccc;
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

const DetailInformation = styled.section`
  background-color: green;
  flex: 1 0 auto;
  width: 0;
`;

function DetailItem({ data }) {
  const [chosenElement, setChosenElement] = useState();
  const [isChosen, setIsChosen] = useState();

  const mainImgs = data?.main_imgs;
  const video = data?.video_url;
  const slideImgs = [...mainImgs];
  slideImgs.splice(1, 0, video);
  const checkLink = slideImgs?.filter((item) => item.includes("cvf"));

  function onHover(hoveredElement) {
    setChosenElement(hoveredElement);
  }

  console.log(checkLink);

  return (
    <DetailItemAlignment>
      <DetailItemContainer>
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
                <HoveredImgContainer>
                  <Img src={chosenElement ? chosenElement : slideImgs[0]} />
                </HoveredImgContainer>
              )}
            </HoveredElementContainer>

            <ListElements>
              {slideImgs.map((element, index) => (
                <ElementContainer
                  key={index}
                  check={isChosen == index ? "true" : "false"}
                  onMouseEnter={() =>
                    setIsChosen(isChosen == index ? isChosen : index)
                  }
                  onMouseLeave={() => setIsChosen()}
                >
                  {element.includes("cvf") ? (
                    <Video
                      src={element}
                      onMouseEnter={() => onHover(element)}
                    />
                  ) : (
                    <Img
                      src={element}
                      check={isChosen == index ? "true" : "false"}
                      onMouseEnter={() => onHover(element, index)}
                    />
                  )}
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
        </Overview>
        <DetailInformation>Hi</DetailInformation>
      </DetailItemContainer>
    </DetailItemAlignment>
  );
}

export default DetailItem;

DetailItem.propTypes = {
  data: PropTypes.object,
};
