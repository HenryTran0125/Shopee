/* eslint-disable no-unused-vars */
import styled from "styled-components";
import PropTypes from "prop-types";
import OverView from "./OverView";
import RatingResult from "./RatingResult";
import PriceOfProduct from "./PriceOfProduct";
import { formatPrice, formatVoucher } from "../utilities/formatNumber";
import Minus from "../Icons/Minus";
import Plus from "../Icons/Plus";

const DetailItemAlignment = styled.div`
  margin-top: 1.25rem;
  background: #fff;
`;

const DetailItemContainer = styled.div`
  display: flex;
`;

const DetailInformation = styled.section`
  flex: 1 0 auto;
  width: 0;
`;

const DetailInformationContainer = styled.div`
  box-sizing: border-box;
  padding: 1.4286rem 2.5rem 0 1.4286rem;
  width: 100%;
  flex: 1 1 auto;
`;

const TitleProduct = styled.div`
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-weight: 500;
  line-height: 24px;
  margin: 0;
  max-height: 48px;
  max-width: 665px;
  overflow: hidden;
  overflow-wrap: break-word;
  vertical-align: sub;
`;

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

const SpecificOption = styled.section`
  margin-bottom: 24px;
  align-items: baseline;
  display: flex;
`;

const QuantityOption = styled.section`
  color: #757575;
  margin-top: 16px;
  display: flex;
  align-items: center;
`;

const PropOption = styled.h3`
  color: #757575;
  flex-shrink: 0;
  font-size: inherit;
  font-weight: 400;
  margin: 0;
  text-transform: capitalize;
  width: 110px;
`;

const PropsOptionContainer = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 515px;
  flex-wrap: wrap;
  margin-top: -8px;
  max-height: 220px;
  max-width: 515px;
  overflow-y: auto;
`;

const OptionButton = styled.button`
  cursor: pointer;
  border-color: #d0011b;
  border: 1px solid rgba(0, 0, 0, 0.09);
  color: #d0011b;
  color: rgba(0, 0, 0, 0.8);
  align-items: center;
  background: #fff;
  border-radius: 2px;
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  margin: 8px 8px 0 0;
  min-height: 2.675rem;
  min-width: 5.5rem;
  outline: 0;
  overflow: visible;
  padding: 0.575rem 0.575rem 0.575rem 2.85rem;
  position: relative;
  text-align: left;
  word-break: break-word;
`;

const ImgOption = styled.img`
  height: 1.825rem;
  left: 0.5rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 1.825rem;
  border: 0;
`;

const BoxTickContainer = styled.div`
  bottom: 0;
  position: absolute;
  right: 0;
  height: 0.9375rem;
  overflow: hidden;
  width: 0.9375rem;
`;

const IconTick = styled.img`
  height: 8px;
  width: 8px;
  bottom: 0;
  position: absolute;
  right: 0;
  border: 0;
`;

const Prop2Button = styled.button`
  align-items: center;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 2px;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  margin: 8px 8px 0 0;
  min-height: 2.5rem;
  min-width: 5rem;
  outline: 0;
  overflow: visible;
  padding: 0.5rem;
  position: relative;
  text-align: left;
  word-break: break-word;
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

