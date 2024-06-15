/* eslint-disable no-unused-vars */
import styled from "styled-components";
import PropTypes from "prop-types";

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
`;

const MainContent = styled.div`
  overflow: hidden;
`;

const HoveredImageContainer = styled.div``;

const HoveredImage = styled.img``;

const ListImgs = styled.div`
  display: flex;
  /* position: relative; */
  width: 190%;
  /* overflow-y: hidden; */
  margin: 5px -5px;
  flex-wrap: nowrap;
`;

const ImgsContainer = styled.div`
  display: inline-block;
  box-sizing: border-box;
  padding: 5px;
  height: 100%;
  width: 20%;
`;

const Img = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  /* overflow: hidden; */
`;

const DetailInformation = styled.section`
  /* background-color: green; */
  flex: 1 0 auto;
  width: 0;
`;

function DetailItem({ data }) {
  const mainImgs = data?.main_imgs;
  const video = data?.video_url;
  // const slideImgs = mainImgs.splice(1, 0, video);
  return (
    <DetailItemAlignment>
      <DetailItemContainer>
        <Overview>
          <MainContent>
            <HoveredImageContainer>
              <video
                height="100%"
                width="100%"
                src={video}
                type="video/mp4"
                controls
              ></video>
            </HoveredImageContainer>

            <ListImgs>
              {mainImgs.map((element, index) => (
                <ImgsContainer key={index}>
                  <Img src={element} />
                </ImgsContainer>
              ))}
            </ListImgs>
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
