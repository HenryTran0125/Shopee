/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { useShopeeShop } from "../services/apiGetShopeeShop";
import styled from "styled-components";

const ContainerShopRelation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ShopRelateToKeyWords = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  color: rgba(0, 0, 0, 0.54);
  font-size: 1rem;
  font-weight: 500;
  margin-right: 6px;
  text-transform: uppercase;
`;

const Keyword = styled.span`
  display: inline-block;
  vertical-align: center;
  color: #ee4d2d;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
`;

const MoreShopContainer = styled.a`
  color: #ee4d2d;
  height: 100%;
`;

const Button = styled.button`
  color: #ee4d2d;
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  justify-content: start;
  padding: 0.3125rem 0.4375rem;
  background-color: transparent;
  font-size: 0.875rem;
  font-weight: 300;
  justify-content: center;
  letter-spacing: 0;
  line-height: 1;
`;

const ShopContainer = styled.div`
  background-color: #fff;
  border-radius: 0.125rem;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.87);
  height: 7.5rem;
  padding: 0 1.5625rem;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: transform 0.1s cubic-bezier(0.4, 0, 0.6, 1),
    box-shadow 0.1s cubic-bezier(0.4, 0, 0.6, 1);
`;

const ShopLogo = styled.div`
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
  width: 100%;
  border-radius: 50%;
`;

const ShopeeMall = styled.img`
  height: 16px;
  width: 64px;
`;

const ShopInformation = styled.div`
  display: flex;
  align-items: center;
`;

const ShopNameContainer = styled.a`
  color: rgba(0, 0, 0, 0.87);
  cursor: pointer;
  flex: 1;
  overflow: hidden;
  padding: 0 1.25rem 0 0.625rem;
  text-decoration: none;
`;

const ShopName = styled.div`
  color: rgba(0, 0, 0, 0.8);
  line-height: 1.5;
  font-size: 1.125rem;
  font-weight: 500;
`;

const ShopUsername = styled.div`
  color: rgba(0, 0, 0, 0.8);
  line-height: 1.5;
  font-size: 0.875rem;
`;

const ShopFollowCount = styled.div`
  color: rgba(0, 0, 0, 0.54);
  font-size: 0.75rem;
  margin-top: 0.3125rem;
  text-transform: capitalize;
`;

const ShopFollow = styled.span`
  color: #ee4d2d;
`;

function ShopRelation({ dataShop, keywords }) {
  const { data, isError, isLoading } = useShopeeShop();

  const shopLogoURL = data?.data?.shop_logo;

  const newShopLogoURL = shopLogoURL.toLowerCase().includes("shopeesiteoption")
    ? shopLogoURL.toLowerCase().replace("shopeesiteoption.sg", "sg")
    : shopLogoURL;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading shop data</div>;
  }

  if (!data || !data.data) {
    return <div>No shop available</div>;
  }

  return (
    <>
      <ContainerShopRelation>
        <ShopRelateToKeyWords>
          <H1>shops related to</H1>
          &quot;
          <Keyword>{keywords}</Keyword>
          &quot;
        </ShopRelateToKeyWords>

        <MoreShopContainer>
          <Button>
            More Shops &nbsp;
            <svg
              style={{
                width: "1em",
                height: "1em",
                fill: "#ee4d2d",
                verticalAlign: "center",
                display: "inline-block",
              }}
              enableBackground="new 0 0 11 11"
              viewBox="0 0 11 11"
              x="0"
              y="0"
            >
              <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"></path>
            </svg>
          </Button>
        </MoreShopContainer>
      </ContainerShopRelation>

      <ShopContainer>
        <ShopInformation>
          <div style={{ marginRight: "4px", position: "relative" }}>
            <div
              style={{
                width: "4.375rem",
                height: "4.375rem",
                borderRadius: "50%",
                border: "0.0625rem solid rgba( 0,0,0, .09",
              }}
            >
              <ShopLogo src={newShopLogoURL} />
            </div>
            <div style={{ position: "absolute", top: "80%" }}>
              <ShopeeMall src="/Is_official_shop/ShopeeMall.png" />
            </div>
          </div>

          <ShopNameContainer>
            <ShopName>{data.data.shop_name}</ShopName>
            <ShopUsername>{data.data.username}</ShopUsername>
            <ShopFollowCount>
              <ShopFollow>{data.data.follower_count}</ShopFollow>
              <span>&ensp;followers </span>
              <span>|</span>
              <ShopFollow> {data.data.following_count}</ShopFollow>
              <span>&ensp;following</span>
            </ShopFollowCount>
          </ShopNameContainer>
        </ShopInformation>

        <div>
          <div>
            <div>
              <svg
                enableBackground="new 0 0 15 15"
                viewBox="0 0 15 15"
                x="0"
                y="0"
                style={{ height: "1em", width: "1em", fill: "#ee4d2d" }}
              >
                <g>
                  <path
                    d="m10 1 4.5 2.5-.5 3h-2v7.5h-9v-7.5h-2l-.5-3 4.6-2.5c.3 1.1 1.3 1.9 2.4 1.9s2.1-.8 2.5-1.9z"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                  ></path>
                  <line
                    fill="none"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    x1="3"
                    x2="12"
                    y1="11.5"
                    y2="11.5"
                  ></line>
                </g>
              </svg>
              <div>{data.data.items_count}</div>
            </div>
            <div>Products</div>
          </div>
          <div>
            <div>
              <svg
                enableBackground="new 0 0 15 15"
                viewBox="0 0 15 15"
                x="0"
                y="0"
                style={{ height: "1em", width: "1em", fill: "#ee4d2d" }}
              >
                <polygon
                  fill="none"
                  points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                ></polygon>
              </svg>
              <div>{data.data.rate_info.rating_star}</div>
            </div>
            <div>Ratings</div>
          </div>
          <div>
            <div>
              <svg
                enableBackground="new 0 0 15 15"
                viewBox="0 0 15 15"
                x="0"
                y="0"
                style={{ height: "1em", width: "1em", fill: "#ee4d2d" }}
              >
                <g>
                  <polygon
                    fill="none"
                    points="14 10.8 7 10.8 3 13.8 3 10.8 1 10.8 1 1.2 14 1.2"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                  ></polygon>
                  <circle cx="4" cy="5.8" r="1" stroke="none"></circle>
                  <circle cx="7.5" cy="5.8" r="1" stroke="none"></circle>
                  <circle cx="11" cy="5.8" r="1" stroke="none"></circle>
                </g>
              </svg>
              <div>{data.data.rate_info.response_rate}</div>
            </div>
            <div>Response Rate</div>
          </div>
        </div>
      </ShopContainer>
    </>
  );
}

export default ShopRelation;

ShopRelation.propTypes = {
  dataShop: PropTypes.array,
  keywords: PropTypes.string,
};
