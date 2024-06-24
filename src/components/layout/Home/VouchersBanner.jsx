/* eslint-disable no-unused-vars */
import styled from "styled-components";
import voucherBanner from "../../../assets/images/Banner/VouchersBanner.png";

const Container = styled.div`
  margin-top: 24px;
  width: 100%;
`;

function VouchersBanner() {
  return (
    <Container>
      <img src={voucherBanner} />
    </Container>
  );
}

export default VouchersBanner;
