/* eslint-disable no-unused-vars */
import SearchFilter from "./SearchFilter";
import SearchResult from "./SearchResult";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  width: 1200px;
  margin-top: 1.25rem;
  margin-left: auto;
  margin-right: auto;
`;

function SearchingBody() {
  return (
    <Container>
      <SearchFilter />
      <SearchResult />
    </Container>
  );
}

export default SearchingBody;
