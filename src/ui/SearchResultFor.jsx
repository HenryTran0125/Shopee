import styled from "styled-components";
import PropTypes from "prop-types";

const H1 = styled.h1`
  display: flex;
  align-items: center;
  color: #555;
  flex-direction: row;
  font-size: 1rem;
  font-weight: 400;
  margin: 0 0 1.5rem;
`;

const LightBulb = styled.div`
  display: block;
`;

const SearchResultText = styled.span`
  padding: 0.1875rem 0;
  color: #555;
  font-size: 1rem;
  font-weight: 400;
`;

const KeyWordsText = styled.span`
  color: rgb(238, 77, 45);
  font-weight: 400;
`;

function SearchResultFor({ keywords }) {
  return (
    <H1>
      <LightBulb>
        <svg
          fill="none"
          strokeWidth={1}
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style={{
            width: "1.5rem",
            height: "1.5rem",
            fontSize: "1.5rem",
            margin: "0 .75rem 0 0",
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
          />
        </svg>
      </LightBulb>
      <SearchResultText>
        Search result for <KeyWordsText>{keywords}</KeyWordsText>{" "}
      </SearchResultText>
    </H1>
  );
}

export default SearchResultFor;

SearchResultFor.propTypes = {
  keywords: PropTypes.string.isRequired,
};
