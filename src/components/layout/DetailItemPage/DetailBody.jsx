/* eslint-disable no-unused-vars */
import styled from "styled-components";
import DetailItem from "./DetailItem";
import CategoryPath from "./CategoryPath";
import { useParams } from "react-router-dom";
import { useDetailItem } from "../../../services/apiDetailItem";
import StoreInformation from "./StoreInformation";
import ProductInformation from "./ProductInformation";
import { useData } from "../../../context/dataContext";
import { useProductSameShop } from "../../../services/apiProductSameShop";
import { useEffect } from "react";

const Main = styled.div`
  max-width: 1200px;
  width: 1200px;
  padding-bottom: 4.375rem;
  margin-left: auto;
  margin-right: auto;
`;

function DetailBody() {
  const { shopId, itemId, encodedTitle } = useParams();
  const { data, isLoading, error } = useDetailItem(
    shopId,
    itemId,
    encodedTitle
  );
  const { data: sameShopData } = useProductSameShop(shopId);
  const { setDataDetailProduct } = useData();

  useEffect(() => {
    if (!isLoading && !error && data?.data) {
      setDataDetailProduct(realData);
    }
  }, [isLoading, error, data, setDataDetailProduct]);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
          height: "100vh",
        }}
      >
        <div>Loading...</div>
      </div>
    );
  }

  if (error) {
    return <div>Error Loading</div>;
  }

  const realData = data?.data;
  console.log(sameShopData);

  return (
    <Main>
      <CategoryPath data={realData} />
      <DetailItem data={realData} />
      <StoreInformation />
      <ProductInformation data={realData} />
    </Main>
  );
}

export default DetailBody;
