import styled from "styled-components";
import PropTypes from "prop-types";

const ListItem = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.li`
  list-style-type: none;
  width: 20%;
  height: 200px;
`;

const Img = styled.div`
  background-image: url(${(props) => props.source});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 186.4px;
  height: 186.4px;
`;

function SearchProducts({ data }) {
  console.log(data);
  return (
    <ListItem>
      {data.map((item) => (
        <Item key={item.item_id}>
          <Img source={item.img} />
          <div>{item.title}</div>
          <div>
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
