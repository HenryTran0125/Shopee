/* eslint-disable no-unused-vars */
import styled from "styled-components";
import ShopeeMallLogo from "../Icons/ShopeeMallLogo";
import ShopeeMallText from "../Icons/ShopeeMallText";

const ShopeeMallSearchContainerAlignment = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ShopeeMallSearchContainer = styled.div`
  padding: 14px 0 21px 0;
  display: flex;
  justify-content: space-between;
`;

const ShopeeMallLogoContainer = styled.div`
  margin-right: 15px;
`;

const ShopeeMallLogoAndText = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const ShopeeMallTextContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 5px;
  bottom: -5px;
`;

function ShopeeMallHeaderSearch() {
  return (
    <ShopeeMallSearchContainerAlignment>
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
              }}
            >
              <ShopeeMallText />
            </a>
          </ShopeeMallTextContainer>
        </ShopeeMallLogoAndText>

        <div>
          <div>Hi</div>
          <div>Hello</div>
        </div>
      </ShopeeMallSearchContainer>
    </ShopeeMallSearchContainerAlignment>
  );
}

export default ShopeeMallHeaderSearch;
