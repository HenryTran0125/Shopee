/* eslint-disable no-unused-vars */
import React from "react";
import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const DataContext = createContext();

function DataProvider({ children }) {
  const [data, setData] = useState();

  return (
    <DataContext.Provider value={{ data, setData }}>
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
