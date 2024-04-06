/* eslint-disable no-unused-vars */
import Categories from "./Categories"
import styled from "styled-components"
import SimpleBanner from "./SimpleBanner"
import HomePageMall from "./HomePageMall"

const ProductsAlignment = styled.div`
    width: 100%;
`



function MainProducts() {
    return (
        <ProductsAlignment>
            <Categories />
            <SimpleBanner />
            <HomePageMall />
        </ProductsAlignment>
    )
}

export default MainProducts
