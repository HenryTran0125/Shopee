/* eslint-disable no-unused-vars */
import styled from "styled-components";
import FindSimilarIcon from "../../../Icons/FindSimilarIcon";

const Container = styled.section`
  padding-bottom: 1px;
  position: relative;
`;

const Alignment = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 2px;
  margin: 22px 20px;
`;

const ProductContainer = styled.div`
  margin-top: 0;
  padding: 16px 0;
  color: rgba(0, 0, 0, 0.87);
  display: block;
  text-decoration: none;
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

const ProductNameContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  position: relative;
  width: 29.03811%;
`;

const ProductNameTextContainer = styled.div`
  line-height: 16px;
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;
  font-size: 14px;
  padding: 5px 20px 0 10px;
`;

const ProductNameText = styled.a`
  color: rgba(0, 0, 0, 0.87);
  display: -webkit-box;
  margin-bottom: 5px;
  max-height: 32px;
  -webkit-text-decoration: none;
  text-decoration: none;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-height: 16px;
  overflow: hidden;
  cursor: pointer;
`;

const VariationsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 17.24138%;
`;

const VariationsWrapper = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex: 1;
  justify-content: space-between;
  outline: none;
  position: relative;
`;

const Button = styled.button`
  background: none;
  border: 0;
  color: rgba(0, 0, 0, 0.54);
  display: flex;
  flex: 1;
  flex-direction: column;
  font-size: 0.875rem;
  margin-right: 10px;
  padding: 0;
  cursor: pointer;
`;

const VariationsText = styled.div`
  align-items: center;
  display: flex;
  text-align: left;
  text-transform: capitalize;
`;

const OptionsIcon = styled.div`
  background: none;
  border-bottom: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid rgba(0, 0, 0, 0.54);
  margin: 0 0 0 10px;
  padding: 0;
  transform: rotate(0);
  transition: transform 0.1s cubic-bezier(0.4, 0, 0.6, 1);
`;

const VariationsOfProduct = styled.div`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  margin-top: 5px;
  text-align: left;
`;

const PriceAlignment = styled.div`
  flex-direction: column;
  width: 15.88022%;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const OriginalPrice = styled.span`
  color: rgba(0, 0, 0, 0.54);
  -webkit-text-decoration: line-through;
  text-decoration: line-through;
  margin-right: 10px;
`;

const SalePrice = styled.span`
  margin: 0;
`;

const QuantityAlignment = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 15.4265%;
`;

const QuantityContainer = styled.div`
  align-items: center;
  display: flex;
`;

const ButtonQuantity = styled.button`
  align-items: center;
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 2px;
  color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
  display: flex;
  font-size: 0.875rem;
  font-weight: 300;
  height: 32px;
  justify-content: center;
  letter-spacing: 0;
  line-height: 1;
  outline: none;
  transition: background-color 0.1s cubic-bezier(0.4, 0, 0.6, 1);
  width: 32px;
`;

const InputQuantity = styled.input`
  border-left: 0;
  border-radius: 0;
  border-right: 0;
  box-sizing: border-box;
  cursor: text;
  font-size: 16px;
  font-weight: 400;
  height: 32px;
  text-align: center;
  width: 50px;
  align-items: center;
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.09);
  color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  letter-spacing: 0;
  line-height: 1;
  outline: none;
  transition: background-color 0.1s cubic-bezier(0.4, 0, 0.6, 1);
`;

const TotalPriceContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  color: #ee4d2d;
  width: 10.43557%;
`;

const TotalPrice = styled.span`
  color: #ee4d2d;
  width: 10.43557%;
`;

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-transform: capitalize;
  width: 12.70417%;
`;

const Delete = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
`;

const FindSimilar = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.0625rem solid transparent;
  color: #ee4d2d;
  font-weight: 400;
  height: 1.875rem;
  max-width: 100%;
  background-color: transparent;
  outline: 0;
  overflow: visible;
  padding: 0.3125rem 0.4375rem;
  position: relative;
  cursor: pointer;
  font-size: 0.875rem;
  line-height: 1;
`;

const FindSimilarText = styled.span`
  color: #ee4d2d;
  font-weight: 400;
`;

function CheckoutProductFromShop() {
  return (
    <Container>
      <Alignment>
        <ProductContainer>
          <div style={{ display: "flex", alignItems: "center" }}>
            <InputContainer>
              <Label>
                <Input />
                <Checkbox></Checkbox>
              </Label>
            </InputContainer>

            <ProductNameContainer>
              <div style={{ display: "flex" }}>
                <a
                  style={{ cursor: "pointer", backgroundColor: "transparent" }}
                >
                  <img alt="data image here" />
                </a>

                <ProductNameTextContainer>
                  <ProductNameText></ProductNameText>
                </ProductNameTextContainer>
              </div>
            </ProductNameContainer>

            <VariationsContainer>
              <VariationsWrapper>
                <Button>
                  <VariationsText>
                    Variations:
                    <OptionsIcon></OptionsIcon>
                  </VariationsText>
                  <VariationsOfProduct>
                    data of variations here
                  </VariationsOfProduct>
                </Button>
              </VariationsWrapper>
            </VariationsContainer>

            <PriceAlignment>
              <div>
                <OriginalPrice>$100</OriginalPrice>
                <SalePrice>$50</SalePrice>
              </div>
            </PriceAlignment>

            <QuantityAlignment>
              <QuantityContainer>
                <ButtonQuantity>-</ButtonQuantity>
                <InputQuantity value={1} />
                <ButtonQuantity>+</ButtonQuantity>
              </QuantityContainer>
            </QuantityAlignment>

            <TotalPriceContainer>
              <TotalPrice>data total price</TotalPrice>
            </TotalPriceContainer>

            <ActionsContainer>
              <Delete>Delete</Delete>
              <div style={{ width: "100%" }}>
                <FindSimilar>
                  <FindSimilarText>Find Similar</FindSimilarText>
                  <FindSimilarIcon />
                </FindSimilar>
              </div>
            </ActionsContainer>
          </div>
        </ProductContainer>
      </Alignment>
    </Container>
  );
}

export default CheckoutProductFromShop;
