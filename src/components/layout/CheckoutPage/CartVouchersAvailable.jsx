/* eslint-disable no-unused-vars */
import styled from "styled-components";
import VoucherIcon from "../../../Icons/VoucherIcon";

const Container = styled.div`
  align-items: center;
  display: flex;
  border-top: 1px solid rgba(0, 0, 0, 0.09);
  padding: 1rem 0 1rem 2.5rem;
`;

const MoreVoucherContainer = styled.div`
  margin: 0 0 0 1.5rem;
  position: relative;
`;

const MoreVoucherButton = styled.button`
  background: none;
  border: 0;
  color: #05a;
  padding: 0;
  white-space: nowrap;
  cursor: pointer;
`;

function CartVouchersAvailable() {
  return (
    <Container>
      <VoucherIcon
        color={"#ee4d2d"}
        fill={"currentColor"}
        height={"1.25rem"}
        marginTop={".0625rem"}
        width={"1.3125rem"}
        display={"inline-block"}
      />

      <div style={{ color: "color: rgba(0, 0, 0, .87);" }}>
        Up to 12% off voucher available
      </div>

      <MoreVoucherContainer>
        <MoreVoucherButton>More Vouchers</MoreVoucherButton>
      </MoreVoucherContainer>
    </Container>
  );
}

export default CartVouchersAvailable;
