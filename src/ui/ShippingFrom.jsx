/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { ShipFrom } from "../data/SearchFilter";

const Container = styled.div`
  border: 0;
  border-bottom: 1px solid rgba (0, 0, 0, 0.09);
  margin: 1.25rem 0 0;
  padding: 0 0 1.25rem;
`;

function ShippingFrom() {
  return (
    <Container>
      <legend>Shipped From</legend>
      <div>
        {ShipFrom.map((nation) => (
          <div key={nation}>
            <input type="checkbox" />
            <span>{nation}</span>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default ShippingFrom;
