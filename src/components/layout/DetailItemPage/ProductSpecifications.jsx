/* eslint-disable no-unused-vars */
import styled from "styled-components";
import PropTypes from "prop-types";
import { useData } from "../../../context/dataContext";
import CategoryPathArrow from "../../../Icons/CategoryPathArrow";
// import CategoryPathArrow from "../../../assets/images/CategoryPathArrow/CategoryPathRightArrow";

const Container = styled.section`
  padding: 1.075rem 1.075rem 0;
`;

const H2 = styled.h2`
  background: rgba(0, 0, 0, 0.02);
  color: rgba(0, 0, 0, 0.87);
  font-size: 1.125rem;
  font-weight: 400;
  margin: 0;
  padding: 1rem;
  text-transform: capitalize;
`;

const Alignment = styled.div`
  display: flex;
  margin-bottom: 1.125rem;
`;

const InformationContainer = styled.div`
  margin: 2.14rem 1.07rem 1.07rem;
`;

const Content = styled.div`
  display: flex;
  height: 15px;
  white-space: nowrap;
  align-items: center;
`;

const Label = styled.label`
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.4);
  font-size: 1rem;
  padding-right: 0.75rem;
  width: 9.9rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const TextPath = styled.a`
  color: #05a;
  font-size: 14px;
  text-decoration: none;
  white-space: nowrap;
`;

const Navigator = styled.a`
  color: #05a;
  cursor: pointer;
`;

function ProductSpecifications() {
  const { dataDetailProduct } = useData();
  const categoryPath1 = dataDetailProduct?.fe_category_path[0].display_name;
  const categoryPath2 = dataDetailProduct?.fe_category_path[1].display_name;
  const categoryPath3 = dataDetailProduct?.fe_category_path[2].display_name;
  const brand = dataDetailProduct?.brand;
  const delivery = dataDetailProduct?.delivery_info.area_from;
  const stock = dataDetailProduct?.stock;
  const productProps = dataDetailProduct?.product_props;
  const checkLength = Object.entries(productProps).length;
  const keysProduct = Object.keys(productProps);
  const valuesProduct = Object.values(productProps);
  console.log(keysProduct, valuesProduct);

  return (
    <Container>
      <H2>Product Specifications</H2>

      <InformationContainer>
        <Alignment>
          <Label>Category</Label>
          <Content>
            <TextPath>Shopee</TextPath>
            <CategoryPathArrow />
            <TextPath>{categoryPath1}</TextPath>
            <CategoryPathArrow />
            <TextPath>{categoryPath2}</TextPath>
            <CategoryPathArrow />
            <TextPath>{categoryPath3}</TextPath>
          </Content>
        </Alignment>

        {brand && (
          <Alignment>
            <Label>Brand</Label>
            <Navigator>{brand}</Navigator>
          </Alignment>
        )}

        {checkLength > 0
          ? Object.entries(productProps).map(([key, value]) => (
              <Alignment key={value}>
                <Label>{key}</Label>
                <div>{value}</div>
              </Alignment>
            ))
          : ""}

        {stock && (
          <Alignment>
            <Label>Stock</Label>
            <div>{stock}</div>
          </Alignment>
        )}

        <Alignment>
          <Label>Ships From</Label>
          <div>{delivery}</div>
        </Alignment>
      </InformationContainer>
    </Container>
  );
}

export default ProductSpecifications;
