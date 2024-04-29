import PropTypes from "prop-types";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  cursor: pointer;
  padding: 2px auto;
  background-color: ${(props) => (props.isCheck ? "rgb(238, 77, 45)" : "#fff")};
  background: ${(props) => (props.isCheck ? "#ee4d2d" : "#fff")};
  color: ${(props) => (props.isCheck ? "#fff" : "")};
  border: 0;
  border-radius: 2px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.02);
  height: 2.125rem;
  line-height: 2.125rem;
  align-items: center;
  justify-content: center;
  min-width: 5.625rem;
  outline: 0;
  overflow: visible;
  padding: 0 0.9375rem;
  text-transform: capitalize;
`;

function Button({ children, isCheck }) {
  return <StyledButton isCheck={isCheck}>{children}</StyledButton>;
}

export default Button;

Button.propTypes = {
  children: PropTypes.string.isRequired,
  isCheck: PropTypes.bool.isRequired,
};
