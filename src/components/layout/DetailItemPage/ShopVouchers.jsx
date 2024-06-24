/* eslint-disable no-unused-vars */
import styled from "styled-components";
import PropTypes from "prop-types";
import { getIntegerPart } from "../../../utilities/helpers";

const ShopVouchersContainer = styled.div`
  margin-left: 1.125rem;
  width: 16.5rem;
`;

const ShopVoucherAlignment = styled.div`
  background: #fff;
  border-radius: 0.125rem;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
  margin-top: 1.125rem;
  overflow: hidden;
  padding: 0.725rem;
`;

const ShopVouchersText = styled.div`
  color: rgba(0, 0, 0, 0.4);
  margin: 0.725rem 0 1.45rem;
`;

const VoucherDiscount = styled.div`
  overflow-y: auto;
  padding-left: 0.25rem;
  max-height: 23.25rem;
`;

const VoucherDiscountAlignment = styled.div`
  margin-top: 0.3125rem;
  height: 7.375rem;
  margin-bottom: 1.25rem;
  background-color: #f8d0d3;
  width: 13.675rem;
`;

const NoVouchers = styled.div`
  margin-top: 0.3125rem;
  height: 7.375rem;
  margin-bottom: 1.25rem;
  background-color: transparent;
  width: 13.675rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VoucherDiscountContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  height: 7.375rem;
  width: 13.675rem;
`;

const MainContentVoucher = styled.div`
  border: 0.0625rem solid transparent;
  border-left: none;
  box-shadow: 0.125rem 0.125rem 0.3125rem rgba(0, 0, 0, 0.07);
  display: flex;
  height: 100%;
  position: relative;
  /* transition: background 1s ease; */
`;

const LeftContentVoucher = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  justify-content: center;
  overflow: hidden;
  padding: 0.15rem 0.29rem 0.15rem 0.86rem;
`;

const DiscountValueContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const DiscountValueText = styled.div`
  color: #d0011b;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1rem;
`;

const MinSpend = styled.div`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: #d0011b;
`;

const ProductLimitAlignment = styled.div`
  display: flex;
  margin: 0.3125rem 0 0.25rem 0;
  min-width: 0;
  overflow: hidden;
  padding: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ProductLimitContainer = styled.div`
  border: 1px solid #ee4d2d;
  border-radius: 0.125rem;
  box-sizing: border-box;
  color: #ee4d2d;
  margin: 0.0625rem 0;
  max-width: 100%;
  overflow: hidden;
  padding: 0.0625rem 0.25rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`;

const ProductLimitText = styled.div`
  font-size: 0.875rem;
  line-height: 0.875rem;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #ee4d2d;
`;

const ExpireDateAlignment = styled.div`
  color: rgba(0, 0, 0, 0.54);
  font-size: 0.625rem;
  line-height: 0.75rem;
  margin: 0.3125rem 0.3125rem 0 0;
  margin-top: 0.3125rem;
  overflow: hidden;
  padding-right: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ExpireDateContainer = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

const ExpireDateText = styled.span`
  color: rgba(0, 0, 0, 0.54);
`;

const RightContentVoucher = styled.div`
  align-items: center;
  border-left: 0.0625rem dashed #e8e8e8;
  flex-shrink: 0;
  padding: 0 0.425rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const ClaimAlignment = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
`;

const ClaimContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const ClaimText = styled.div`
  background-color: #d0011b;
  border-color: #d0011b;
  color: #fff;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 0.125rem;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.09);
  display: flex;
  font-size: 0.625rem;
  height: 2.125rem;
  justify-content: center;
  outline: 0;
  padding: 0.15rem 0.225rem;
  position: relative;
  text-transform: capitalize;
  white-space: nowrap;
  -webkit-line-clamp: 1;
`;

function ShopVouchers({ discountValue, minSpend, productLimit, Date }) {
  return (
    <div>
      <ShopVouchersContainer>
        <ShopVoucherAlignment>
          <ShopVouchersText>Shop Vouchers</ShopVouchersText>

          <VoucherDiscount>
            {discountValue ? (
              <VoucherDiscountAlignment>
                <VoucherDiscountContainer>
                  <MainContentVoucher>
                    <LeftContentVoucher>
                      <DiscountValueContent>
                        <DiscountValueText>
                          ${getIntegerPart(discountValue)} off
                        </DiscountValueText>
                        <MinSpend>
                          Min. Spend ${getIntegerPart(minSpend)}
                        </MinSpend>
                        <ProductLimitAlignment>
                          <ProductLimitContainer>
                            <ProductLimitText>
                              {productLimit && "Specific Product(s)"}
                            </ProductLimitText>
                          </ProductLimitContainer>
                        </ProductLimitAlignment>
                        <ExpireDateAlignment>
                          <ExpireDateContainer>
                            <ExpireDateText>Valid Till: {Date}</ExpireDateText>
                          </ExpireDateContainer>
                        </ExpireDateAlignment>
                      </DiscountValueContent>
                    </LeftContentVoucher>

                    <RightContentVoucher>
                      <ClaimAlignment>
                        <div></div>
                        <ClaimContainer>
                          <ClaimText>Claim</ClaimText>
                        </ClaimContainer>
                        <div></div>
                      </ClaimAlignment>
                    </RightContentVoucher>
                  </MainContentVoucher>
                </VoucherDiscountContainer>
              </VoucherDiscountAlignment>
            ) : (
              <NoVouchers>
                <div>No Vouchers Available.</div>
              </NoVouchers>
            )}
          </VoucherDiscount>
        </ShopVoucherAlignment>
      </ShopVouchersContainer>
    </div>
  );
}

export default ShopVouchers;

ShopVouchers.propTypes = {
  discountValue: PropTypes.any,
  minSpend: PropTypes.any,
  productLimit: PropTypes.any,
  Date: PropTypes.any,
};
