import styled from "styled-components";
import GlobeIcon from "../Icons/GlobeIcon";
import QuestionMark from "../Icons/QuestionMark";
import InstagramIcon from "../Icons/InstagramIcon";
import FacebookIcon from "../Icons/FacebookIcon";
import BellNotification from "../Icons/BellNotification";
import ArrowDown from "../Icons/ArrowDown";

const HeaderAlignment = styled.div`
  min-width: inherit;
`;

const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  line-height: 2rem;
  max-width: 1200px;
  color: #fff;
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

const RightAnchor = styled.a`
  color: #fff;
  font-size: 0.9rem;
  font-weight: 300;
  padding: 0.5rem;
  text-decoration: none;
  display: inline-block;
`;

const Notification = styled.div`
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

function HeaderNavigation() {
  return (
    <HeaderAlignment>
      <HeaderNav>
        <LeftNav>
          <LeftAnchor href="#">Seller Centre</LeftAnchor>
          <LeftAnchor href="#">Start Selling</LeftAnchor>
          <LeftAnchor href="#">Download</LeftAnchor>
          <FollowUs>Follow us on</FollowUs>

          <Social>
            <FacebookIcon />
            <InstagramIcon />
          </Social>
        </LeftNav>

        <RightNav>
          <Notification>
            <BellNotification />
            <RightAnchor href="#">Notifications</RightAnchor>
          </Notification>

          <Help>
            <QuestionMark />
            <RightAnchor href="#">Help</RightAnchor>
          </Help>

          <Language>
            <GlobeIcon />
            <RightAnchor href="#">English</RightAnchor>
            <ArrowDown />
          </Language>

          <div>
            <RightAnchor href="#">Sign up</RightAnchor>
            <RightAnchor href="#">Log in</RightAnchor>
          </div>
        </RightNav>
      </HeaderNav>
    </HeaderAlignment>
  );
}

export default HeaderNavigation;
