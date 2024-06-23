import styled from "styled-components";
import {
  formatNumber,
  formatNumberInThousand,
} from "../../../utilities/helpers";
import NewButton from "../../common/NewButton";
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

function RatingResult({ ratingStar, commentsCount }) {
  return (
    <RatingContainer>
      <NewButton
        display={"flex"}
        cursor={"pointer"}
        backgroundColor={"transparent"}
        border={0}
        alignItems={"center"}
        padding={"0 15px"}
      >
        <RatingStar>{formatNumber(ratingStar, 1)}</RatingStar>

        <div>Stars</div>
      </NewButton>

      <NewButton
        display={"flex"}
        cursor={"pointer"}
        backgroundColor={"transparent"}
        border={0}
        alignItems={"center"}
        padding={"0 15px"}
        borderLeft={"1px solid rgba(0,0,0, .14)"}
      >
        <CommentsCount>{formatNumberInThousand(commentsCount)}</CommentsCount>

        <RatingsText>Ratings</RatingsText>
      </NewButton>

      <NewButton
        background={"none"}
        border={"unset"}
        fontSize={"14px"}
        marginLeft={"auto"}
        color={"rgba(0,0,0, .54)"}
        cursor={"pointer"}
      >
        Report
      </NewButton>
    </RatingContainer>
  );
}

export default RatingResult;

RatingResult.propTypes = {
  ratingStar: PropTypes.any,
  commentsCount: PropTypes.any,
};
