/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { useData } from "../../../context/dataContext";
import {
  getDecimalPart,
  getIntegerAndDecimalPart,
} from "../../../utilities/helpers";

const AmountOfRatingsContainer = styled.div`
  align-items: center;
  background-color: #fffbf8;
  border: 1px solid #f9ede5;
  border-radius: 2px;
  box-sizing: border-box;
  display: flex;
  margin-bottom: 1rem;
  min-height: 5rem;
  padding: 1.875rem;
`;

const AverageRatingScore = styled.div`
  margin-right: 1.875rem;
  text-align: center;
`;

const CategoryStar = styled.div`
  flex: 1;
  margin-left: 0.9375rem;
`;

const ScoreContainer = styled.div`
  color: #d0011b;
  font-size: 1.125rem;
`;

const RatingScore = styled.span`
  font-size: 1.875rem;
  color: #d0011b;
`;

const OutOf5 = styled.span`
  color: #d0011b;
  font-size: 1.125rem;
`;

const StarsContainer = styled.div`
  font-size: 1.25rem;
  margin-top: 0.625rem;
  display: inline-block;
  position: relative;
`;

const StarsText = styled.div`
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 2px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  height: 2rem;
  line-height: 2rem;
  margin-bottom: 0.3125rem;
  margin-right: 0.5rem;
  margin-top: 0.3125rem;
  min-width: 6.25rem;
  padding: 0 0.625rem;
  text-align: center;
  -webkit-text-decoration: none;
  text-decoration: none;
  text-transform: capitalize;
  user-select: none;
`;

function AmountOfRatings() {
  const { dataDetailProduct } = useData();
  if (!dataDetailProduct) {
    return;
  }
  const reviewScore = dataDetailProduct?.review_info?.rating_star;
  const classifiedCounts = dataDetailProduct?.review_info?.classified_counts;
  const reverseStarIndex =
    classifiedCounts && Object.entries(classifiedCounts).reverse();

  function reverseKeys(key) {
    const keysReversed = key.replace("star", "");

    return `${keysReversed} Star`;
  }

  return (
    <AmountOfRatingsContainer>
      <AverageRatingScore>
        <ScoreContainer>
          <RatingScore>{getDecimalPart(reviewScore)}</RatingScore>
          <OutOf5> out of 5</OutOf5>
        </ScoreContainer>

        <StarsContainer>
          <div style={{ display: "flex" }}></div>
        </StarsContainer>
      </AverageRatingScore>

      <CategoryStar>
        <StarsText>all</StarsText>
        {reverseStarIndex?.map(([key, value], index) => (
          <StarsText key={index}>
            {reverseKeys(key)} ({getIntegerAndDecimalPart(value)})
          </StarsText>
        ))}
        <StarsText>With comments</StarsText>
        <StarsText>With Media</StarsText>
      </CategoryStar>
    </AmountOfRatingsContainer>
  );
}

export default AmountOfRatings;
