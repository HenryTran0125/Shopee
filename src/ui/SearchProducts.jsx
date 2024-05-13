/* eslint-disable no-unused-vars */
import styled from "styled-components";
import PropTypes from "prop-types";

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
`;

const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255);
  border: 1px solid rgba(0, 0, 0, 0.09);
`;

const ImageContainer = styled.div`
  width: 100%;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
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
          <MainContentContainer>
            <ImageContainer>
              <Img src={item.img} alt={item.title} />
            </ImageContainer>
            <div>
              <Title>{item.title}</Title>
              <div>{item.price_info.price}</div>
              <div>{item.shop_info.shop_location}</div>
            </div>
          </MainContentContainer>
        </Item>
      ))}
    </ListItem>
  );
}

export default SearchProducts;

SearchProducts.propTypes = {
  data: PropTypes.array,
};
