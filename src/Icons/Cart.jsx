/* eslint-disable no-unused-vars */
import styled from "styled-components";
import PropTypes from "prop-types";

const ItemsInCart = styled.div`
  color: #d0011b;
  background-color: #fff;
  border: 0.125rem solid #d0011b;
  border-radius: 1rem;
  height: 1.25rem;
  min-width: 1.25rem;
  line-height: 1.2em;
  margin-right: -0.875rem;
  padding: 0 0.6rem;
  position: absolute;
  text-align: center;
  top: -40%;
  right: -30%;
`;

function Cart({ setCartPreview }) {
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
        onMouseEnter={() => setCartPreview((currStatus) => !currStatus)}
        onMouseLeave={() => setCartPreview((currStatus) => !currStatus)}
        style={{
          cursor: "pointer",
          margin: "0 0 0 5px",
          outline: "0",
          overflow: "visible",
          position: "relative",
          display: "flex",
          alignItems: "center",
          marginRight: ".625rem",
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
        <ItemsInCart>0</ItemsInCart>
      </a>
    </div>
  );
}

export default Cart;

Cart.propTypes = {
  setCartPreview: PropTypes.any,
};
