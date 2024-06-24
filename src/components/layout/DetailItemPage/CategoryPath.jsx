/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import styled from "styled-components";
import ArrowRight from "../../../Icons/ArrowRight";

const CategoryPathAlignment = styled.div`
  margin-top: 20px;
`;

const CategoryPathContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const CategoryPathElement = styled.a`
  cursor: pointer;
  color: #0055aa;
  font-size: 1rem;

  &:last-child {
    color: #000;
    cursor: auto;
  }
`;

function CategoryPath({ data }) {
  const firstFeCategory = data?.fe_category_path[0]?.display_name;
  const secondFeCategory = data?.fe_category_path[1]?.display_name;
  const thirdFeCategory = data?.fe_category_path[2]?.display_name;
  const title = data?.title;
  // console.log(firstFeCategory, secondFeCategory, thirdFeCategory);
  return (
    <CategoryPathAlignment>
      <CategoryPathContainer>
        <CategoryPathElement>Shopee</CategoryPathElement>
        <ArrowRight />
        <CategoryPathElement>{firstFeCategory}</CategoryPathElement>
        <ArrowRight />
        <CategoryPathElement>{secondFeCategory}</CategoryPathElement>
        <ArrowRight />
        <CategoryPathElement>{thirdFeCategory}</CategoryPathElement>
        <ArrowRight />
        <CategoryPathElement>{title}</CategoryPathElement>
      </CategoryPathContainer>
    </CategoryPathAlignment>
  );
}

export default CategoryPath;

CategoryPath.propTypes = {
  data: PropTypes.object,
};
