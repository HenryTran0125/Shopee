function AddToCartIcon() {
  return (
    <svg
      style={{
        height: "20px",
        width: "20px",
        marginRight: "10px",
      }}
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 15 15"
      viewBox="0 0 15 15"
      x="0"
      y="0"
      width="15"
      height="15"
      stroke="#d0011b"
      fill="#d0011b"
    >
      <g>
        <g>
          <polyline
            fill="none"
            points=".5 .5 2.7 .5 5.2 11 12.4 11 14.5 3.5 3.7 3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          ></polyline>
          <circle cx="6" cy="13.5" r="1" stroke="none"></circle>
          <circle cx="11.5" cy="13.5" r="1" stroke="none"></circle>
        </g>
        <line
          fill="none"
          strokeLinecap="round"
          strokeMiterlimit="10"
          x1="7.5"
          x2="10.5"
          y1="7"
          y2="7"
        ></line>
        <line
          fill="none"
          strokeLinecap="round"
          strokeMiterlimit="10"
          x1="9"
          x2="9"
          y1="8.5"
          y2="5.5"
        ></line>
      </g>
    </svg>
  );
}

export default AddToCartIcon;
