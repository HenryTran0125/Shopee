/* eslint-disable no-unused-vars */
import React from "react";
import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const DataContext = createContext();

function DataProvider({ children }) {
  const [dataItem, setDataItem] = useState();
  const [dataDetailProduct, setDataDetailProduct] = useState();
  const [shopIdProductSameShop, setShopIdProductSameShop] = useState();
  // console.log(dataItem);

  return (
    <DataContext.Provider
      value={{
        dataItem,
        setDataItem,
        dataDetailProduct,
        setDataDetailProduct,
        shopIdProductSameShop,
        setShopIdProductSameShop,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

function useData() {
  return useContext(DataContext);
}

DataProvider.propTypes = {
  children: PropTypes.any,
};

export { DataProvider, useData };
