/* eslint-disable no-unused-vars */
import styled from "styled-components";
import FreeShipping from "../../../assets/images/Shipping/FreeShipping.png";
import ShippingQuestionMarkIcon from "../../../Icons/ShippingQuestionMarkIcon";
import ShippingIcon from "../../../Icons/ShippingIcon";
import Truck from "../../../Icons/Truck";
import DetailDownArrow from "../../../Icons/DetailDownArrow";
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

const Shipping = styled.section`
  display: flex;
  align-items: flex-start;
  max-width: 625px;
  color: #222;
  margin-bottom: 25px;
  margin-left: -4px;
  margin-top: -4px;
  padding: 4px;
`;

const ShippingInfo = styled.div`
  width: 515px;
  height: auto;
`;

const ShippingInfoAlignment = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 0.625rem;
  margin-right: 1.375rem;
`;

const FulfilledText = styled.div`
  color: #636363;
  line-height: 1;
  margin: 0 10px;
`;

const ShippingQuestionMark = styled.div`
  display: flex;
  align-items: center;
`;

const ShippingGridContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;

const FreeShippingContainer = styled.div`
  grid-column: 2;
  grid-row: 1;
  margin-left: 7px;
  margin-bottom: 12px;
`;

const FreeShippingText = styled.div`
  align-items: center;
  color: #222;
  display: flex;
`;

const FreeShipingThreshold = styled.div`
  color: rgba(0, 0, 0, 0.54);
  font-weight: 300;
  margin-top: 2px;
`;

const TruckContainer = styled.div`
  grid-column: 1;
  grid-row: 2;
  justify-self: center;
`;

const ShippingFeeRangeContainer = styled.div`
  grid-column: 2;
  grid-row: 2;
  margin-left: 7px;
  display: flex;
  align-items: center;
`;

const ShippingFeeText = styled.div`
  color: #636363;
  margin-right: 10px;
  text-transform: capitalize;
  width: 110px;
`;

const PriceShippingFeeContainer = styled.div`
  display: flex;
  outline: 0;
  overflow: visible;
  position: relative;
`;

const PriceShippingFeeRange = styled.div`
  display: flex;
  align-items: center;
  color: #222;
  cursor: pointer;
`;

function DetailItemShipping({
  shippingThreshold,
  shippingFeeMin,
  shippingFeeMax,
}) {
  return (
    <Shipping>
      <H3>Shipping</H3>
      <ShippingInfo>
        <ShippingInfoAlignment>
          <ShippingIcon />
          <FulfilledText>Fulfilled by Shopee</FulfilledText>
          <ShippingQuestionMark>
            <ShippingQuestionMarkIcon />
          </ShippingQuestionMark>
        </ShippingInfoAlignment>

        <ShippingGridContainer>
          <img
            style={{
              gridRow: "1",
              marginBottom: "12px",
              justifyContent: "center",
              gridColumn: "1",
              border: "0",
              height: "20px",
            }}
            src={FreeShipping}
          />
          <FreeShippingContainer>
            <FreeShippingText>Free Shipping</FreeShippingText>
            <FreeShipingThreshold>
              Free shipping for orders over ${shippingThreshold}
            </FreeShipingThreshold>
          </FreeShippingContainer>
          <TruckContainer>
            <Truck />
          </TruckContainer>

          <ShippingFeeRangeContainer>
            <ShippingFeeText>Shipping Fee</ShippingFeeText>
            <PriceShippingFeeContainer>
              <PriceShippingFeeRange>
                ${shippingFeeMin} - ${shippingFeeMax}
                <DetailDownArrow />
              </PriceShippingFeeRange>
            </PriceShippingFeeContainer>
          </ShippingFeeRangeContainer>
        </ShippingGridContainer>
      </ShippingInfo>
    </Shipping>
  );
}

export default DetailItemShipping;

DetailItemShipping.propTypes = {
  shippingThreshold: PropTypes.any,
  shippingFeeMin: PropTypes.any,
  shippingFeeMax: PropTypes.any,
};
