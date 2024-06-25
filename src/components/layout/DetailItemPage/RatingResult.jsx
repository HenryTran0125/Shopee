/* eslint-disable no-unused-vars */
import styled from "styled-components";
import {
  formatNumber,
  formatNumberInThousand,
} from "../../../utilities/helpers";
import PropTypes from "prop-types";

const RatingContainer = styled.div`
  display: flex;
  margin-top: 0.625rem;
  min-height: 1.55rem;
`;

const RatingStar = styled.div`
  border-bottom: 1px solid #d0011b;
  color: #d0011b;
  font-size: 1rem;
  margin-right: 5px;
  padding-bottom: 1px;
  cursor: pointer;
  text-transform: none;
`;

const CommentsCount = styled.div`
  border-bottom: 1px solid #555;
  color: #222;
  font-size: 1rem;
  margin-right: 5px;
  padding-bottom: 1px;
  cursor: pointer;
  text-transform: none;
`;

const RatingsText = styled.div`
  margin-right: 5px;
  padding: 4px 0;
  color: #767676;
  font-size: 1rem;
  text-transform: capitalize;
  cursor: pointer;
`;

const ButtonStars = styled.button`
  display: flex;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  align-items: center;
  padding: 0 15px;
`;

const ButtonCommentsCount = styled.button`
  display: flex;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  align-items: center;
  padding: 0 15px;
  border-left: 1px solid rgba(0, 0, 0, 0.14);
`;

const ButtonReport = styled.button`
  background: none;
  border: unset;
  font-size: 14px;
  margin-left: auto;
  color: rgba(0, 0, 0, 0.54);
  cursor: pointer;
`;

function RatingResult({ ratingStar, commentsCount }) {
  return (
    <RatingContainer>
      <ButtonStars>
        <RatingStar>{formatNumber(ratingStar, 1)}</RatingStar>

        <div>Stars</div>
      </ButtonStars>

      <ButtonCommentsCount>
        <CommentsCount>{formatNumberInThousand(commentsCount)}</CommentsCount>

        <RatingsText>Ratings</RatingsText>
      </ButtonCommentsCount>

      <ButtonReport>Report</ButtonReport>
    </RatingContainer>
  );
}

export default RatingResult;

RatingResult.propTypes = {
  ratingStar: PropTypes.any,
  commentsCount: PropTypes.any,
};
