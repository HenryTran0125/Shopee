/* eslint-disable no-unused-vars */
import { formatVoucher } from "../../../utilities/helpers";
import styled from "styled-components";
import PropTypes from "prop-types";
import ViewPlans from "../../../Icons/ViewPlans";
import DetailItemShipping from "./DetailItemShipping";
import DetailItemPickingColour from "./DetailItemPickingColour";
import DetailItemStorage from "./DetailItemStorage";
import DetailItemQuantity from "./DetailItemQuantity";
import { useState } from "react";

const OptionsAlignment = styled.div`
  margin-top: 1.5625rem;
  padding: 0 1.25rem;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ShopVouchersAlignment = styled.div`
  align-items: center;
  color: #222;
  display: flex;
  margin-bottom: 25px;
  margin-left: -4px;
  margin-top: -4px;
  padding: 4px;
`;

const ShopVouchersContainer = styled.section`
  display: flex;
  justify-content: start;
  align-items: center;
`;

const H3 = styled.h3`
  color: #757575;
  flex-shrink: 0;
  font-size: inherit;
  font-weight: 400;
  margin: 0;
  text-transform: capitalize;
  width: 110px;
`;

const Vouchers = styled.div`
  display: flex;
  flex: 1 1 auto;
  color: #d0011b;
  background: rgba(208, 1, 27, 0.08);
  margin-right: 0.625rem;
  align-items: center;
  border: 0;
  color: #ee4d2d;
  cursor: default;
  justify-content: center;
  padding: 3px 7px;
  position: relative;
  white-space: nowrap;
`;

const AddOn = styled.section`
  display: flex;
  align-items: center;
  color: #222;
  display: flex;
  margin-bottom: 25px;
  margin-left: -4px;
  margin-top: -4px;
  padding: 4px;
`;

const AddOnText = styled.div`
  background: rgba(208, 1, 27, 0.08);
  border-radius: 2px;
  color: #ee4d2d;
  font-size: 14px;
  max-width: 450px;
  overflow: hidden;
  padding: 3px 6px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Installment = styled.section`
  align-items: center;
  color: #222;
  display: flex;
  margin-bottom: 25px;
  margin-left: -4px;
  margin-top: -4px;
  padding: 4px;
`;

const Interest = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 0;
  color: #05a;
  flex-shrink: 0;
  margin-left: 20px;
  outline: 0;
  overflow: visible;
  position: relative;
  text-transform: capitalize;
  cursor: pointer;
`;

const PickingOptionsContainer = styled.div`
  padding-bottom: 15px;
  margin-bottom: 0;
  align-items: center;
  color: #222;
  display: flex;
  margin-left: -4px;
  margin-top: -4px;
  padding: 4px;
`;

const PickingOptionsAlignment = styled.div`
  display: flex;
  flex-direction: column;
`;

function Options({
  vouchers,
  shippingThreshold,
  shippingFeeMin,
  shippingFeeMax,
  colourOfProduct,
  storage,
  setColorOfPickedProduct,
  setColorOfHoveredProduct,
  quantity,
  setQuantity,
  setStoragePicked,
  setColorName,
}) {
  return (
    <OptionsAlignment>
      <OptionsContainer>
        {vouchers ? (
          <ShopVouchersAlignment>
            <ShopVouchersContainer>
              <H3>Shop Vouchers</H3>
              <Vouchers>${formatVoucher(vouchers)} OFF</Vouchers>
            </ShopVouchersContainer>
          </ShopVouchersAlignment>
        ) : (
          ""
        )}

        <AddOn>
          <H3>Add-On</H3>
          <AddOnText>Add-on Deal</AddOnText>
        </AddOn>

        <Installment>
          <H3>Installment</H3>
          <Interest>
            <div>12x $148.57 (Interest 0%)</div>

            <Button>
              View Plans
              <ViewPlans />
            </Button>
          </Interest>
        </Installment>

        <DetailItemShipping
          shippingThreshold={shippingThreshold}
          shippingFeeMin={shippingFeeMin}
          shippingFeeMax={shippingFeeMax}
        />

        <PickingOptionsContainer>
          <PickingOptionsAlignment>
            <DetailItemPickingColour
              colourOfProduct={colourOfProduct}
              setColorOfPickedProduct={setColorOfPickedProduct}
              setColorOfHoveredProduct={setColorOfHoveredProduct}
              setColorName={setColorName}
            />

            <DetailItemStorage
              storage={storage}
              setStoragePicked={setStoragePicked}
            />

            <DetailItemQuantity quantity={quantity} setQuantity={setQuantity} />
          </PickingOptionsAlignment>
        </PickingOptionsContainer>
      </OptionsContainer>
    </OptionsAlignment>
  );
}

export default Options;

Options.propTypes = {
  vouchers: PropTypes.any,
  shippingThreshold: PropTypes.any,
  shippingFeeMin: PropTypes.any,
  shippingFeeMax: PropTypes.any,
  colourOfProduct: PropTypes.any,
  storage: PropTypes.any,
  setColorOfPickedProduct: PropTypes.any,
  setColorOfHoveredProduct: PropTypes.any,
  setQuantity: PropTypes.any,
  setStoragePicked: PropTypes.any,
  setColorName: PropTypes.any,
  quantity: PropTypes.any,
};
