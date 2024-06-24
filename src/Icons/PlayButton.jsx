function PlayButton() {
  return (
    <svg
      style={{
        left: "50%",
        position: "absolute",
        top: "50%",
        transform: "translate3d(-16px, -16px, 0)",
        width: "32px",
        height: "32px",
      }}
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 15 15"
      viewBox="0 0 15 15"
      x="0"
      y="0"
      height="15"
      width="15"
    >
      <g opacity=".54">
        <g>
          <circle cx="7.5" cy="7.5" fill="#040000" r="7.3"></circle>
          <path
            d="m7.5.5c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7m0-.5c-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5 7.5-3.4 7.5-7.5-3.4-7.5-7.5-7.5z"
            fill="#ffffff"
          ></path>
        </g>
      </g>
      <path
        d="m6.1 5.1c0-.2.1-.3.3-.2l3.3 2.3c.2.1.2.3 0 .4l-3.3 2.4c-.2.1-.3.1-.3-.2z"
        fill="#ffffff"
      ></path>
    </svg>
  );
}

export default PlayButton;
