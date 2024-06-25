import styled from "styled-components";
import SeeAllSameShop from "../../../Icons/SeeAllSameShop";

const SameShopElementContainer = styled.div`
  align-items: center;
  display: flex;
  padding-bottom: 0.625rem;
`;
const SameShopTextContainer = styled.div`
  flex: 1;
  margin-right: 1.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
`;

const FromTheSameShopText = styled.div`
  color: rgba(0, 0, 0, 0.54);
  font-size: 1rem;
  font-weight: 500;
`;

const SeeAllTextContainer = styled.a`
  color: #ee4d2d;
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;
`;

const Button = styled.button`
  color: #d0011b;
  align-items: center;
  display: flex;
  text-transform: capitalize;
  background-color: transparent;
  border: 0;
  outline: 0;
  overflow: visible;
  padding: 0.3125rem 0.4375rem;
  position: relative;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 300;
  justify-content: center;
  letter-spacing: 0;
  line-height: 1;
  transition: background-color 0.1s cubic-bezier(0.4, 0, 0.6, 1);
`;

function FromTheSameShopHeader() {
  return (
    <div style={{ lineHeight: "1", paddingTop: "1.25rem" }}>
      <SameShopElementContainer>
        <SameShopTextContainer>
          <FromTheSameShopText>From The Same Shop</FromTheSameShopText>
        </SameShopTextContainer>
        <SeeAllTextContainer>
          <Button>
            See All &nbsp;
            <SeeAllSameShop />
          </Button>
        </SeeAllTextContainer>
      </SameShopElementContainer>
    </div>
  );
}

export default FromTheSameShopHeader;
