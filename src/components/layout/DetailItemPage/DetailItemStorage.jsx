import styled from "styled-components";
import PropTypes from "prop-types";

const SpecificOption = styled.section`
  margin-bottom: 24px;
  align-items: baseline;
  display: flex;
`;

const StorageName = styled.h3`
  color: #757575;
  flex-shrink: 0;
  font-size: inherit;
  font-weight: 400;
  margin: 0;
  text-transform: capitalize;
  width: 110px;
`;

const StorageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 515px;
  flex-wrap: wrap;
  margin-top: -8px;
  max-height: 220px;
  max-width: 515px;
  overflow-y: auto;
`;

const StorageButton = styled.button`
  align-items: center;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 2px;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  margin: 8px 8px 0 0;
  min-height: 2.5rem;
  min-width: 5rem;
  outline: 0;
  overflow: visible;
  padding: 0.5rem;
  position: relative;
  text-align: left;
  word-break: break-word;
`;

function DetailItemStorage({ storage }) {
  return (
    <SpecificOption>
      <StorageName>{storage?.prop_name}</StorageName>
      <StorageContainer>
        {storage?.values.map((item, index) => (
          <StorageButton key={index}>{item.name}</StorageButton>
        ))}
      </StorageContainer>
    </SpecificOption>
  );
}

export default DetailItemStorage;

DetailItemStorage.propTypes = {
  storage: PropTypes.any,
};
