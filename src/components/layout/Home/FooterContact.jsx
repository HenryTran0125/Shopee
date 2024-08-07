/* eslint-disable no-unused-vars */
import styled from "styled-components";
import {
  service,
  payment,
  logistic,
  followUs,
  appDownload,
} from "../../../data/Footer/Footer";
import QR from "../../../assets/images/FooterShopeeAppDownload/QR.jpeg";

const Container = styled.div`
  background-color: #fbfbfb;
  width: 100%;
`;

const Alignment = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const Service = styled.div`
  padding: 0.5rem;
  display: flex;
`;

const H3 = styled.h3`
  font-size: 0.85rem;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.87);
  margin: 0.625rem 0;
  padding: 0.125rem 0;
`;

const Column = styled.div`
  width: 240px;
`;

const ListContainer = styled.ul`
  list-style-type: none;
`;

const Item = styled.li`
  color: rgba(0, 0, 0, 0.54);
  line-height: 2;
  display: flex;
  align-items: center;
`;

const ImageContainer = styled.span`
  display: inline-block;
  background-color: #fff;
  border-radius: 0.125rem;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  height: 2rem;
  margin-bottom: 1rem;
  margin-right: 0.5rem;
  overflow: hidden;
  padding: 0.25rem;
  width: 4rem;
  line-height: 1;
`;

const Image = styled.img``;

const IconSocialMedia = styled.img`
  margin-right: 0.5rem;
`;

const AppDownloadsContainer = styled.div`
  display: flex;
  align-items: stretch;
`;

const ImageContainerElement = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style-type: none;
`;

const ImageElement = styled.li`
  background-color: #fff;
  border-radius: 0.125rem;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
`;

const QRImage = styled.img`
  background-color: #fff;
  border-radius: 0.125rem;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  margin-right: 8px;
`;

function FooterContact() {
  return (
    <Container>
      <Alignment>
        <Service>
          <Column>
            <H3>{service[0].keyword}</H3>

            <ListContainer>
              {service[0].items.map((item, index) => (
                <Item key={index}>{item}</Item>
              ))}
            </ListContainer>
          </Column>

          <Column>
            <H3>{service[1].keyword}</H3>

            <ListContainer>
              {service[1].items.map((item, index) => (
                <Item key={index}>{item}</Item>
              ))}
            </ListContainer>
          </Column>

          <Column>
            <div>
              <div>
                <H3>payment</H3>

                {payment.map((item, index) => (
                  <ImageContainer key={index}>
                    <Image src={item} />
                  </ImageContainer>
                ))}
              </div>

              <div>
                <H3>logistics</H3>

                {logistic.map((item, index) => (
                  <ImageContainer key={index}>
                    <Image src={item} />
                  </ImageContainer>
                ))}
              </div>
            </div>
          </Column>

          <Column>
            <div>
              <H3>follow us</H3>

              <ListContainer>
                {service[2].items.map((item, index) => (
                  <Item key={index}>
                    <IconSocialMedia src={followUs[index]} />
                    {item}
                  </Item>
                ))}{" "}
              </ListContainer>
            </div>
          </Column>

          <Column>
            <H3>shopee app download</H3>

            <AppDownloadsContainer>
              <QRImage src={QR} />

              <ImageContainerElement>
                {appDownload.map((item, index) => (
                  <ImageElement key={index}>
                    <Image src={item} />
                  </ImageElement>
                ))}
              </ImageContainerElement>
            </AppDownloadsContainer>
          </Column>
        </Service>

        <div></div>
      </Alignment>
    </Container>
  );
}

export default FooterContact;
