function Truck() {
  return (
    <svg
      style={{
        height: "20px",
        width: "20px",
        marginLeft: "5px",
        marginRight: "5px",
        border: "0",
      }}
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 15 15"
      viewBox="0 0 15 15"
      x="0"
      y="0"
      height="15"
      width="15"
      stroke="#000"
    >
      <g>
        <line
          fill="none"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          x1="8.6"
          x2="4.2"
          y1="9.8"
          y2="9.8"
        ></line>
        <circle
          cx="3"
          cy="11.2"
          fill="none"
          r="2"
          strokeMiterlimit="10"
        ></circle>
        <circle
          cx="10"
          cy="11.2"
          fill="none"
          r="2"
          strokeMiterlimit="10"
        ></circle>
        <line
          fill="none"
          strokeMiterlimit="10"
          x1="10.5"
          x2="14.4"
          y1="7.3"
          y2="7.3"
        ></line>
        <polyline
          fill="none"
          points="1.5 9.8 .5 9.8 .5 1.8 10 1.8 10 9.1"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        ></polyline>
        <polyline
          fill="none"
          points="9.9 3.8 14 3.8 14.5 10.2 11.9 10.2"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        ></polyline>
      </g>
    </svg>
  );
}

export default Truck;
