/* eslint-disable no-unused-vars */
import styled from "styled-components";
import ShopeeMallLogo from "../../../Icons/ShopeeMallLogo";
import ShopeeMallText from "../../../Icons/ShopeeMallText";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { searchKeyWord } from "../../../services/apiSearchKeyWords";
import { qs } from "qs";
import MagnifyingGlass from "../../../Icons/MagnifyingGlass";
import Cart from "../../../Icons/Cart";

const ShopeeMallSearchContainerAlignment = styled.div`
  min-width: 1200px;
`;

const ShopeeMallWrapper = styled.div`
  min-width: 1200px;
  padding: 0.875rem 0 1.3125rem 0;
`;

const ShopeeMallSearchContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
`;

const ShopeeMallLogoContainer = styled.div`
  margin-right: 15px;
`;

const ShopeeMallLogoAndText = styled.div`
  display: flex;
  align-items: center;
`;

const ShopeeMallTextContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchAndCartContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Form = styled.form`
  border: 0.1875rem solid #fff;
  padding: 0;
  width: 32.5rem;
  display: flex;
`;

const SearchBarMain = styled.div`
  align-items: stretch;
  background: #fff;
  border-radius: 2px;
  box-sizing: border-box;
  display: flex;
  height: 2.5rem;
  justify-content: space-between;
  padding: 0.1875rem;
  flex: 1;
`;

const SearchBarInput = styled.div`
  display: flex;
  flex: 1;
  padding: 0.625rem;
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
  height: 34px;
  min-width: 60px;
  max-width: 190px;
  background-color: #d0011b;
  padding: 0 15px 0 15px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.09);
  font-size: 14px;
`;

const CartContainer = styled.div`
  padding: 10px 0 10px 0;
  cursor: pointer;
`;

function ShopeeMallHeaderSearch() {
  let valueInputShopeeMall;
  const { register, handleSubmit, getValues } = useForm();
  const { searchParams, setSearchParams } = useSearchParams();

  const location = useLocation();
  const navigate = useNavigate();

  function submitShopeeMall() {
    valueInputShopeeMall = getValues("ShopeeMall");
    searchKeyWord(valueInputShopeeMall);
    const queryString = qs.stringify({ keyword: valueInputShopeeMall });
    if (location.pathname.startsWith("/mall")) {
      setSearchParams(
        queryString != "" ? { keyword: valueInputShopeeMall } : {}
      );
    } else {
      navigate();
    }
  }

  return (
    <ShopeeMallSearchContainerAlignment>
      <ShopeeMallWrapper>
        <ShopeeMallSearchContainer>
          <ShopeeMallLogoAndText>
            <ShopeeMallLogoContainer>
              <a
                style={{
                  padding: "2px",
                  margin: "-2px",
                  display: "inline-block",
                }}
              >
                <ShopeeMallLogo />
              </a>
              <a
                style={{
                  borderRight: "1px solid hsla(0,0%,100%,.4)",
                  paddingRight: "1px",
                  display: "inline-block",
                  marginLeft: "16px",
                  transform: "translateY(-10%)",
                  height: "30px",
                }}
              />
            </ShopeeMallLogoContainer>

            <ShopeeMallTextContainer>
              <a
                style={{
                  display: "inline-block",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <ShopeeMallText />
              </a>
            </ShopeeMallTextContainer>
          </ShopeeMallLogoAndText>

          <SearchAndCartContainer>
            <div>
              <Form onSubmit={handleSubmit(submitShopeeMall)}>
                <SearchBarMain>
                  <SearchBarInput>
                    <Input
                      placeholder="Search in Shopee Mall"
                      {...register("ShopeeMall")}
                    />
                  </SearchBarInput>
                </SearchBarMain>
                <Button>
                  <MagnifyingGlass background={"#d0011b"} />
                </Button>
              </Form>
            </div>
            <div>
              <CartContainer>
                <Cart />
              </CartContainer>
            </div>
          </SearchAndCartContainer>
        </ShopeeMallSearchContainer>
      </ShopeeMallWrapper>
    </ShopeeMallSearchContainerAlignment>
  );
}

export default ShopeeMallHeaderSearch;
