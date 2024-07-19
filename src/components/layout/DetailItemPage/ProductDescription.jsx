/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { useData } from "../../../context/dataContext";

const ProductDescriptionContainer = styled.section`
  padding: 1.075rem 1.075rem 0;
`;

const H2 = styled.h2`
  background: rgba(0, 0, 0, 0.02);
  color: rgba(0, 0, 0, 0.87);
  font-size: 1.125rem;
  font-weight: 400;
  margin: 0;
  padding: 1rem;
  text-transform: capitalize;
`;

const DescriptionAlignment = styled.div`
  margin: 2.143rem 1.071rem 1.071rem;
`;

const DescriptionContainer = styled.div`
  color: rgba(0, 0, 0, 0.8);
  font-size: 0.875rem;
  line-height: 1.7;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-wrap;
`;

function ProductDescription() {
  const { dataDetailProduct } = useData();
  const descObj = dataDetailProduct?.desc_obj;

  return (
    <ProductDescriptionContainer>
      <H2>Product Description</H2>

      <DescriptionAlignment>
        <DescriptionContainer>
          {descObj?.map((item, index) =>
            item.image ? (
              <div key={index}>
                <div style={{ width: "100%" }}>
                  <div style={{ width: "100%", height: "100%" }}>
                    <img
                      style={{
                        border: "0",
                        width: "100%",
                        height: "100%",
                        verticalAlign: "bottom",
                      }}
                      src={item.image}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <p key={index}>{item.text}</p>
            )
          )}
        </DescriptionContainer>
      </DescriptionAlignment>
    </ProductDescriptionContainer>
  );
}

export default ProductDescription;
