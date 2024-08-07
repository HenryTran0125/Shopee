/* eslint-disable no-unused-vars */
import styled from "styled-components";
import FooterShopeeIntroduction from "./FooterShopeeIntroduction";
import FooterTrendingPages from "./FooterTrendingPages";
import FooterCategories from "./FooterCategories";
import FooterContact from "./FooterContact";
import { useLocation } from "react-router-dom";

const Section = styled.section`
  min-width: 50rem;
  border-top: 4px solid #ee4d2d;
  background-color: #fff;
`;

const FooterAlignment = styled.div`
  width: inherit;
`;

const FooterContainer = styled.div``;

const ShopeeServices = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 4rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const None = styled.div`
  height: 10rem;
  background-color: #fff;
`;

function Footer() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  console.log(isHome);
  return (
    <Section>
      <FooterAlignment>
        <FooterContainer>
          {isHome ? (
            <>
              <ShopeeServices>
                <FooterShopeeIntroduction />

                <FooterTrendingPages />
              </ShopeeServices>
              <FooterCategories />
            </>
          ) : (
            <None></None>
          )}
          <FooterContact />
        </FooterContainer>
      </FooterAlignment>
    </Section>
  );
}

export default Footer;
