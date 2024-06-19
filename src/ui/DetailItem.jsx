/* eslint-disable no-unused-vars */
import styled from "styled-components";
import PropTypes from "prop-types";
import { useState } from "react";
import {
  formatNumber,
  formatNumberInThousand,
} from "../utilities/formatNumber";
import NewButton from "./NewButton";

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

const HoveredVideo = styled.video`
  height: inherit;
  width: 100%;
`;

const ListElements = styled.div`
  flex: 0;
  display: flex;
  width: 200%;
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
  width: 20%;
  position: relative;
`;

const Video = styled.video`
  display: block;
  height: 80px;
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
  background-color: #cccccc;
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

const DetailInformation = styled.section`
  flex: 1 0 auto;
  width: 0;
`;

const DetailInformationContainer = styled.div`
  box-sizing: border-box;
  padding: 1.4286rem 2.5rem 0 1.4286rem;
  width: 100%;
  flex: 1 1 auto;
`;

const TitleProduct = styled.div`
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-weight: 500;
  line-height: 24px;
  margin: 0;
  max-height: 48px;
  max-width: 665px;
  overflow: hidden;
  overflow-wrap: break-word;
  vertical-align: sub;
`;

const RatingContainer = styled.div`
  display: flex;
  margin-top: 0.625rem;
  min-height: 1.55rem;
`;

const RatingStar = styled.div`
  border-bottom: 1px solid #d0011b;
  color: #d0011b;
  font-size: 1rem;
  margin-right: 5px;
  padding-bottom: 1px;
  cursor: pointer;
  text-transform: none;
`;

const CommentsCount = styled.div`
  border-bottom: 1px solid #555;
  color: #222;
  font-size: 1rem;
  margin-right: 5px;
  padding-bottom: 1px;
  cursor: pointer;
  text-transform: none;
`;

const RatingsText = styled.div`
  margin-right: 5px;
  padding: 4px 0;
  color: #767676;
  font-size: 0.875rem;
  text-transform: capitalize;
  cursor: pointer;
`;

function DetailItem({ data }) {
  const [chosenElement, setChosenElement] = useState();
  const [isChosen, setIsChosen] = useState();

  const mainImgs = data?.main_imgs;
  const video = data?.video_url;
  const slideImgs = [...mainImgs];
  slideImgs.splice(1, 0, video);
  const checkLink = slideImgs?.filter((item) => item.includes("cvf"));

  const titleProduct = data?.title;
  const ratingStar = data?.rating_star;
  const commentsCount = data?.comment_count;

  function onHover(hoveredElement) {
    setChosenElement(hoveredElement);
  }

  // console.log(slideImgs);
  // console.log(chosenElement);
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
                <Img src={chosenElement ? chosenElement : slideImgs[0]} />
              )}
            </HoveredElementContainer>

            <ListElements>
              {slideImgs.map((element, index) => (
                <ElementContainer key={index}>
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
        </Overview>

        <DetailInformation>
          <DetailInformationContainer>
            <TitleProduct>
              <img
                style={{ display: "inline", marginRight: "8px", border: "0" }}
                src="/MallTitle/MallTitle.svg"
              />
              <span style={{ fontSize: "20px" }}>{titleProduct}</span>
            </TitleProduct>

            <RatingContainer>
              <NewButton
                display={"flex"}
                cursor={"pointer"}
                backgroundColor={"transparent"}
                border={0}
                alignItems={"center"}
                padding={"0 15px"}
              >
                <RatingStar>{formatNumber(ratingStar, 1)}</RatingStar>

                <div>Stars</div>
              </NewButton>

              <NewButton
                display={"flex"}
                cursor={"pointer"}
                backgroundColor={"transparent"}
                border={0}
                alignItems={"center"}
                padding={"0 15px"}
                borderLeft={"1px solid rgba(0,0,0, .14)"}
              >
                <CommentsCount>
                  {formatNumberInThousand(commentsCount)}
                </CommentsCount>

                <RatingsText>Ratings</RatingsText>
              </NewButton>

              <NewButton
                background={"none"}
                border={"unset"}
                fontSize={"14px"}
                marginLeft={"auto"}
                color={"rgba(0,0,0, .54)"}
                cursor={"pointer"}
              >
                Report
              </NewButton>
            </RatingContainer>

            <div>Price</div>
            <div>Options</div>
            <div>Buttons</div>
            <div>Shipping Info</div>
          </DetailInformationContainer>
        </DetailInformation>
      </DetailItemContainer>
    </DetailItemAlignment>
  );
}

export default DetailItem;

DetailItem.propTypes = {
  data: PropTypes.object,
};
