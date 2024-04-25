import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.fieldset`
  border: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
  margin: 1.5rem 0 0;
  padding: 0 0 1.5rem;
`;

const Legend = styled.legend`
  font-weight: 500;
  margin-bottom: 0.625rem;
  font-size: 1rem;
`;

const FilterTypeContainer = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  padding: 0.5rem 0;
  align-items: flex-start;
  justify-content: flex-start;
`;

const CheckboxContainer = styled.div`
  margin-right: 0.625rem;
  color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
  display: flex;
  font-size: 1rem;
`;

const Checkbox = styled.input`
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.26);
  border-radius: 2px;
  box-shadow: inset 0 1px 0 0 rgba(0, 0, 0, 0.05);
  cursor: pointer;
  box-sizing: border-box;
  height: 1rem;
  width: 1rem;
  text-align: center;
  line-height: 1rem;
  display: inline-block;
`;

const FilterText = styled.span`
  text-overflow: ellipsis;
  line-height: 1rem;
  max-height: 3rem;
  font-size: 1rem;
`;

function FilterTypes({ LegendTitle, FilterType }) {
  return (
    <Container>
      <Legend>{LegendTitle}</Legend>
      {FilterType.map((type) => (
        <FilterTypeContainer key={type}>
          <CheckboxContainer>
            <Checkbox type="checkbox" />
          </CheckboxContainer>
          <FilterText>{type}</FilterText>
        </FilterTypeContainer>
      ))}
    </Container>
  );
}

FilterTypes.propTypes = {
  LegendTitle: PropTypes.string.isRequired,
  FilterType: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FilterTypes;
