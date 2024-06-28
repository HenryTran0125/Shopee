/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { useStore } from "../../../services/apiStore";
import PropTypes from "prop-types";
import AltLogoIcon from "../../../Icons/AltLogoIcon";
import ShopeeMall from "../../../assets/images/Is_official_shop/ShopeeMall.png";
import ChatNow from "../../../Icons/ChatNow";
import ViewShop from "../../../Icons/ViewShop";
import { roundUp } from "../../../utilities/helpers";

const StoreSetting = styled.section`
  background: #fff;
  border-radius: 0.125rem;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
  margin-top: 0.9375rem;
  overflow: hidden;
  padding: 0.625rem;
`;

const StoreAlignment = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  overflow: visible;
  padding: 25px !important;
`;

const StoreInformationContainer = styled.div`
  border-right: 1px solid rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  display: flex;
  max-width: 440px;
  padding-right: 25px;
`;

const StoreDisplaysResult = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 20px 50px;
  color: rgba(0, 0, 0, 0.4);
  gap: 20px 50px;
  padding-left: 25px;
  flex-grow: 1;
`;

const LogoContainer = styled.a`
  flex-shrink: 0;
  margin-right: 20px;
  outline: 0;
  overflow: visible;
  position: relative;
  cursor: pointer;
  text-decoration: none;
`;

const LogoAlignment = styled.div`
  height: 80px;
  width: 80px;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 50%;
  box-sizing: border-box;
  display: inline-block;
`;

const AltLogoIconContainer = styled.div`
  background-color: #f5f5f5;
  border-radius: 50%;
  overflow: hidden;
  padding-top: 100%;
  width: 100%;
  position: relative;
`;

const Img = styled.img`
  border-radius: 50%;
  display: block;
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
  position: absolute;
  border: 0;
`;

const OfficialShopContainer = styled.div`
  bottom: 0;
  position: absolute;
  text-align: center;
  width: 100%;
`;

const OfficialShopAlignment = styled.div`
  display: flex;
  justify-content: center;
  white-space: normal;
`;

const ImgShopeeMall = styled.img`
  width: 64px;
  aspect-ratio: auto 64 / 16;
  height: 16px;
  border: 0;
`;

const TitleAndFunctionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  overflow: hidden;
`;

const Title = styled.div`
  color: rgba(0, 0, 0, 0.87);
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const LastActiveContainer = styled.div`
  align-items: center;
  color: #757575;
  display: flex;
  font-size: 14px;
`;

const LastActiveTime = styled.div`
  color: rgba(0, 0, 0, 0.54);
  font-size: 14px;
  text-transform: capitalize;
`;

const ShopContactContainer = styled.div`
  display: flex;
  margin-top: 8px;
`;

const ChatNowButton = styled.button`
  background: rgba(208, 1, 27, 0.08);
  outline: 0;
  overflow: visible;
  position: relative;
  flex-direction: row;
  text-transform: capitalize;
  margin-right: 10px;
  border: 1px solid #d0011b;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.03);
  color: #d0011b;
  height: 34px;
  max-width: 190px;
  min-width: 60px;
  padding: 0 15px;
  display: inline-flex;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 14px;
  justify-content: center;
`;

const ChatNowContainer = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  flex-shrink: 0;
  height: 14px;
  margin-right: 5px;
  width: 14px;
`;

const ChatNowText = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ViewShopContainer = styled.a`
  flex-direction: row;
  text-transform: capitalize;
  color: #555;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.09);
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.03);
  outline: 0;
  overflow: visible;
  position: relative;
  height: 34px;
  max-width: 190px;
  min-width: 60px;
  padding: 0 15px;
  display: inline-flex;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  align-items: center;
  border-radius: 2px;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 14px;
  justify-content: center;
`;

const ViewShopText = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CategoriesResult = styled.div`
  cursor: default;
  display: flex;
  justify-content: space-between;
  outline: 0;
  overflow: visible;
  position: relative;
`;

const ProductsResult = styled.a`
  cursor: default;
  display: flex;
  justify-content: space-between;
  outline: 0;
  overflow: visible;
  position: relative;
