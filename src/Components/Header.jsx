/* eslint-disable no-unused-vars */
import styled from "styled-components";

const HeaderContainer = styled.header`
  background: linear-gradient(-180deg, #f53d2d, #f63);
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 50rem;
`;

const HeaderNav = styled.nav`
  justify-content: space-between;
  width: 57%;
  margin: 0 auto;
  line-height: 2rem;
  display: flex;
`;
const LeftNav = styled.div`
  display: flex;
  align-items: center;
`;

const RightNav = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const LeftAnchor = styled.a`
  color: #fff;
  font-size: 0.9rem;
  font-weight: 300;
  padding: 0.5rem;
  text-decoration: none;
  display: inline-block;
  position: relative;

  &:not(:last-child)::after {
    /* border-left: 1px solid #fff; */
    position: absolute;
    content: "";
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 35%;
    width: 2px;
    background-color: #f87263;
  }
`;
const FollowUs = styled.div`
  display: inline-block;
  color: #fff;
  padding: 0.5rem;
`;
const Social = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Facebook = styled.svg`
  height: 18px;
  width: 18px;
  border: 2px solid white;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
`;
const FacebookFillPath = styled.path`
  fill: #f53d2d;
`;

const Instagram = styled.svg`
  height: 18px;
  width: 18px;
  border: none;
  cursor: pointer;
`;
const InstagramStop = styled.stop`
  stop-color: #fff;
`;

const RightAnchor = styled.a`
  color: #fff;
  font-size: 0.9rem;
  font-weight: 300;
  padding: 0.5rem;
  text-decoration: none;
  display: inline-block;
`;

const Noti = styled.div`
  display: flex;
  align-items: center;
`;
const Help = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
`;

const Language = styled.div`
  display: flex;
  align-items: center;
`;

const World = styled.svg`
  width: 16px;
  height: 16px;
`;

const LanguagePath = styled.path`
  fill-rule: evenodd;
`;

const LanguageG = styled.g`
  fill-rule: evenodd;
`;

const HeaderSearch = styled.div`
  display: flex;
  width: 57%;
  min-width: 1200px;
  margin: 0 auto;
  padding: 16px 0 10px;
  justify-content: center;
  align-items: center;
`;

const HeaderAlignment = styled.div`
  min-width: 1200px;
`;
const Img = styled.img`
  height: 100%;
  width: 150px;
  display: inline-block;
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

const Cart = styled.svg`
  display: inline-block;
  width: 30px;
  height: 30px;
`;