function DetailItem({ data }) {
  const mainImgs = data?.main_imgs;
  const video = data?.video_url;
  const slideImgs = [...mainImgs];
  slideImgs.splice(1, 0, video);
  const checkLink = slideImgs?.filter((item) => item.includes("cvf"));

  const titleProduct = data?.title;
  const ratingStar = data?.rating_star;
  const commentsCount = data?.comment_count;
  const afterDiscount = data?.flash_sale.price.single_value;
  const beforeDiscount = data?.flash_sale.price_before_discount.single_value;
  const discount = data?.skus[0]?.discount;

  const vouchers = data?.promotions[0].discount_value;
  const shippingThreshold =
    data?.delivery_info?.price_info_default?.free_shipping_threshold;
  const shippingFeeMin = data?.delivery_info?.price_info_default?.price_min;
  const shippingFeeMax = data?.delivery_info?.price_info_default?.price_max;
  const propsOption1 = data?.sku_props[0];
  const propsOption2 = data?.sku_props[1];

  return (
    <DetailItemAlignment>
      <DetailItemContainer>
        <OverView slideImgs={slideImgs} />

        <DetailInformation>
          <DetailInformationContainer>
            <TitleProduct>
              <img
                style={{ display: "inline", marginRight: "8px", border: "0" }}
                src="/MallTitle/MallTitle.svg"
              />
              <span style={{ fontSize: "20px" }}>{titleProduct}</span>
            </TitleProduct>

            <RatingResult
              ratingStar={ratingStar}
              commentsCount={commentsCount}
            />

            <PriceOfProduct
              afterDiscount={afterDiscount}
              beforeDiscount={beforeDiscount}
              discount={discount}
            />

            <OptionsAlignment>
              <OptionsContainer>
                <ShopVouchersAlignment>
                  <ShopVouchersContainer>
                    <H3>Shop Vouchers</H3>
                    <Vouchers>${formatVoucher(vouchers)} OFF</Vouchers>
                  </ShopVouchersContainer>
                </ShopVouchersAlignment>

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
                      <img
                        style={{
                          height: "9px",
                          marginLeft: "6px",
                          border: "0",
                        }}
                        src="/ViewPlans/ViewPlans.svg"
                      />
                    </Button>
                  </Interest>
                </Installment>

                <Shipping>
                  <H3>Shipping</H3>
                  <ShippingInfo>
                    <ShippingInfoAlignment>
                      <img
                        style={{ border: "0" }}
                        src="/Shipping/Shipping.svg"
                      />
                      <FulfilledText>Fulfilled by Shopee</FulfilledText>
                      <ShippingQuestionMark>
                        <img
                          style={{ width: "14px", height: "14px", border: "0" }}
                          src="/Shipping/ShippingQuestionMark.svg"
                        />
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
                        src="/Shipping/FreeShipping.png"
                      />
                      <FreeShippingContainer>
                        <FreeShippingText>Free Shipping</FreeShippingText>
                        <FreeShipingThreshold>
                          Free shipping for orders over ${shippingThreshold}
                        </FreeShipingThreshold>
                      </FreeShippingContainer>
                      <TruckContainer>
                        <img
                          style={{
                            height: "20px",
                            width: "20px",
                            marginLeft: "5px",
                            marginRight: "5px",
                            border: "0",
                          }}
                          src="/Shipping/Truck.svg"
                        />
                      </TruckContainer>

                      <ShippingFeeRangeContainer>
                        <ShippingFeeText>Shipping Fee</ShippingFeeText>
                        <PriceShippingFeeContainer>
                          <PriceShippingFeeRange>
                            ${shippingFeeMin} - ${shippingFeeMax}
                            <img
                              alt="arrow down"
                              style={{
                                height: "12px",
                                width: "12px",
                                marginLeft: "5px",
                                border: "0",
                              }}
                              src="/Shipping/ArrowDown.svg"
                            />
                          </PriceShippingFeeRange>
                        </PriceShippingFeeContainer>
                      </ShippingFeeRangeContainer>
                    </ShippingGridContainer>
                  </ShippingInfo>
                </Shipping>

                <PickingOptionsContainer>
                  <PickingOptionsAlignment>
                    <SpecificOption>
                      <PropOption>{propsOption1?.prop_name}</PropOption>
                      <PropsOptionContainer>
                        {propsOption1?.values.map((item, index) => (
                          <OptionButton key={index}>
                            <ImgOption src={item.imageUrl} />
                            {item.name}

                            <BoxTickContainer>
                              <IconTick src="/OptionSelected/Stick.svg" />
                            </BoxTickContainer>
                          </OptionButton>
                        ))}
                      </PropsOptionContainer>
                    </SpecificOption>

                    <SpecificOption>
                      <PropOption>{propsOption2?.prop_name}</PropOption>
                      <PropsOptionContainer>
                        {propsOption2?.values.map((item, index) => (
                          <Prop2Button key={index}>{item.name}</Prop2Button>
                        ))}
                      </PropsOptionContainer>
                    </SpecificOption>
                    <QuantityOption>
                      <H3>Quantity</H3>
                      <div>
                        <QuantityAdjustmentAlignment>
                          <QuantityAdjustment>
                            <MinusButton>
                              <Minus />
                            </MinusButton>
                            <QuantityDisplay value={1} />
                            <PlusButton>
                              <Plus />
                            </PlusButton>
                          </QuantityAdjustment>
                        </QuantityAdjustmentAlignment>
                      </div>
                    </QuantityOption>
                  </PickingOptionsAlignment>
                </PickingOptionsContainer>
              </OptionsContainer>
            </OptionsAlignment>
            <div>Buttons</div>
            <div>Shipping Info</div>
          </DetailInformationContainer>
        </DetailInformation>
      </DetailItemContainer>
    </DetailItemAlignment>
  );
}

export default DetailItem;

DetailItem.propTypes = {
  data: PropTypes.object,
};
