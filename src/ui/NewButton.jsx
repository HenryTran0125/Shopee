/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  display: ${(props) => props.display};
  background-color: ${(props) => props.backgroundColor};
  cursor: ${(props) => props.cursor};
  border: ${(props) => props.border};
  align-items: ${(props) => props.alignItems};
  padding: ${(props) => props.padding};
  border-left: ${(props) => props.borderLeft};
  background: ${(props) => props.background};
  font-size: ${(props) => props.fontSize};
  margin-left: ${(props) => props.marginLeft};
  color: ${(props) => props.color};
`;

function NewButton({ children, ...props }) {
  return (
    <Button
      display={props.display}
      backgroundColor={props.backgroundColor}
      cursor={props.cursor}
      border={props.border}
      alignItems={props.alignItems}
      padding={props.padding}
      borderLeft={props.borderLeft}
      background={props.background}
      fontSize={props.fontSize}
      marginLeft={props.marginLeft}
      color={props.color}
      position={props.position}
    >
      {children}
    </Button>
  );
}

export default NewButton;

NewButton.propTypes = {
  border: PropTypes.any,
  cursor: PropTypes.string,
  color: PropTypes.any,
  children: PropTypes.any,
  display: PropTypes.string,
  padding: PropTypes.any,
  position: PropTypes.string,
  fontSize: PropTypes.any,
  marginLeft: PropTypes.any,
  background: PropTypes.any,
  alignItems: PropTypes.string,
  borderLeft: PropTypes.any,
  backgroundColor: PropTypes.string,
};
