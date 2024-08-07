/* eslint-disable no-unused-vars */
import styled from "styled-components";
import FooterShopeeIntroduction from "./FooterShopeeIntroduction";
import FooterTrendingPages from "./FooterTrendingPages";
import FooterCategories from "./FooterCategories";
import FooterContact from "./FooterContact";

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
  border-bottom: 1px solid rgba(0, 0, 0, 0.54);
`;

function Footer() {
  return (
    <Section>
      <FooterAlignment>
        <FooterContainer>
          <ShopeeServices>
            <FooterShopeeIntroduction />

            <FooterTrendingPages />
          </ShopeeServices>

          <FooterCategories />

          <FooterContact />
        </FooterContainer>
      </FooterAlignment>
    </Section>
  );
}

export default Footer;
