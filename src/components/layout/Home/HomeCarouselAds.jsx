/* eslint-disable no-unused-vars */
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import styled from "styled-components";
import PropTypes from "prop-types";
import TheDots from "./TheDots";

const CarouselAlignment = styled.div`
  flex-grow: 2;
  flex-shrink: 1;
  flex-basis: 0;
  overflow: hidden;
  position: relative;
  cursor: pointer;
`;

const CarouselContainer = styled.ul`
  width: 1200%;
  height: 100%;
  list-style-type: none;
  display: flex;
`;

const Carousel = styled.li`
  display: inline-block;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.source});
  background-position: contain;
  transform: translate(${(props) => props.move}%, 0);
  transition: transform 500ms ease 0s;
`;

function HomeCarouselAds({
  Ads,
  isHovered,
  moving,
  onSlide,
  onHover,
  dot,
  numberOfDots,
  onSelectDot,
}) {
  return (
    <CarouselAlignment
      onMouseEnter={() => onHover()}
      onMouseLeave={() => onHover()}
    >
      <CarouselContainer>
        {Ads?.map((item, index) => (
          <Carousel move={moving * -100} source={item} key={index} />
        ))}
      </CarouselContainer>

      <ChevronLeft
        onClick={() => onSlide("prev")}
        style={{
          position: "absolute",
          top: "50%",
          left: "0",
          width: "2.1875rem",
          height: "3.75rem",
          fontSize: "20px",
          lineHeight: "20px",
          textAlign: "center",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, .18)",
          cursor: "pointer",
          boxShadow: "0 1px 8px 0 rgba(0, 0, 0, .09)",
          color: "#fff",
          transition: "opacity .3s ease",
          visibility: isHovered ? "visible" : "hidden",
        }}
      />

      <ChevronRight
        onClick={() => onSlide("next")}
        style={{
          position: "absolute",
          top: "50%",
          right: "0",
          width: "2.1875rem",
          height: "3.75rem",
          fontSize: "20px",
          lineHeight: "20px",
          textAlign: "center",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, .18)",
          cursor: "pointer",
          boxShadow: "0 1px 8px 0 rgba(0, 0, 0, .09)",
          color: "#fff",
          transition: "opacity .3s ease",
          visibility: isHovered ? "visible" : "hidden",
        }}
      />

      <TheDots
        dot={dot}
        numberOfDots={numberOfDots}
        onSelectDot={onSelectDot}
      />
    </CarouselAlignment>
  );
}

export default HomeCarouselAds;

HomeCarouselAds.propTypes = {
  Ads: PropTypes.any,
  isHovered: PropTypes.any,
  moving: PropTypes.any,
  onSlide: PropTypes.func,
  onHover: PropTypes.func,
  dot: PropTypes.any,
  numberOfDots: PropTypes.any,
  onSelectDot: PropTypes.any,
};
