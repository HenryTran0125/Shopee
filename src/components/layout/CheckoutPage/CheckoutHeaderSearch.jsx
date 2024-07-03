/* eslint-disable no-unused-vars */
import styled from "styled-components";
import ShopeeCartLogo from "../../../Icons/ShopeeCartLogo";
import MagnifyingGlassCart from "../../../Icons/MagnifyingGlassCart";

const Alignment = styled.section`
  align-items: center;
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
  display: flex;
  height: 6.25rem;
  min-width: 1200px;
`;

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 1200px;
`;

const AlignmentContent = styled.div`
  display: flex;
  align-items: center;
`;

const LeftContainer = styled.div`
  display: flex;
  flex: 1;
  padding-left: 1.125rem;
`;

const RightContainer = styled.div`
  position: relative;
  width: 44.425rem;
`;

const ShoppingCartContainer = styled.a`
  align-items: flex-end;
  color: rgba(0, 0, 0, 0.87);
  display: flex;
  -webkit-text-decoration: none;
  text-decoration: none;
`;

const ShoppingCartText = styled.div`
  border-left: 0.0625rem solid #ee4d2d;
  color: #ee4d2d;
  font-size: 1.43rem;
  height: 2.2rem;
  line-height: 1.875rem;
  margin-bottom: 0.078rem;
  margin-left: 1.08rem;
  padding-left: 1.08rem;
  text-transform: capitalize;
`;

const Form = styled.form`
  border: 2px solid #ee4d2d;
  padding: 0;
  --focus-indicator-spacing: 3px;
  align-items: stretch;
  background: #fff;
  border-radius: 2px;
  box-sizing: border-box;
  display: flex;
  height: 2.925rem;
  justify-content: space-between;
`;

const InputContainer = styled.div`
  display: flex;
  flex: 1;
`;

const InputAlignment = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 1;
  padding: 0 0.625rem;
  position: relative;
`;

const Input = styled.input`
  align-items: center;
  border: 0;
  display: flex;
  flex: 1;
  margin: 0;
  outline: none;
  padding: 0;
`;

const Button = styled.button`
  border-radius: 0;
  height: unset;
  width: 5rem;
  background: #ee4d2d;
  color: #fff;
  outline: 0;
  overflow: visible;
  position: relative;
  max-width: 190px;
  min-width: 60px;
  padding: 0 15px;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  align-items: center;
  border: 0;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.09);
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  cursor: pointer;
  flex-direction: column;
  font-size: 14px;
  justify-content: center;
  text-transform: capitalize;
`;

function CheckoutHeaderSearch() {
  return (
    <Alignment>
      <Container>
        <AlignmentContent>
          <LeftContainer>
            <ShoppingCartContainer>
              <ShopeeCartLogo />
              <ShoppingCartText>shopping cart</ShoppingCartText>
            </ShoppingCartContainer>
          </LeftContainer>

          <RightContainer>
            <Form>
              <InputContainer>
                <InputAlignment>
                  <Input placeholder="Search for products, brands and shops" />
                </InputAlignment>
              </InputContainer>

              <Button>
                <MagnifyingGlassCart />
              </Button>
            </Form>
          </RightContainer>
        </AlignmentContent>
      </Container>
    </Alignment>
  );
}

export default CheckoutHeaderSearch;
