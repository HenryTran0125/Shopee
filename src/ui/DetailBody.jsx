/* eslint-disable no-unused-vars */
import styled from "styled-components";
import DetailItem from "./DetailItem";
import CategoryPath from "./CategoryPath";
import { useParams } from "react-router-dom";
import { getDetailItem, useDetailItem } from "../services/apiDetailItem";

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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error Loading</div>;
  }

  const realData = data?.data;
  console.log(realData);
  console.log(shopId, itemId);
  console.log(data);

  return (
    <Main>
      <CategoryPath data={realData} />
      <DetailItem data={realData} />
    </Main>
  );
}

export default DetailBody;
