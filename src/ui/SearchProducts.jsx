/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.ul`
  display: flex;
`;

function SearchProducts({ data }) {
  const dataInformation = data;
  console.log(dataInformation.data.items);
  return <ul>{/* {data.map(item => <div>{data.}</div>)} */}</ul>;
}

export default SearchProducts;

SearchProducts.propTypes = {
  data: PropTypes.object,
};
