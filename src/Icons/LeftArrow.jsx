import PropTypes from "prop-types";

function LeftArrow({ border, color, height, width, fill }) {
  return (
    <svg
      style={{ border: border, color: color, height: height, width: width }}
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 13 20"
      viewBox="0 0 13 20"
      x="0"
      y="0"
      height="21"
      width="13"
      fill={fill}
    >
      <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9"></polygon>
    </svg>
  );
}

export default LeftArrow;

LeftArrow.propTypes = {
  border: PropTypes.any,
  color: PropTypes.any,
  height: PropTypes.any,
  width: PropTypes.any,
  fill: PropTypes.any,
};
