import styled from "@emotion/styled/types/base";
import PropTypes

const Container = styled.ul`
  display: flex;
`;

function SearchProducts({ data }) {
  console.log(data);
  return <ul>{/* {data.map(item => <div>{data.}</div>)} */}</ul>;
}

export default SearchProducts;
