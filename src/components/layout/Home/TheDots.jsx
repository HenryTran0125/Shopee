import styled from "styled-components";
import PropTypes from "prop-types";

const DotContainer = styled.ul`
  display: flex;
  position: absolute;
  width: 100%;
  text-align: center;
  top: 90%;
  left: 50%;
  transform: translate(-50%);
  transition: transform opacity 0.5s ease;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const Dot = styled.li`
  background-color: ${(props) =>
    props.check === "true" ? "#ee4d2d" : "hsla(0, 0%, 100%, 0.4)"};
  /* background-color: #ee4d2d; */
  border: ${(props) =>
    props.check === "true"
      ? "1px solid #ee4d2d"
      : "1px solid hsla(0, 0%, 100%, 0.4)"};
  opacity: 1;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  cursor: pointer;
  display: inline-block;
  list-style-type: none;
`;

function TheDots({ dot, numberOfDots, onSelectDot }) {
  return (
    <DotContainer>
      {Array.from({ length: numberOfDots }).map((_, index) => (
        <Dot
          onClick={() => onSelectDot(index)}
          key={index}
          check={dot === index ? "true" : "false"}
        />
      ))}
    </DotContainer>
  );
}

export default TheDots;

TheDots.propTypes = {
  dot: PropTypes.any,
  numberOfDots: PropTypes.any,
  onSelectDot: PropTypes.func,
};
