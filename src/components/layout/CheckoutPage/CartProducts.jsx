/* eslint-disable no-unused-vars */
import styled from "styled-components";
import FreeShipping from "../../../assets/images/Shipping/FreeShipping.png";
import SelectedProducts from "./SelectedProducts";

const Main = styled.main`
  color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

const FreeStackShippingContainer = styled.div`
  align-items: center;
  background-color: #fffefb;
  border: 1px solid rgba(224, 168, 0, 0.4);
  border-radius: 2px;
  display: flex;
  margin-bottom: 0.625rem;
  padding: 0.75rem 1rem;
`;

const TableHeaders = styled.div`
  align-items: center;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
  color: #888;
  display: flex;
  font-size: 14px;
  height: 55px;
  margin-bottom: 12px;
  overflow: hidden;
  padding: 0 20px;
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

const Product = styled.div`
  color: rgba(0, 0, 0, 0.8);
  width: 46.27949%;
`;

const UnitPrice = styled.div`
  text-align: center;
  width: 15.88022%;
`;

const Quantity = styled.div`
  width: 15.4265%;
  text-align: center;
`;

const TotalPrice = styled.div`
  text-align: center;
  width: 10.43557%;
`;

const Actions = styled.div`
  width: 12.70417%;
  text-align: center;
`;

function CartProducts() {
  return (
    <Main>
      <FreeStackShippingContainer>
        <img width="36" height="20" border="0" src={FreeShipping} />
        <span style={{ color: "#222", marginLeft: ".5rem" }}>
          Stack Free Shipping Vouchers with Shopee and Shop Vouchers to enjoy
          maximum savings
        </span>
      </FreeStackShippingContainer>

      <TableHeaders>
        <InputContainer>
          <Label>
            <Input type="checkbox" />
            <Checkbox></Checkbox>
          </Label>
        </InputContainer>

        <Product>Product</Product>
        <UnitPrice>Unit Price</UnitPrice>
        <Quantity>Quantity</Quantity>
        <TotalPrice>Total Price</TotalPrice>
        <Actions>Actions</Actions>
      </TableHeaders>

      <SelectedProducts />
    </Main>
  );
}

export default CartProducts;
