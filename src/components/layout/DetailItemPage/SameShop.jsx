/* eslint-disable no-unused-vars */
import styled from "styled-components";
import FromTheSameShopHeader from "./FromTheSameShopHeader";
import ProductOfTheSameShop from "./ProductOfTheSameShop";

function SameShop() {
  return (
    <div style={{ display: "contents" }}>
      <div style={{ marginTop: "20px" }}>
        <div>
          <FromTheSameShopHeader />

          <ProductOfTheSameShop />
        </div>
      </div>
    </div>
  );
}

export default SameShop;
