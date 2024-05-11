/* eslint-disable no-unused-vars */
import styled from "styled-components";
import PropTypes from "prop-types";

const ListItem = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 250px;
  padding-left: 0.3125rem;
  padding-right: 0.3125rem;
  margin: 0.3125rem 0px;
  flex-basis: 20%;
  max-width: 20%;
  flex: 0 0 auto;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 300px;
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
`;

const Img = styled.img`
  background-image: url(${(props) => props.source});
  background-size: contain;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 100px;
  font-size: 0.875rem;
  line-height: 1.25rem;
  min-height: 2.5rem;
  cursor: pointer;
`;

function SearchProducts({ data }) {
  console.log(data);
  return (
    <ListItem>
      {data.map((item) => (
        <Item key={item.item_id}>
          <ImageContainer>
            <Img source={item.img} />
          </ImageContainer>
          <div>
            <Title>{item.title}</Title>
            <div>{item.price_info.price}</div>
            <div>{item.shop_info.shop_location}</div>
          </div>
        </Item>
      ))}
    </ListItem>
  );
}

export default SearchProducts;

SearchProducts.propTypes = {
  data: PropTypes.array,
};
