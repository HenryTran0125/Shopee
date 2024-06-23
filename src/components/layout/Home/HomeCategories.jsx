/* eslint-disable no-unused-vars */
import styled from "styled-components";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useState } from "react";
import { List } from "../../../data/List";

const CategoriesAlignment = styled.div`
  margin-top: 1.25rem;
  background-color: #ffffff;
`;

const CategoriesText = styled.div`
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.54);
  font-weight: 500;
  text-transform: uppercase;
  display: flex;
  justify-content: start;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  padding: 1.25rem;
`;

const ListPosition = styled.div`
  position: relative;
`;

const ListAlignment = styled.div`
  overflow: hidden;
`;

const ListContainer = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  overflow: hidden;
  flex-wrap: wrap;
  width: 145%;
  padding: 0;
  margin: 0;
  list-style-type: none;
  transform: translate(${(props) => props.position}px, 0);
  /* transition: transform 0.4s ease-in-out; */
  transition: all 500ms ease 0s;
  height: 100%;
`;

const CategoriesElement = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.05);
  justify-content: center;
  align-items: center;
  flex: 0 1 calc(2% - 1rem);
  cursor: pointer;
  /* box-shadow: -10px 10px 10px 0 rgba(0,0,0, .12); */
`;

const ImageContainer = styled.div`
  height: 151px;
  width: 120px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 100%;
`;

const TextContainer = styled.div`
  width: 70%;
  height: 3.125rem;
  text-align: center;
`;

const Text = styled.div`
  color: rgba(0, 0, 0, 0.8);
  font-size: 0.875rem;
  text-decoration: none;
  line-height: 1.25rem;
  height: 2.5rem;
  margin-bottom: 0.625rem;
`;

const Button = styled.button`
  position: absolute;
`;

function HomeCategories() {
  const [position, setPosition] = useState(0);
  const [value, setValue] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isChecked, setIsChecked] = useState(null);

  // const checkIndex =

  function onHover() {
    setIsHovered((check) => !check);
  }

  function checkHover(index) {
    setIsChecked((check) => (index !== check ? index : 0));
    console.log(isChecked);
  }

  function prevOnClick() {
    setPosition((currPosition) => currPosition + 502);
    setValue((currValue) => !currValue);
    console.log(position);
  }

  function nextOnClick() {
    setPosition((currPosition) => currPosition - 502);
    setValue((currValue) => !currValue);
    console.log(position);
  }

  return (
    <CategoriesAlignment>
      <CategoriesText>categories</CategoriesText>
      <ListPosition>
        <ListAlignment>
          <ListContainer position={position}>
            {List.map((item, index) => (
              <CategoriesElement
                onMouseEnter={() => checkHover(index + 1)}
                onMouseLeave={() => checkHover(index + 1)}
                style={{
                  boxShadow: isChecked ? "2px 2px 1px 0 rgba(0,0,0, .12)" : "",
                }}
                key={item.name}
              >
                <ImageContainer>
                  <Image url={item.image}></Image>
                </ImageContainer>

                <TextContainer>
                  <Text>{item.name}</Text>
                </TextContainer>
              </CategoriesElement>
            ))}
          </ListContainer>
        </ListAlignment>

        <ChevronRightIcon
          onClick={nextOnClick}
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          style={{
            backgroundColor: "#fff",
            fontSize: "20px",
            borderRadius: "50%",
            position: "absolute",
            top: isHovered ? "50%" : "48%",
            right: isHovered ? "-2%" : "-1%",
            width: isHovered ? "40px" : "25px",
            height: isHovered ? "40px" : "25px",
            lineHeight: isHovered ? "50px" : "25px",
            marginTop: isHovered ? "-25px" : "-12.5px",
            cursor: "pointer",
            boxShadow: "0 1px 12px 0 rgba(0,0,0, .12)",
            transition: "all .1s cubic-bezier(.4,0,.6,1)",
            visibility: value ? "visible" : "hidden",
          }}
        />

        <ChevronLeftIcon
          onClick={prevOnClick}
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          style={{
            backgroundColor: "#fff",
            fontSize: "20px",
            borderRadius: "50%",
            position: "absolute",
            top: isHovered ? "50%" : "48%",
            left: isHovered ? "-2%" : "-1%",
            width: isHovered ? "40px" : "25px",
            height: isHovered ? "40px" : "25px",
            lineHeight: isHovered ? "50px" : "25px",
            marginTop: isHovered ? "-25px" : "-12.5px",
            cursor: "pointer",
            boxShadow: "0 1px 12px 0 rgba(0,0,0, .12)",
            transition: "all .1s cubic-bezier(.4,0,.6,1)",
            visibility: value ? "hidden" : "visible",
          }}
        />
      </ListPosition>
    </CategoriesAlignment>
  );
}

export default HomeCategories;
