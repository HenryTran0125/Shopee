/* eslint-disable no-unused-vars */
import styled from "styled-components";
import PropTypes from "prop-types";

const DetailItemAlignment = styled.div`
  margin-top: 20px;
  background: #fff;
`;

const DetailItemContainer = styled.div`
  display: flex;
`;

const Overview = styled.div`
  /* background-color: red; */
  flex-grow: 2;
  display: flex;
  flex-direction: column;
`;

const HoveredImageContainer = styled.div``;

const HoveredImage = styled.img``;

const ImageVideo = styled.div`
  background-image: url(${(props) => props.test});
`;

const DetailInformation = styled.div`
  background-color: green;
  flex-grow: 3;
`;

function DetailItem({ data }) {
  const mainImgs = data?.main_imgs;
  const video = data?.video_url;
  // const slideImgs = mainImgs.splice(1, 0, video);
  return (
    <DetailItemAlignment>
      <DetailItemContainer>
        <Overview>
          <div>
            <HoveredImageContainer>
              <img />
            </HoveredImageContainer>

            <ul>
              {mainImgs.map((element, index) => (
                <li key={index}>
                  <img src={element} />
                  {/* <ImageVideo test={video}></ImageVideo> */}
                  {/* <video src={video} type="video/mp4"></video> */}
                </li>
              ))}
            </ul>
          </div>
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
