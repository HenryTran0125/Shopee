/* eslint-disable no-unused-vars */
import { formatNumber } from "../../../utilities/helpers";
import { useNavigate } from "react-router-dom";
import { useData } from "../../../context/dataContext";
import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import RatingStar from "./RatingStar";
import LocationIcon from "../../../Icons/LocationIcon";
import FulFilled from "../../../assets/images/FulfilledByShopee/Fulfilled.png";
import PreFerred from "../../../assets/images/Preferred/Preferred.png";

const ListItem = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  /* width: 4265px; */
`;

const Item = styled.li`
  width: 20%;
  height: 340px;
  margin: 0.4125rem 0;
  flex-basis: 20%;
  max-width: 20%;
  flex: 0 0 auto;
  padding: 0 0.4125rem;
  position: relative;
`;

const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255);
  cursor: pointer;
  border: ${(props) =>
    props.check === "true"
      ? "1px solid #ee4d2d"
      : "1px solid rgba(0, 0, 0, 0.09)"};
`;

const ImageContainer = styled.div`
  width: 100%;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const MainInformation = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.6rem;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  min-height: 4rem;
  margin-bottom: 0.25rem;
`;

const Title = styled.div`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  overflow: hidden;
  overflow-wrap: break-word;
  font-size: 1rem;
  line-height: 1.25rem;
  min-height: 2.5rem;
  cursor: pointer;
`;

const PriceContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

const PriceMin = styled.div`
  font-size: 1.25rem;
  color: rgba(238, 77, 45, 1);
  font-weight: 400;
`;

const PriceMax = styled.div`
  font-size: 0.875rem;
  color: rgba(0, 0, 0, 0.26);
  text-decoration: line-through;
`;

const Discount = styled.div`
  font-size: 0.725rem;
  color: rgba(238, 77, 45, 1);
  font-weight: 500;
  background-color: rgba(254, 238, 234, 1);
  padding: 2px 6px;
`;

const Fulfilled = styled.div`
  background-image: url(${(props) => props.source});
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  top: 3%;
  left: 2%;
  width: 3rem;
  height: 2rem;
`;

const Preferred = styled.div`
  background-image: url(${(props) => props.source});
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  top: 3%;
  left: 2%;
  width: 3rem;
  height: 2rem;
`;

const LocationContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LocationText = styled.div`
  color: rgba(0, 0, 0, 0.54);
  font-weight: 300;
  font-size: 0.825rem;
  line-height: 1rem;
  cursor: pointer;
  vertical-align: middle;
`;

function SearchProducts({ data }) {
  const { setDataItem } = useData();
  const navigate = useNavigate();
  const [hover, setHover] = useState();

  function onSelection(item) {
    const title = item?.title;
    const shopId = item?.shop_id;
    const itemId = item?.item_id;
    const encodedTitle = encodeURI(title);
    setDataItem(item);
    navigate(`/${encodedTitle}/${shopId}/${itemId}`);
  }

  function onHover(index) {
    setHover((currData) => (currData == index ? currData : index));
  }

  return (
    <ListItem>
      {data.map((item, index) => (
        <Item key={item.item_id}>
          <MainContentContainer
            onClick={() => onSelection(item)}
            onMouseEnter={() => onHover(index)}
            onMouseLeave={() => setHover()}
            check={hover == index ? "true" : "false"}
          >
            <ImageContainer>
              <Img src={item.img} alt={item.title} />
            </ImageContainer>
            <MainInformation>
              <TitleContainer>
                <Title>{item.title}</Title>
              </TitleContainer>
              <div>
                {item.discount ? (
                  <PriceContainer>
                    <PriceMin>
                      ${formatNumber(item.price_info.price, 2)}
                    </PriceMin>
                    <PriceMax>
                      ${formatNumber(item.price_info.price_max, 2)}
                    </PriceMax>
                    <Discount>-{item.discount}%</Discount>
                  </PriceContainer>
                ) : (
                  <PriceContainer>
                    <PriceMin>${item.price_info.price}</PriceMin>
                  </PriceContainer>
                )}

                <div>
                  <RatingStar />
                </div>

                <LocationContainer>
                  <div>
                    <LocationIcon />
                  </div>
                  <LocationText>{item.shop_info.shop_location}</LocationText>
                </LocationContainer>
              </div>
            </MainInformation>
          </MainContentContainer>
          {item.is_service_by_shopee ? (
            <Fulfilled source={FulFilled} />
          ) : (
            item.liked_count > 1000 && <Preferred source={PreFerred} />
          )}
        </Item>
      ))}
    </ListItem>
  );
}

export default SearchProducts;

SearchProducts.propTypes = {
  data: PropTypes.array,
};
