import React, { createContext } from "react";

export const GlobalContext = createContext();

const GlobalValueProvider = (props) => {
  const student = {
    fname: "ujjwal",
    lname: "Stha",
    subject: "React",
  };

  return (
    <GlobalContext.Provider value={student}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalValueProvider;
