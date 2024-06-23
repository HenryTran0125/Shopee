import { styled } from "styled-components";
import Button from "../../common/Button";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import { useState } from "react";

const SortContainer = styled.fieldset`
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.03);
  border-radius: 2px;
  font-weight: 400;
  justify-content: space-between;
  padding: 0.8125rem 1.25rem;
  border: 0px;
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

const SectionSelection = styled.section`
  background: #fff;
`;

const SelectionContainer = styled.div`
  margin-right: 0.75rem;
`;

const Selection = styled.select`
  background: #fff;
  border: 0;
  border-radius: 2px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.02);
  cursor: pointer;
  height: 2.125rem;
  line-height: 2.125rem;
  min-width: 12.5rem;
  padding-left: 0.75rem;
  padding-right: 1.75rem;
  text-align: left;
`;

const PageControllerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChevronLeftContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;
  border: 1px solid rgba(0, 0, 0, 0.09);
  color: rgba(0, 0, 0, 0.26);
  border-radius: 2px;
  cursor: pointer;
  font-weight: 300;
  font-size: 0.875rem;
  line-height: 1;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
  height: 2.125rem;
  width: 2.25rem;
  margin-left: 20px;
`;

const ChevronRightContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.09);
  color: rgba(0, 0, 0, 0.8);
  border-radius: 2px;
  cursor: pointer;
  font-weight: 300;
  font-size: 0.875rem;
  line-height: 1;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
  height: 2.125rem;
  width: 2.25rem;
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

        <SectionSelection>
          <SelectionContainer>
            <Selection>
              <option value={0}>Price</option>
              <option value={1}>Price: Low to High</option>
              <option value={2}>Price: High to Low</option>
            </Selection>
          </SelectionContainer>
        </SectionSelection>
      </SortOptions>

      <PageControllerContainer>
        <div>
          <span>1</span>/<span>17</span>
        </div>

        <ChevronLeftContainer>
          <ChevronLeft
            style={{
              height: "1.25rem",
              width: "1.25rem",
              fill: "#ccc",
              marginTop: ".125rem",
              display: "inline-block",
              fontSize: ".875rem",
              fontWeight: "300",
              cursor: "pointer",
              color: "rgba(0,0,0, .26)",
              lineHeight: "1",
            }}
          />
        </ChevronLeftContainer>

        <ChevronRightContainer>
          <ChevronRight
            style={{
              height: "1.25rem",
              width: "1.25rem",
              fill: "#555",
              marginTop: ".125rem",
              display: "inline-block",
              fontSize: ".875rem",
              fontWeight: "300",
              cursor: "pointer",
              color: "rgba(0,0,0, .8)",
              lineHeight: "1",
            }}
          />
        </ChevronRightContainer>
      </PageControllerContainer>
    </SortContainer>
  );
}

export default SearchSortBy;
