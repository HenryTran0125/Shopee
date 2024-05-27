/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { useShopeeShop } from "../services/apiGetShopeeShop";
import styled from "styled-components";

const ContainerShopRelation = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  color: rgba(0, 0, 0, 0.54);
  font-size: 1rem;
  font-weight: 500;
  margin-right: 2px;
  text-transform: uppercase;
`;

const Keyword = styled.span`
  display: inline-block;
  vertical-align: center;
  color: #ee4d2d;
  font-size: 1rem;
  font-weight: 500;
`;

function ShopRelation({ dataShop, keywords }) {
  const { data, isError, isLoading } = useShopeeShop(dataShop);
  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading shop data</div>;
  }

  return (
    <div>
      <div>
        <ContainerShopRelation>
          <H1>shops related to</H1>
          &rdquo;
          <Keyword>{keywords}</Keyword>
          &rdquo;
        </ContainerShopRelation>

        <div>
          <h2>More Shops</h2>
          <svg
            style={{ width: "8px", height: "8px" }}
            enableBackground="new 0 0 11 11"
            viewBox="0 0 11 11"
            x="0"
            y="0"
          >
            <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"></path>
          </svg>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default ShopRelation;

ShopRelation.propTypes = {
  dataShop: PropTypes.array,
  keywords: PropTypes.string,
};
