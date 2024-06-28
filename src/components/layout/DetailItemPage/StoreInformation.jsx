/* eslint-disable no-unused-vars */
import styled from "styled-components";

const StoreSetting = styled.section`
  background: #fff;
  border-radius: 0.125rem;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
  margin-top: 0.9375rem;
  overflow: hidden;
  padding: 0.625rem;
`;

const StoreAlignment = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  overflow: visible;
  padding: 25px !important;
`;

const StoreInformationContainer = styled.div`
  border-right: 1px solid rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  display: flex;
  max-width: 440px;
  padding-right: 25px;
`;

const StoreDisplaysResult = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 20px 50px;
  color: rgba(0, 0, 0, 0.4);
  gap: 20px 50px;
  padding-left: 25px;
`;

function StoreInformation() {
  return (
    <StoreSetting>
      <StoreAlignment>
        <StoreInformationContainer></StoreInformationContainer>

        <StoreDisplaysResult></StoreDisplaysResult>
      </StoreAlignment>
    </StoreSetting>
  );
}

export default StoreInformation;
