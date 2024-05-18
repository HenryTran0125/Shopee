function Cart() {
  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        justifyContent: "center",
        margin: "0 10px",
        paddingBottom: "5px",
        alignItems: "center",
        padding: "10px 0",
      }}
    >
      <a
        style={{
          cursor: "pointer",
          margin: "0 0 0 5px",
          outline: "0",
          overflow: "visible",
        }}
      >
        <svg
          height={26}
          width={26}
          color="#fff"
          stroke="#fff"
          fill="#fff"
          viewBox="0 0 26.6 25.6"
        >
          <title>Shopping Cart Icon</title>
          <polyline
            fill="none"
            points="2 1.7 5.5 1.7 9.6 18.3 21.2 18.3 24.6 6.1 7 6.1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2.5"
          ></polyline>
          <circle cx="10.7" cy="23" r="2.2" stroke="none"></circle>
          <circle cx="19.7" cy="23" r="2.2" stroke="none"></circle>
        </svg>
      </a>
    </div>
  );
}

export default Cart;
