/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { searchKeyWord } from "../../../services/apiSearchKeyWords";
import qs from "qs";
import { Products } from "../../../data/CateAnchor";
import Shopee from "../../../Icons/Shopee";
import Cart from "../../../Icons/Cart";
import MagnifyingGlass from "../../../Icons/MagnifyingGlass";
import { useSelector } from "react-redux";

const HeaderContainer = styled.div`
  min-width: inherit;
`;

const HeaderSearching = styled.div`
  display: flex;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem 0 0.625rem;
  height: 6.3125rem;
  position: relative;
`;

const Img = styled.a`
  color: -webkit-link;
  cursor: pointer;
  padding-right: 2.5rem;
`;

const SearchContainer = styled.div`
  display: flex;
  width: 73%;
  flex-direction: column;
  justify-content: center;
`;

const InputContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Input = styled.input`
  height: 45px;
  width: 100%;
  border-radius: 2px;
  border: none;
  margin-bottom: 10px;
  padding: 20px;
`;

const Button = styled.button`
  min-width: 60px;
  max-width: 190px;
  width: 30px;
  height: 34px;
  background-color: #f53d2d;
  border: none;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 10%;
  right: 0.2%;
`;

const NavSearch = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
`;

const CateAnchor = styled.a`
  display: inline-block;
  /* margin-right: 10px; */
`;

const PreviewCart = styled.div`
  z-index: 20;
  position: absolute;
  background-color: #fff;
  height: 340px;
  width: 390px;
  right: 3%;
  top: 90%;
`;

const ArrowPreviewCart = styled.div`
  position: absolute;
  bottom: 100%;
  right: 5%;
  border-bottom: 10px solid #fff;
  border-right: 10px solid transparent;
  border-left: 10px solid transparent;
  height: 0;
  width: 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px;
`;

const Title = styled.div`
  flex: 1;
  line-height: 2;
`;

const H3 = styled.h3`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.26);
  font-weight: 400;
  letter-spacing: 1px;
`;

const ProductListed = styled.div`
  flex: 3;
`;

const ButtonPreviewCart = styled.button`
  flex: 1;
`;

function DefaultHeaderSearch() {
  const selectedObject = useSelector(
    (state) => state.productInCart.productsInCart
  );
  let valueInput;
  const navigate = useNavigate();

  function onBackHome() {
    navigate("/");
  }

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  function onSubmit() {
    valueInput = getValues("searching");
    searchKeyWord(valueInput);
    const queryString = qs.stringify({ keyword: valueInput }); //create URL string automatically with key is "keyword" and value is "valueInput"
    if (location.pathname.startsWith("/search")) {
      //if current page is search
      setSearchParams(valueInput != "" ? { keyword: valueInput } : {});
    } else {
      //if current page is not search (on Home page)
      navigate(`/search?${queryString}`);
    }
  }

  return (
    <HeaderContainer>
      <HeaderSearching>
        <Img onClick={() => onBackHome()}>
          <Shopee />
        </Img>

        <SearchContainer>
          <InputContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder="Search for products, brands and shops"
                {...register("searching")}
              />
            </form>

            <Button>
              <MagnifyingGlass />
            </Button>
          </InputContainer>

          <NavSearch>
            {Products.map((product) => (
              <CateAnchor key={product}>{product}</CateAnchor>
            ))}
          </NavSearch>
        </SearchContainer>

        <Cart />

        <PreviewCart>
          <ArrowPreviewCart></ArrowPreviewCart>

          <Container>
            <Title>
              <H3>Recently Added Products</H3>
            </Title>

            <div></div>

            <div></div>
          </Container>
        </PreviewCart>
      </HeaderSearching>
    </HeaderContainer>
  );
}

export default DefaultHeaderSearch;
