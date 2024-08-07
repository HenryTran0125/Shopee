/* eslint-disable no-unused-vars */
import styled from "styled-components";
import PropTypes from "prop-types";
import StickIcon from "../../../Icons/StickIcon";
import { useState } from "react";

const SpecificOption = styled.section`
  margin-bottom: 24px;
  align-items: baseline;
  display: flex;
`;

const ColourName = styled.h3`
  color: #757575;
  flex-shrink: 0;
  font-size: inherit;
  font-weight: 400;
  margin: 0;
  text-transform: capitalize;
  width: 110px;
`;

const ColourContainer = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 515px;
  flex-wrap: wrap;
  margin-top: -8px;
  max-height: 220px;
  max-width: 515px;
  overflow-y: auto;
`;

const OptionButton = styled.button`
  cursor: pointer;
  border: 1px solid
    ${(props) =>
      props.hovered || props.selected ? "#d0011b" : "rgba(0, 0, 0, 0.09)"};
  color: ${(props) =>
    props.hovered || props.selected ? "#d0011b" : "rgba(0,0,0, 0.8)"};
  align-items: center;
  background: #fff;
  border-radius: 2px;
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  margin: 8px 8px 0 0;
  min-height: 2.675rem;
  min-width: 5.5rem;
  outline: 0;
  overflow: visible;
  padding: 0.575rem 0.575rem 0.575rem 2.85rem;
  position: relative;
  text-align: left;
  word-break: break-word;

  ::before {
    border: 0.9375rem solid transparent;
    border-bottom: 0.9375rem solid #d0011b;
    bottom: 0;
    content: "";
    position: absolute;
    right: -0.9375rem;
  }
`;

const ImgOption = styled.img`
  height: 1.825rem;
  left: 0.5rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 1.825rem;
  border: 0;
`;

const BoxTickContainer = styled.div`
  bottom: 0;
  position: absolute;
  right: 0;
  height: 0.9375rem;
  overflow: hidden;
  width: 0.9375rem;
`;

function DetailItemPickingColour({
  colourOfProduct,
  setColorOfPickedProduct,
  setColorOfHoveredProduct,
  setColorName,
}) {
  const [selection, setSelection] = useState(null);
  const [hover, setHover] = useState(null);
  function onSelectColor(index, image, name) {
    setSelection((currValue) => (currValue == index ? null : index));
    setColorOfPickedProduct((currImage) => (currImage == image ? null : image));
    setColorName(name);
  }

  function onHover(index, image) {
    setHover((currValue) => (currValue == index ? currValue : index));
    setColorOfHoveredProduct(image);
  }
  return (
    <SpecificOption>
      <ColourName>{colourOfProduct?.prop_name}</ColourName>
      <ColourContainer>
        {colourOfProduct?.values.map((item, index) => (
          <OptionButton
            hovered={hover == index}
            onMouseEnter={() => onHover(index, item?.imageUrl)}
            onMouseLeave={() => {
              setColorOfHoveredProduct(null);
              setHover(null);
            }}
            selected={selection == index}
            onClick={() => onSelectColor(index, item?.imageUrl, item?.name)}
            key={index}
          >
            <ImgOption src={item.imageUrl} />
            {item.name}

            {selection == index ? (
              <BoxTickContainer>
                <StickIcon />
              </BoxTickContainer>
            ) : (
              ""
            )}
          </OptionButton>
        ))}
      </ColourContainer>
    </SpecificOption>
  );
}

export default DetailItemPickingColour;

DetailItemPickingColour.propTypes = {
  colourOfProduct: PropTypes.any,
  setColorOfPickedProduct: PropTypes.any,
  setColorOfHoveredProduct: PropTypes.any,
  setColorName: PropTypes.any,
};
