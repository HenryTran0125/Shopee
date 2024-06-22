/* eslint-disable no-unused-vars */
import styled from "styled-components";
import PropTypes from "prop-types";
import { formatPrice } from "../utilities/formatNumber";
import { useData } from "../context/dataContext";

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PriceAlignment = styled.div`
  background: #fafafa;
  padding: 15px 20px;
  flex-direction: column;
  display: flex;
`;

const PriceDiscountContainer = styled.section`
  display: flex;
  align-items: center;
`;

const PriceDiscountAlignment = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 625px;
  min-height: 2.25rem;
  width: 625px;
  flex-wrap: wrap;
`;

const BeforeDiscount = styled.div`
  color: #929292;
  font-size: 1rem;
  margin-right: 10px;
  text-decoration: line-through;
`;

const AfterDiscount = styled.div`
  display: flex;
  align-items: center;
`;

const AfterDiscountText = styled.div`
  color: #d0011b;
  font-size: 1.875rem;
  font-weight: 500;
`;

const DiscountText = styled.div`
  background: #ee4d2d;
  border-radius: 2px;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1;
  margin-left: 15px;
  padding: 2px 4px;
  text-transform: uppercase;
  white-space: nowrap;
  background-color: #d0011b;
`;

const PriceWithNoDiscount = styled.div`
  display: flex;
  font-size: 1.875rem;
  font-weight: 500;
  color: #d0011b;
`;

const GuaranteeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Authentic = styled.div`
  background-image: url("/Guarantee/Guarantee.svg");
  height: 24px;
  width: 24px;
  margin-right: 10px;
  background-size: contain;
`;

const GuaranteedTextContainer = styled.div``;

const GuaranteedText = styled.div`
  color: #d0011b;
  font-size: 14px;
`;

const GuaranteedMoneyBack = styled.div`
  color: rgba(0, 0, 0, 0.54);
  font-size: 12px;
  margin-top: 4px;
`;

function PriceOfProduct() {
  const { dataDetailProduct } = useData();
  const checkFlashSale = dataDetailProduct?.flash_sale;
  const priceMin = dataDetailProduct?.price_info.price_min;
  const priceMax = dataDetailProduct?.price_info.price_max;
  const afterDiscount =
    dataDetailProduct?.flash_sale?.price_before_discount.single_value;
  const beforeDiscount =
    dataDetailProduct?.flash_sale?.price_before_discount.single_value;
  const discount = dataDetailProduct?.skus[0]?.discount;
  console.log(priceMin);

  return (
    <PriceContainer>
      <PriceAlignment>
        <PriceDiscountContainer>
          {checkFlashSale ? (
            <PriceDiscountAlignment>
              <BeforeDiscount>${formatPrice(beforeDiscount)}</BeforeDiscount>

              <AfterDiscount>
                <AfterDiscountText>
                  ${formatPrice(afterDiscount)}
                </AfterDiscountText>
                <DiscountText>{discount}% OFF</DiscountText>
              </AfterDiscount>
            </PriceDiscountAlignment>
          ) : (
            <PriceWithNoDiscount>
              ${priceMin} - ${priceMax}
            </PriceWithNoDiscount>
          )}
        </PriceDiscountContainer>
        <a style={{ cursor: "pointer", backgroundColor: "transparent" }}>
          <GuaranteeContainer>
            <Authentic></Authentic>
            <GuaranteedTextContainer>
              <GuaranteedText>Shopee Mall | 100% Authentic</GuaranteedText>
              <GuaranteedMoneyBack>
                Guaranteed Authentic or 2x Money Back
              </GuaranteedMoneyBack>
            </GuaranteedTextContainer>
          </GuaranteeContainer>
        </a>
      </PriceAlignment>
    </PriceContainer>
  );
}

export default PriceOfProduct;
