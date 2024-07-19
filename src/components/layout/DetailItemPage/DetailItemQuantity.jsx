/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Minus from "../../../Icons/Minus";
import Plus from "../../../Icons/Plus";
import { useState } from "react";
import PropTypes from "prop-types";

const H3 = styled.h3`
  color: #757575;
  flex-shrink: 0;
  font-size: inherit;
  font-weight: 400;
  margin: 0;
  text-transform: capitalize;
  width: 110px;
`;

const QuantityOption = styled.section`
  color: #757575;
  margin-top: 16px;
  display: flex;
  align-items: center;
`;

const QuantityAdjustmentAlignment = styled.div`
  margin-right: 15px;
`;

const QuantityAdjustment = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
`;

const MinusButton = styled.button`
  align-items: center;
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 2px;
  color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
  display: flex;
  font-size: 0.875rem;
  font-weight: 300;
  height: 32px;
  justify-content: center;
  letter-spacing: 0;
  line-height: 1;
  outline: none;
  transition: background-color 0.1s cubic-bezier(0.4, 0, 0.6, 1);
  width: 32px;
`;

const QuantityDisplay = styled.input`
  border-left: 0;
  border-radius: 0;
  border-right: 0;
  box-sizing: border-box;
  cursor: text;
  font-size: 16px;
  font-weight: 400;
  height: 32px;
  text-align: center;
  width: 50px;
  align-items: center;
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 2px;
  color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  letter-spacing: 0;
  line-height: 1;
  outline: none;
  transition: background-color 0.1s cubic-bezier(0.4, 0, 0.6, 1);
`;

const PlusButton = styled.button`
  align-items: center;
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 2px;
  color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
  display: flex;
  font-size: 0.875rem;
  font-weight: 300;
  height: 32px;
  justify-content: center;
  letter-spacing: 0;
  line-height: 1;
  outline: none;
  transition: background-color 0.1s cubic-bezier(0.4, 0, 0.6, 1);
  width: 32px;
`;

function DetailItemQuantity({ quantity, setQuantity }) {
  function Increasement() {
    setQuantity((currValue) => currValue + 1);
  }

  function Decreasement() {
    if (quantity > 1) {
      setQuantity((currValue) => currValue - 1);
    }
  }

  return (
    <QuantityOption>
      <H3>Quantity</H3>
      <div>
        <QuantityAdjustmentAlignment>
          <QuantityAdjustment>
            <MinusButton onClick={() => Decreasement()}>
              <Minus />
            </MinusButton>

            <QuantityDisplay type="text" value={quantity} />

            <PlusButton onClick={() => Increasement()}>
              <Plus />
            </PlusButton>
          </QuantityAdjustment>
        </QuantityAdjustmentAlignment>
      </div>
    </QuantityOption>
  );
}

export default DetailItemQuantity;

DetailItemQuantity.propTypes = {
  quantity: PropTypes.any,
  setQuantity: PropTypes.any,
};
