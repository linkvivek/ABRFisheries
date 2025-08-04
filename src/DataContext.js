import { createContext, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [fisheriesData, setFisheriesData] = useState({});

  return (
    <DataContext.Provider value={{ fisheriesData, setFisheriesData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
