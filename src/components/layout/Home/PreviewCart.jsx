/* eslint-disable no-unused-vars */
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

const PreviewCartContainer = styled.div`
  z-index: 20;
  position: absolute;
  background-color: #fff;
  height: 340px;
  width: 390px;
  right: 3%;
  top: 90%;
  animation: ${(props) => props.cartPreview && OpenPreviewCart} 100ms linear;
`;

const ArrowPreviewCart = styled.div`
  position: absolute;
  bottom: 100%;
  right: 5%;
  border-bottom: 10px solid #fff;
  border-right: 10px solid transparent;
  border-left: 10px solid transparent;
  height: 0;
  width: 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px;
`;

const OpenPreviewCart = keyframes`
 from {
    height: 0px;
    width: 0px;
    right: 3%;  // Start from the final 'right' position
    top: 90%;   // Start from the final 'top' position
  }
  to {
    height: 340px;
    width: 390px;
    right: 3%;
    top: 90%;
  }
`;

const Title = styled.div`
  flex: 1;
  line-height: 2;
`;

const H3 = styled.h3`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.26);
  font-weight: 400;
  letter-spacing: 1px;
`;

const ProductListed = styled.div`
  flex: 3;
`;

const ButtonPreviewCart = styled.button`
  flex: 1;
`;

function PreviewCart({ cartPreview }) {
  return cartPreview ? (
    <PreviewCartContainer cartPreview={cartPreview}>
      <ArrowPreviewCart></ArrowPreviewCart>

      <Container>
        <Title>
          <H3>Recently Added Products</H3>
        </Title>

        <div></div>

        <div></div>
      </Container>
    </PreviewCartContainer>
  ) : (
    ""
  );
}

export default PreviewCart;

PreviewCart.propTypes = {
  cartPreview: PropTypes.bool,
};
