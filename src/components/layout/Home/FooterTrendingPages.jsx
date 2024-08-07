/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { keywords } from "../../../data/Footer/TrendingPages";

const H1 = styled.h1`
  text-transform: capitalize;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.54);
  margin-bottom: 1rem;
`;

const KeywordContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
`;

const Keyword = styled.span`
  color: rgba(0, 0, 0, 0.54);
  line-height: 2;
`;

function FooterTrendingPages() {
  return (
    <div>
      <H1>trending pages</H1>

      <KeywordContainer>
        {keywords.map((keyword, index) => (
          <Keyword key={index}>
            {keyword}{" "}
            {index < keywords.length - 1 && <span>&nbsp;|&nbsp;</span>}
          </Keyword>
        ))}
      </KeywordContainer>
    </div>
  );
}

export default FooterTrendingPages;
