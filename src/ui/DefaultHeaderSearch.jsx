/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { searchKeyWord } from "../services/apiSearchKeyWords";
import qs from "qs";
import { Products } from "../data/CateAnchor";
import Shopee from "../Icons/Shopee";
import Cart from "../Icons/Cart";
import MagnifyingGlass from "../Icons/MagnifyingGlass";

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

function DefaultHeaderSearch() {
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
      </HeaderSearching>
    </HeaderContainer>
  );
}

export default DefaultHeaderSearch;
