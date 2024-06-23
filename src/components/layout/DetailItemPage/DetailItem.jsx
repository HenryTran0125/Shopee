/* eslint-disable no-unused-vars */
import styled from "styled-components";
import PropTypes from "prop-types";
import OverView from "./OverView";
import RatingResult from "./RatingResult";
import PriceOfProduct from "./PriceOfProduct";
import { formatPrice, formatVoucher } from "../../../utilities/helpers";
import Minus from "../../../Icons/Minus";
import Plus from "../../../Icons/Plus";
import Options from "./Options";
import ShippingPolicy from "./ShippingPolicy";

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

const ButtonBuyContainer = styled.div`
  display: flex;
`;

const AddToCart = styled.button`
  background: rgba(208, 1, 27, 0.08);
  display: flex;
  outline: 0;
  overflow: visible;
  position: relative;
  flex-direction: row;
  border: 1px solid #d0011b;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.03);
  color: #d0011b;
  cursor: pointer;
  max-width: 250px;
  height: 48px;
  padding: 0 20px;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  align-items: center;
  border-radius: 2px;
  box-sizing: border-box;
  justify-content: center;
  text-transform: capitalize;
  margin-right: 15px;
  min-width: 180px !important;
`;

const ImgAddToCart = styled.img`
  height: 20px;
  margin-right: 10px;
  width: 20px;
  border: 0;
`;

const AddToCartText = styled.span`
  text-transform: capitalize;
`;

const BuyNow = styled.button`
  background: #d0011b;
  outline: 0;
  overflow: visible;
  position: relative;
  height: 48px;
  padding: 0 20px;
  max-width: 250px;
  color: #fff;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  align-items: center;
  border: 0;
  border-radius: 2px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.09);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-transform: capitalize;
  margin-right: 15px;
  min-width: 180px !important;
`;

function DetailItem({ data }) {
  const mainImgs = data?.main_imgs;
  const video = data?.video_url;
  const likeCount = data?.liked_count;
  const slideImgs = [...mainImgs];
  slideImgs.splice(1, 0, video);
  // const checkLink = slideImgs?.filter((item) => item.includes("cvf"));

  const titleProduct = data?.title;
  const ratingStar = data?.rating_star;
  const commentsCount = data?.comment_count;

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
        <OverView slideImgs={slideImgs} likeCount={likeCount} />

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

            <PriceOfProduct />

            <Options
              vouchers={vouchers}
              shippingThreshold={shippingThreshold}
              shippingFeeMin={shippingFeeMin}
              shippingFeeMax={shippingFeeMax}
              propsOption1={propsOption1}
              propsOption2={propsOption2}
            />

            <div style={{ marginTop: "15px" }}>
              <div style={{ paddingLeft: "20px" }}>
                <ButtonBuyContainer>
                  <AddToCart>
                    <ImgAddToCart src="/AddToCart/AddToCart.svg" />
                    <AddToCartText>add to cart</AddToCartText>
                  </AddToCart>

                  <BuyNow>Buy Now</BuyNow>
                </ButtonBuyContainer>
              </div>
            </div>

            <ShippingPolicy />
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
