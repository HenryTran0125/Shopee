/* eslint-disable no-unused-vars */
import { useData } from "../../context/dataContext";
import DefaultHeader from "../layout/Home/DefaultHeader";
import DetailBody from "../layout/DetailItemPage/DetailBody";
import ShopeeMallHeader from "../layout/DetailItemPage/ShopeeMallHeader";

function DetailItemPage() {
  const { dataItem } = useData();
  console.log(dataItem);

  return (
    <div>
      {dataItem?.is_service_by_shopee ? (
        <ShopeeMallHeader />
      ) : (
        <DefaultHeader />
      )}
      <DetailBody />
    </div>
  );
}

export default DetailItemPage;