`;

const Label = styled.label`
  color: rgba(0, 0, 0, 0.4);
  margin-right: 12px;
  text-transform: capitalize;
`;

const Result = styled.span`
  color: #d0011b;
  text-align: right;
  white-space: nowrap;
`;

function StoreInformation({ shopId }) {
  const { data, isLoading, error } = useStore(shopId);
  const title = data?.shop_name;
  const shopLogoURL = data?.shop_logo;
  const ratings =
    data?.rate_info.rating_good +
    data?.rate_info.rating_normal +
    data?.rate_info.rating_bad;
  const responseRate = data?.rate_info.response_rate;
  const productsCount = data?.items_count;
  const follower = data?.follower_count;

  const singaporeTime = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Singapore",
  });
  const singaporeDate = new Date(singaporeTime);
  const currentHourSingapore = singaporeDate.getHours();
  const unixValue = data?.last_active_time;
  const lastActive = new Date(unixValue * 1000);
  const hoursLastActive = lastActive.getHours();
  const shopLastActive = currentHourSingapore - hoursLastActive;

  const unixYear = 1620885857;
  const readableDate = new Date(unixYear * 1000);
  const yearJoined = readableDate.getFullYear();
  const currentYear = new Date().getFullYear();
  const resultYearsJoined = currentYear - yearJoined;

  const newShopLogoURL = shopLogoURL?.toLowerCase().includes("shopeesiteoption")
    ? shopLogoURL.toLowerCase().replace("shopeesiteoption.sg", "sg")
    : shopLogoURL;

  console.log(yearJoined, currentYear);
  return (
    <StoreSetting>
      <StoreAlignment>
        <StoreInformationContainer>
          <LogoContainer>
            <LogoAlignment>
              {!newShopLogoURL ? (
                <AltLogoIconContainer>
                  <AltLogoIcon position={"absolute"} />
                </AltLogoIconContainer>
              ) : (
                <Img alt="Click here to visit shop" src={newShopLogoURL} />
              )}
            </LogoAlignment>

            <OfficialShopContainer>
              <OfficialShopAlignment>
                <ImgShopeeMall alt="mall shop badge" src={ShopeeMall} />
              </OfficialShopAlignment>
            </OfficialShopContainer>
          </LogoContainer>

          <TitleAndFunctionContainer>
            <Title>{title}</Title>
            <LastActiveContainer>
              <LastActiveTime>
                Active {Math.abs(shopLastActive)} Hours Ago
              </LastActiveTime>
            </LastActiveContainer>
            <ShopContactContainer>
              <ChatNowButton>
                <ChatNowContainer>
                  <ChatNow />
                </ChatNowContainer>

                <ChatNowText>chat now</ChatNowText>
              </ChatNowButton>
              <ViewShopContainer>
                <ViewShop />
                <ViewShopText>view shop</ViewShopText>
              </ViewShopContainer>
            </ShopContactContainer>
          </TitleAndFunctionContainer>
        </StoreInformationContainer>

        <StoreDisplaysResult>
          <CategoriesResult>
            <Label>ratings</Label>
            <Result>{roundUp(ratings)}</Result>
          </CategoriesResult>

          <CategoriesResult>
            <Label>response rate</Label>
            <Result>{responseRate}%</Result>
          </CategoriesResult>

          <CategoriesResult>
            <Label>joined</Label>
            <Result>{resultYearsJoined} years ago</Result>
          </CategoriesResult>

          <ProductsResult>
            <Label>products</Label>
            <Result>{productsCount}</Result>
          </ProductsResult>

          <CategoriesResult>
            <Label>response time</Label>
            <Result>within hours</Result>
          </CategoriesResult>

          <CategoriesResult>
            <Label>follower</Label>
            <Result>{follower}</Result>
          </CategoriesResult>
        </StoreDisplaysResult>
      </StoreAlignment>
    </StoreSetting>
  );
}

export default StoreInformation;

StoreInformation.propTypes = {
  shopId: PropTypes.string,
};
