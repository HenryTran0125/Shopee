/* eslint-disable no-unused-vars */
import { useData } from "../context/dataContext";
import DefaultHeader from "../ui/DefaultHeader";
import DetailBody from "../ui/DetailBody";
import ShopeeMallHeader from "../ui/ShopeeMallHeader";

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
