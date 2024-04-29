import { styled } from "styled-components";
import Button from "./Button";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import { useState } from "react";

const SortContainer = styled.fieldset`
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.03);
  border-radius: 2px;
  font-weight: 400px;
  justify-content: space-between;
  padding: 0.8125rem 1.25rem;
`;

const SortByText = styled.div`
  color: #555;
  margin: 0 0.3125rem 0 0;
`;

const SortOptions = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  justify-content: flex-start;
  align-items: stretch;
  gap: 0.625rem;
`;

const ButtonContainer = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 0.625rem;
  margin-left: 0.625rem;
`;

const PageControllerContainer = styled.div`
  display: flex;
`;

function SearchSortBy() {
  const [isSelected, setIsSelected] = useState(0);

  function onSelection(index) {
    setIsSelected((select) => (select === index ? select : index));
  }

  return (
    <SortContainer>
      <SortByText>Sort by</SortByText>

      <SortOptions>
        <ButtonContainer>
          {["relevance", "latest", "top sales"].map((sort, index) => (
            <Button
              key={index}
              isCheck={isSelected === index}
              onClick={() => onSelection(index)}
            >
              {sort}
            </Button>
          ))}
        </ButtonContainer>

        <section>
          <div>
            <select value="1">
              <option value={"1"}>Price: Low to High</option>
              <option value={"2"}>Price: High to Low</option>
            </select>
          </div>
        </section>
      </SortOptions>

      <PageControllerContainer>
        <div>
          <span>1</span>/<span>17</span>
        </div>

        <a>
          <ChevronLeft style={{ width: "20px", height: "20px" }} />
        </a>

        <a>
          <ChevronRight />
        </a>
      </PageControllerContainer>
    </SortContainer>
  );
}

export default SearchSortBy;
