/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { categories } from "../../../data/Footer/Footer";

const Alignment = styled.div`
  padding: 5rem 0;
  width: 1200px;
  margin: 0 auto;
`;

const H3 = styled.h3`
  font-size: 1rem;
  text-transform: capitalize;
  color: rgba(0, 0, 0, 0.54);
  margin: 0.625rem 0.125rem;
  padding: 0.125rem;
`;

const Column = styled.div`
  width: 240px;
`;

const InsideAlignment = styled.div`
  padding: 1.5rem 0;
  display: flex;
`;

const Keyword = styled.div`
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.54);
  text-transform: uppercase;
  font-weight: 600;
`;

const ListContainer = styled.ul`
  display: flex;
  list-style-type: none;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

const Item = styled.li`
  color: rgba(0, 0, 0, 0.54);
  line-height: 1.5;
`;

function FooterCategories() {
  console.log(categories.length);
  return (
    <Alignment>
      <H3>categories</H3>

      <div>
        <InsideAlignment>
          <Column>
            {categories.map(
              (item, index) =>
                index < 6 && (
                  <div key={index}>
                    <Keyword>{item.keyword}</Keyword>

                    <ListContainer>
                      {item.items.map((specificItem, index) => (
                        <Item key={index}>
                          {specificItem}
                          {index < item.items.length - 1 && (
                            <span>&nbsp;|&nbsp;</span>
                          )}{" "}
                        </Item>
                      ))}
                    </ListContainer>
                  </div>
                )
            )}
          </Column>

          <Column>
            {categories.map(
              (item, index) =>
                5 < index &&
                index < 12 && (
                  <div key={index}>
                    <Keyword>{item.keyword}</Keyword>

                    <ListContainer>
                      {item.items.map((specificItem, index) => (
                        <Item key={index}>
                          {specificItem}
                          {index < item.items.length - 1 && (
                            <span>&nbsp;|&nbsp;</span>
                          )}{" "}
                        </Item>
                      ))}
                    </ListContainer>
                  </div>
                )
            )}
          </Column>

          <Column>
            {categories.map(
              (item, index) =>
                11 < index &&
                index < 17 && (
                  <div key={index}>
                    <Keyword>{item.keyword}</Keyword>

                    <ListContainer>
                      {item.items.map((specificItem, index) => (
                        <Item key={index}>
                          {specificItem}
                          {index < item.items.length - 1 && (
                            <span>&nbsp;|&nbsp;</span>
                          )}{" "}
                        </Item>
                      ))}
                    </ListContainer>
                  </div>
                )
            )}
          </Column>

          <Column>
            {categories.map(
              (item, index) =>
                16 < index &&
                index < 22 && (
                  <div key={index}>
                    <Keyword>{item.keyword}</Keyword>

                    <ListContainer>
                      {item.items.map((specificItem, index) => (
                        <Item key={index}>
                          {specificItem}
                          {index < item.items.length - 1 && (
                            <span>&nbsp;|&nbsp;</span>
                          )}{" "}
                        </Item>
                      ))}
                    </ListContainer>
                  </div>
                )
            )}
          </Column>

          <Column>
            {categories.map(
              (item, index) =>
                21 < index &&
                index < 27 && (
                  <div key={index}>
                    <Keyword>{item.keyword}</Keyword>

                    <ListContainer>
                      {item.items.map((specificItem, index) => (
                        <Item key={index}>
                          {specificItem}
                          {index < item.items.length - 1 && (
                            <span>&nbsp;|&nbsp;</span>
                          )}{" "}
                        </Item>
                      ))}
                    </ListContainer>
                  </div>
                )
            )}
          </Column>
        </InsideAlignment>
      </div>
    </Alignment>
  );
}

export default FooterCategories;
