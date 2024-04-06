/* eslint-disable no-unused-vars */
import styled from "styled-components";
import MainProducts from "./MainProducts";

const Main = styled.div`
    width: 1200px;
    margin: 0 auto;
    opacity: 1;
`

const Banner = styled.div`
    background-image: url('banner.png');
    width: 100%;
    height: 110px;
    margin-top: 20px;
    cursor: pointer;
`



function Products() {
    return (
        <Main>
            <Banner></Banner>
            <MainProducts />
        </Main>
    )
}

export default Products
