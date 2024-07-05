/* eslint-disable no-unused-vars */
import styled from "styled-components";
import MallLicenseCheckoutLogo from "../../../Icons/MallLicenseCheckoutLogo";
import ChatWithShopButtonIcon from "../../../Icons/ChatWithShopButtonIcon";

const ProductFromShopAlignment = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
  box-sizing: border-box;
  height: 3.75rem;
  padding: 0 20px;
  align-items: center;
  display: flex;
`;

const ProductFromShopContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
`;

const InputContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row-reverse;
  min-width: 58px;
  padding: 0 12px 0 20px;
`;

const Label = styled.label`
  align-items: center;
  color: rgba(0, 0, 0, 0.54);
  cursor: default;
  display: flex;
  font-size: 12px;
  font-weight: 300;
  max-width: 400px;
  position: relative;
`;

const Input = styled.input`
  align-items: center;
  color: rgba(0, 0, 0, 0.54);
  cursor: default;
  display: flex;
  font-size: 12px;
  font-weight: 300;
  max-width: 400px;
  position: relative;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  box-sizing: border-box;
  padding: 0;
`;

const Checkbox = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.14);
  border-radius: 2px;
  box-shadow: inset 0 2px 0 0 rgba(0, 0, 0, 0.02);
  flex-shrink: 0;
  height: 16px;
  margin-right: 8px;
  position: relative;
  text-align: center;
  user-select: none;
  width: 16px;

  ::before {
    border-bottom: 2px solid #fff;
    border-left: 2px solid #fff;
    content: "";
    height: 5px;
    left: 3px;
    position: absolute;
    top: 3px;
    transform: rotate(-45deg);
    width: 9px;
  }
`;

const ShopNameContainer = styled.a`
  align-items: center;
  color: rgba(0, 0, 0, 0.87);
  display: flex;
  font-weight: 500;
  min-width: 50px;
  text-decoration: none;
  background-color: transparent;
`;

const MallLicenseContainer = styled.div`
  margin-bottom: 1px;
  background-color: #d0011b;
  border-radius: 2px;
  box-sizing: border-box;
  display: inline-block;
  line-height: 12px;
  padding: 2px 3px;
  vertical-align: middle;
`;

const ChatWithShopButton = styled.button`
  background: none;
  border: 0;
  display: flex;
  margin-left: 5px;
  padding: 0;
  cursor: pointer;
  text-transform: none;
  overflow: visible;
`;

function CartShopName() {
  return (
    <ProductFromShopAlignment>
      <ProductFromShopContainer>
        <InputContainer>
          <Label>
            <Input type="checkbox" />
            <Checkbox></Checkbox>
          </Label>
        </InputContainer>

        <ShopNameContainer>
          <div>
            <MallLicenseContainer>
              <MallLicenseCheckoutLogo />
            </MallLicenseContainer>
          </div>
          <span style={{ marginLeft: "10px" }}>Enter Shop Name here</span>
          <ChatWithShopButton>
            <ChatWithShopButtonIcon />
          </ChatWithShopButton>
        </ShopNameContainer>
      </ProductFromShopContainer>
    </ProductFromShopAlignment>
  );
}

export default CartShopName;
