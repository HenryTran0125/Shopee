import styled from "styled-components";
import FreeReturn from "../../../assets/images/ShopeeMall/FreeReturn.png";
import Authentic from "../../../assets/images/ShopeeMall/Authentic.png";
import FreeShipping from "../../../assets/images/ShopeeMall/FreeShipping.png";

const ShippingPolicyAlignment = styled.div`
  margin-top: 30px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
`;

const ShippingPolicyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 15px;
  row-gap: 15px;
`;

const ShippingPolicyGrid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  background: #fff;
  gap: 4px;
`;

const OneOfPolycies = styled.div`
  display: flex;
  font-size: 16px;
  min-width: 0;
  align-items: center;
  &:first-child {
    justify-self: start;
  }

  &:nth-child(2) {
    justify-self: center;
  }

  &:last-child {
    justify-self: end;
  }
`;

const MainContentPolicyContainer = styled.div`
  color: #4a4a4a;
  cursor: help;
  display: flex;
  font-size: 16px;
  overflow: hidden;
  width: 100%;
  align-items: center;
`;

function ShippingPolicy() {
  return (
    <ShippingPolicyAlignment>
      <ShippingPolicyContainer>
        <ShippingPolicyGrid>
          <OneOfPolycies>
            <MainContentPolicyContainer>
              <img
                style={{
                  flexShrink: "0",
                  height: "18px",
                  width: "18px",
                  marginRight: "5px",
                }}
                src={FreeReturn}
              />
              <div
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                15-Day Free Returns
              </div>
            </MainContentPolicyContainer>
          </OneOfPolycies>

          <OneOfPolycies>
            <MainContentPolicyContainer>
              <img
                style={{
                  flexShrink: "0",
                  height: "18px",
                  width: "18px",
                  marginRight: "5px",
                }}
                src={Authentic}
              />
              <div
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                100% Authentic
              </div>
            </MainContentPolicyContainer>
          </OneOfPolycies>

          <OneOfPolycies>
            <MainContentPolicyContainer>
              <img
                style={{
                  flexShrink: "0",
                  height: "18px",
                  width: "18px",
                  marginRight: "5px",
                }}
                src={FreeShipping}
              />
              <div
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                Free Shipping
              </div>
            </MainContentPolicyContainer>
          </OneOfPolycies>
        </ShippingPolicyGrid>
      </ShippingPolicyContainer>
    </ShippingPolicyAlignment>
  );
}

export default ShippingPolicy;
