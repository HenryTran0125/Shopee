/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { useProductSameShop } from "../../../services/apiProductSameShop";
import { useData } from "../../../context/dataContext";
import FulFillByShopee from "../../../assets/images/FulfilledByShopee/Fulfilled.png";
import LeftArrow from "../../../Icons/LeftArrow";
import RightArrow from "../../../Icons/RightArrow";

const Alignment = styled.div`
  margin-left: -0.3125rem;
  margin-right: -0.3125rem;
  padding-top: 0.3125rem;
  height: 100%;
  width: 100%;
  position: relative;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const List = styled.ul`
  width: 400%;
  transform: translate(0px, 0px);
  display: flex;
  height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
`;

const Item = styled.li`
  width: ${(props) => 400 / props.length}%;
  padding: 5px 5px 0;
  float: left;
  list-style: none;
  overflow-x: hidden;
`;

const MainContentContainer = styled.div`
  display: flex;
  transition-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  transition-duration: 0.1s;
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, 1);
  border-color: rgba(0, 0, 0, 0.09);
  border-width: 1px;
  flex-direction: column;
  cursor: pointer;
  height: 100%;
  position: relative;
`;

const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Img = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
`;

const FulfilledByShopeeContainer = styled.div`
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: -3px;
  position: absolute;
  top: 0;
  left: 0;
`;

const FulfilledByShopee = styled.div`
  height: 24px;
  background-image: url(${(props) => props.source});
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  position: relative;
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  padding: 0.5rem;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 0.875rem;
  line-height: 1.25rem;
  overflow-wrap: break-word;
  white-space: normal;
  min-height: 2.5rem;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  overflow: hidden;
  margin-bottom: 0.25rem;
`;

const PriceContainer = styled.div`
  display: flex;
  color: rgba(238, 77, 45, 1);
  font-weight: 500;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  align-items: center;
  flex-shrink: 0;
  max-width: 100%;
`;

const PriceEdition = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  align-items: baseline;
  display: flex;
`;

const DollarSign = styled.span`
  font-size: 0.75rem;
  line-height: 0.875rem;
`;

const Price = styled.span`
  font-size: 1rem;
  line-height: 1.25rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const LeftArrowContainer = styled.div`
  left: 0;
  opacity: 1;
  visibility: visible;
  transform: translateX(calc(-50% + 5px));
  background-color: #fff;
  height: 25px;
  line-height: 25px;
  margin-top: -12.5px;
  width: 25px;
  align-items: center;
  border-radius: 50%;
  box-shadow: 0 1px 12px 0 rgba(0, 0, 0, 0.12);
  cursor: pointer;
  display: flex;
  font-size: 20px;
  justify-content: center;
  outline: 0;
  position: absolute;
  top: 50%;
  transition: all 0.1s cubic-bezier(0.4, 0, 0.6, 1);
`;

const RightArrowContainer = styled.div`
  right: 0;
  opacity: 1;
  visibility: visible;
  transform: translateX(calc(50% - 5px));
  background-color: #fff;
  height: 25px;
  line-height: 25px;
  margin-top: -12.5px;
  width: 25px;
  align-items: center;
  border-radius: 50%;
  box-shadow: 0 1px 12px 0 rgba(0, 0, 0, 0.12);
  cursor: pointer;
  display: flex;
  font-size: 20px;
  justify-content: center;
  outline: 0;
  position: absolute;
  top: 50%;
  transition: all 0.1s cubic-bezier(0.4, 0, 0.6, 1);
`;

function ProductOfTheSameShop() {
  const { shopIdProductSameShop } = useData();
  const { data, isLoading, error } = useProductSameShop(shopIdProductSameShop);
  const theItems = data?.data?.items;
  const lengthOfItems = theItems?.length;

  // console.log(theItems);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
          height: "100%",
        }}
      >
        <div>Loading...</div>
      </div>
    );
  }

  if (error) {
    return <div>Error Loading</div>;
  }
  return (
    <Alignment>
      <Container>
        <List length={lengthOfItems}>
          {theItems?.map((item, index) => (
            <Item length={lengthOfItems} key={index}>
              <div
                style={{
                  height: "100%",
                  display: "contents",
                  border: "0 solid #e5e7eb",
                  boxSizing: "border-box",
                }}
              >
                <a>
                  <MainContentContainer>
                    <ImgContainer>
                      <Img src={item.img} />
                      {item.shop_info.is_official_shop ? (
                        <FulfilledByShopeeContainer>
                          <FulfilledByShopee source={FulFillByShopee} />
                        </FulfilledByShopeeContainer>
                      ) : (
                        ""
                      )}
                    </ImgContainer>

                    <Information>
                      <Title>{item.title}</Title>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <PriceContainer>
                          <PriceEdition>
                            <DollarSign>$</DollarSign>
                            <Price>{item.price_info.price}</Price>
                          </PriceEdition>
                        </PriceContainer>
                      </div>
                    </Information>
                  </MainContentContainer>
                </a>
              </div>
            </Item>
          ))}
        </List>
      </Container>

      <LeftArrowContainer>
        <LeftArrow
          color={"rgba(0,0,0,.54)"}
          height={".625rem"}
          width={".625rem"}
          fill={"rgba(0, 0, 0, .54)"}
        />
      </LeftArrowContainer>

      <RightArrowContainer>
        <RightArrow
          color={"rgba(0,0,0,.54)"}
          height={".625rem"}
          width={".625rem"}
          fill={"rgba(0, 0, 0, .54)"}
        />
      </RightArrowContainer>
    </Alignment>
  );
}

export default ProductOfTheSameShop;
