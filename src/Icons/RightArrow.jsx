import PropTypes from "prop-types";

function RightArrow({ border, color, height, width, fill }) {
  return (
    <svg
      style={{ border: border, color: color, height: height, width: width }}
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 13 21"
      viewBox="0 0 13 21"
      x="0"
      y="0"
      width="13"
      height="21"
      fill={fill}
    >
      <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11"></polygon>
    </svg>
  );
}

export default RightArrow;

RightArrow.propTypes = {
  border: PropTypes.any,
  color: PropTypes.any,
  height: PropTypes.any,
  width: PropTypes.any,
  fill: PropTypes.any,
};