function Header() {
  return (
    <HeaderContainer>
      <HeaderAlignment>
        <HeaderNav>
          <LeftNav>
            <LeftAnchor href="#">Seller Centre</LeftAnchor>
            <LeftAnchor href="#">Start Selling</LeftAnchor>
            <LeftAnchor href="#">Download</LeftAnchor>
            <FollowUs>Follow us on</FollowUs>

            <Social>
              <Facebook
                xmlns="http://www.w3.org/2000/svg"
                width="128"
                height="128"
                viewBox="0 0 24 24"
              >
                <FacebookFillPath d="M15.997 4.485h2.191V.669C17.81.617 16.51.5 14.996.5c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.562c.001-1.233.333-2.077 2.051-2.077z" />
                <FacebookFillPath d="M14.087 24h-4.006a.75.75 0 0 1-.75-.75v-9.312H6.812a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 .75-.75H9.33V6.037c0-3.723 2.2-6.036 5.74-6.036 1.54 0 2.78.122 3.093.165a.75.75 0 0 1 .648.743v3.578a.75.75 0 0 1-.75.75h-2.054c-1.026 0-1.172.255-1.172 1.197v2.005h2.885a.75.75 0 0 1 .744.842l-.498 4a.75.75 0 0 1-.744.657h-2.387v9.312a.748.748 0 0 1-.748.75zm-3.256-1.5 2.506.001v-9.312a.75.75 0 0 1 .75-.75h2.474l.312-2.5h-2.786a.75.75 0 0 1-.75-.75V6.434c0-.667 0-2.697 2.672-2.697h1.304v-2.15a29.948 29.948 0 0 0-2.242-.087c-2.695 0-4.24 1.653-4.24 4.536v3.151a.75.75 0 0 1-.75.75H7.562v2.5h2.518a.75.75 0 0 1 .75.75V22.5z" />
              </Facebook>
              <Instagram
                xmlns="http://www.w3.org/2000/svg"
                width="128"
                height="128"
                viewBox="0 0 24 24"
              >
                <linearGradient
                  id="a"
                  x1="-37.094"
                  x2="-26.555"
                  y1="-72.719"
                  y2="-84.047"
                  gradientTransform="matrix(0 -1.982 -1.8439 0 -132.522 -51.077)"
                  gradientUnits="userSpaceOnUse"
                >
                  <InstagramStop offset="0" stop-color="#fd5" />
                  <InstagramStop offset=".5" stop-color="#ff543e" />
                  <InstagramStop offset="1" stop-color="#c837ab" />
                </linearGradient>
                <path
                  fill="url(#a)"
                  d="M1.5 1.633C-.386 3.592 0 5.673 0 11.995c0 6.336-.158 7.499.602 9.075a5.056 5.056 0 0 0 3.276 2.677c1.144.294 1.904.253 8.1.253 5.194 0 6.81.093 8.157-.255 1.996-.515 3.62-2.134 3.842-4.957.031-.394.031-13.185-.001-13.587C23.74 2.194 21.889.461 19.45.11c-.56-.081-.672-.105-3.54-.11C5.737.005 3.507-.448 1.5 1.633z"
                />
                <path
                  fill="#f53d2d"
                  d="M11.998 3.139c-3.631 0-7.079-.323-8.396 3.057-.544 1.396-.465 3.209-.465 5.805 0 2.278-.073 4.419.465 5.804 1.314 3.382 4.79 3.058 8.394 3.058 3.477 0 7.062.362 8.395-3.058.545-1.41.465-3.196.465-5.804 0-3.462.191-5.697-1.488-7.375-1.7-1.7-3.999-1.487-7.374-1.487zm-.794 1.597c4.346-.007 7.811-.607 8.006 3.683.072 1.589.072 5.571 0 7.16-.189 4.137-3.339 3.683-7.211 3.683-3.412 0-5.104.121-6.244-1.02-1.157-1.157-1.019-2.811-1.019-6.245 0-4.071-.385-7.026 3.683-7.213.817-.037 1.134-.048 2.785-.05zm5.524 1.471a1.063 1.063 0 1 0 0 2.126 1.063 1.063 0 0 0 0-2.126zm-4.73 1.243a4.55 4.55 0 1 0 .001 9.101 4.55 4.55 0 0 0-.001-9.101zm0 1.597a2.954 2.954 0 1 1-.001 5.907 2.954 2.954 0 0 1 .001-5.907z"
                />
              </Instagram>
            </Social>
          </LeftNav>

          <RightNav>
            <Noti>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#f53d2d"
                  d="M12 .23c-1.097 0-1.99.893-1.99 1.99v1.472c0 .373.302.675.675.675h2.63a.675.675 0 0 0 .675-.675V2.22c0-1.098-.893-1.99-1.99-1.99zM14.629 19.797H9.371a.675.675 0 0 0-.675.675c0 1.822 1.482 3.304 3.304 3.304s3.304-1.482 3.304-3.304a.676.676 0 0 0-.675-.675z"
                />
                <path
                  fill="#f53d2d"
                  d="M20.449 17.437a5.853 5.853 0 0 1-2.078-4.477v-2.662c0-3.513-2.858-6.371-6.371-6.371s-6.371 2.858-6.371 6.371v2.662a5.86 5.86 0 0 1-2.087 4.485 1.55 1.55 0 0 0 1.009 2.728h14.897a1.553 1.553 0 0 0 1.001-2.736z"
                />
                <path d="M13.461 4.699a.75.75 0 0 1-.75-.75V2.313a.711.711 0 0 0-1.422 0v1.636a.75.75 0 0 1-1.5 0V2.313c0-1.219.992-2.21 2.211-2.21s2.211.992 2.211 2.21v1.636a.75.75 0 0 1-.75.75zM12 23.997a3.675 3.675 0 0 1-3.671-3.671.75.75 0 0 1 1.5 0c0 1.197.974 2.171 2.171 2.171s2.171-.974 2.171-2.171a.75.75 0 0 1 1.5 0A3.675 3.675 0 0 1 12 23.997z" />
                <path d="M20.276 21.076H3.724A1.725 1.725 0 0 1 2 19.353c0-.503.22-.98.603-1.309a6.507 6.507 0 0 0 2.318-4.983v-2.958C4.921 6.2 8.097 3.024 12 3.024s7.079 3.175 7.079 7.079v2.958c0 1.921.842 3.734 2.309 4.975a1.724 1.724 0 0 1-1.112 3.04zM12 4.524a5.585 5.585 0 0 0-5.579 5.579v2.958a7.998 7.998 0 0 1-2.84 6.12.222.222 0 0 0-.081.172c0 .121.103.224.224.224h16.553a.228.228 0 0 0 .224-.224.221.221 0 0 0-.078-.17 7.996 7.996 0 0 1-2.843-6.122v-2.958A5.587 5.587 0 0 0 12 4.524z" />
              </svg>
              <RightAnchor href="#">Notifications</RightAnchor>
            </Noti>

            <Help>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#f53d2d"
                  d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
                />
                <circle cx="12" cy="18" r="1" />
                <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z" />
                <path d="M12 14.75a.75.75 0 0 1-.75-.75v-1.01c0-.952.604-1.806 1.502-2.122 1.195-.421 1.998-1.693 1.998-2.618 0-1.517-1.233-2.75-2.75-2.75S9.25 6.733 9.25 8.25a.75.75 0 0 1-1.5 0C7.75 5.906 9.656 4 12 4s4.25 1.906 4.25 4.25c0 1.669-1.317 3.44-2.999 4.032a.752.752 0 0 0-.501.708V14a.75.75 0 0 1-.75.75z" />
              </svg>
              <RightAnchor href="#">Help</RightAnchor>
            </Help>

            <Language>
              <World xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="#f53d2d"
                  d="M12 .75C5.787.75.75 5.787.75 12S5.787 23.25 12 23.25 23.25 18.213 23.25 12 18.213.75 12 .75Z"
                />
                <LanguagePath
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M9.142 4.898C8.295 6.677 7.75 9.187 7.75 12c0 2.813.545 5.323 1.392 7.102.873 1.835 1.934 2.648 2.858 2.648.924 0 1.985-.813 2.858-2.648.847-1.779 1.392-4.289 1.392-7.102 0-2.813-.545-5.323-1.392-7.102C13.985 3.063 12.924 2.25 12 2.25c-.924 0-1.985.813-2.858 2.648Zm-1.355-.645C8.723 2.287 10.163.75 12 .75c1.837 0 3.277 1.537 4.213 3.503.962 2.021 1.537 4.761 1.537 7.747 0 2.986-.575 5.726-1.537 7.747-.936 1.966-2.376 3.503-4.213 3.503-1.837 0-3.277-1.537-4.213-3.503C6.825 17.726 6.25 14.986 6.25 12c0-2.986.575-5.726 1.537-7.747Z"
                />
                <LanguageG fill="#fff" fill-rule="evenodd">
                  <path d="M1.25 9A.75.75 0 0 1 2 8.25h20a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 9ZM1.25 15a.75.75 0 0 1 .75-.75h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Z" />
                  <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM.75 12C.75 5.787 5.787.75 12 .75S23.25 5.787 23.25 12 18.213 23.25 12 23.25.75 18.213.75 12Z" />
                </LanguageG>
              </World>
              <RightAnchor href="#">English</RightAnchor>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={12}
                height={12}
                color="white"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </Language>

            <div>
              <RightAnchor href="#">Sign up</RightAnchor>
              <RightAnchor href="#">Log in</RightAnchor>
            </div>
          </RightNav>
        </HeaderNav>
      </HeaderAlignment>

      <HeaderSearch>
        <Img src="./ShopeeLogo.jpg" />
        <SearchContainer>
          <InputContainer>
            <Input placeholder="Search for products, brands and shops" />
            <Button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M23 24a.997.997 0 0 1-.707-.293l-7.56-7.56a.999.999 0 1 1 1.414-1.414l7.56 7.56A.999.999 0 0 1 23 24z"
                />
                <path
                  fill="#fff"
                  d="M9.5 0C4.262 0 0 4.262 0 9.5S4.262 19 9.5 19 19 14.738 19 9.5 14.738 0 9.5 0z"
                />
              </svg>
            </Button>
          </InputContainer>

          <NavSearch>
            <CateAnchor>Phone Case</CateAnchor>
            <CateAnchor>Tops Women</CateAnchor>
            <CateAnchor>Shoes</CateAnchor>
            <CateAnchor>Muji</CateAnchor>
            <CateAnchor>LEGO</CateAnchor>
            <CateAnchor>Skirt</CateAnchor>
            <CateAnchor>iPhone</CateAnchor>
            <CateAnchor>Hoodie</CateAnchor>
            <CateAnchor>Samsung A55</CateAnchor>
            <CateAnchor>Study Table</CateAnchor>
            <CateAnchor>Baggy Shirt</CateAnchor>
            <CateAnchor>Handbag</CateAnchor>
            <CateAnchor>Perfume</CateAnchor>
          </NavSearch>
        </SearchContainer>
        <Cart
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <path
            fill="#f53d2d"
            d="M22.94 9.07c-.3-.38-.77-.6-1.27-.6h-16l2.41 7.85c.3.99 1.28 1.68 2.39 1.68h8.43c1.06 0 2.01-.63 2.35-1.6l1.93-6.02c.15-.45.06-.93-.24-1.31z"
          />
          <path
            fill="#f53d2d"
            d="M11 23.5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zM18 23.5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5z"
          />
          <path d="M19.252 19h-9.198a2.705 2.705 0 0 1-2.601-1.944L4.345 6.358A1.2 1.2 0 0 0 3.186 5.5H.75a.75.75 0 0 1 0-1.5h2.436c1.206 0 2.275.799 2.601 1.944L6.384 8h15.888c.556 0 1.063.255 1.393.699.325.438.42.989.262 1.511l-2.106 6.946A2.705 2.705 0 0 1 19.252 19zM6.819 9.5l2.075 7.142a1.2 1.2 0 0 0 1.159.858h9.198c.511 0 .979-.33 1.14-.802l2.099-6.925a.203.203 0 0 0-.031-.181.228.228 0 0 0-.188-.092H6.819zM11 24c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-2.5a.5.5 0 1 0 .002 1.002A.5.5 0 0 0 11 21.5zM18 24c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-2.5a.5.5 0 1 0 .002 1.002A.5.5 0 0 0 18 21.5z" />
        </Cart>
      </HeaderSearch>
    </HeaderContainer>
  );
}

export default Header;
