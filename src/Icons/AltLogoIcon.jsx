function AltLogoIcon() {
  return (
    <svg
      style={{
        position: "absolute",
        stroke: "#c6c6c6",
        fontSize: "1.5rem",
        fontWeight: "400",
        left: "50%",
        lineHeight: "2rem",
        top: "50%",
        transform: "translate(-50%, -50%)",
        height: "24px",
        width: "24px",
        overflowClipMargin: "content-box",
        overflow: "clip",
      }}
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 15 15"
      viewBox="0 0 15 15"
      x="0"
      y="0"
      width="15"
      height="15"
      stroke="#c6c6c6"
    >
      <g>
        <circle
          cx="7.5"
          cy="4.5"
          fill="none"
          r="3.8"
          strokeMiterlimit="10"
        ></circle>
        <path
          d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6"
          fill="none"
          strokeLinecap="round"
          strokeMiterlimit="10"
        ></path>
      </g>
    </svg>
  );
}

export default AltLogoIcon;
