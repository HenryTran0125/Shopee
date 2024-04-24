/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { ShipFrom } from "../data/SearchFilter";

const Container = styled.div`
  border: 0;
  border-bottom: 1px solid rgba (0, 0, 0, 0.09);
  margin: 1.25rem 0 0;
  padding: 0 0 1.25rem;
`;

const Legend = styled.legend`
  font-weight: 500;
  margin-bottom: 0.625rem;
  font-size: 1.5rem;
`;

const NationContainer = styled.div``;

const Nation = styled.div`
  display: flex;
  padding: 0.25rem 0;
  align-items: flex-start;
  justify-content: flex-start;
`;

const CheckboxContainer = styled.div`
  margin-top: 0.625rem;
  margin-right: 0.625rem;
  color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
`;

const Checkbox = styled.input`
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.26);
  border-radius: 2px;
  box-shadow: inset 0 1px 0 0 rgba(0, 0, 0, 0.05);
  cursor: pointer;
  box-sizing: border-box;
  height: 0.8125rem;
  width: 0.8125rem;
  text-align: center;
  line-height: 0.6875rem;
`;

const NationText = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1rem;
  max-height: 3rem;
  word-wrap: break-word;
  display: inline-block;
  font-size: 20px;
`;

function ShippingFrom() {
  return (
    <Container>
      <Legend>Shipped From</Legend>
      <NationContainer>
        {ShipFrom.map((nation) => (
          <Nation key={nation}>
            <CheckboxContainer>
              <Checkbox type="checkbox" />
            </CheckboxContainer>
            <NationText>{nation}</NationText>
          </Nation>
        ))}
      </NationContainer>
    </Container>
  );
}

export default ShippingFrom;
