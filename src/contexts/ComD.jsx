import React, { useContext } from "react";
import { GlobalContext } from "./GlobalValue";

const ComD = () => {
  const data = useContext(GlobalContext);

  return (
    <>
      <h1>
        My name is {data.fname} {data.lname}
      </h1>
      <br />
      <h2>My address is {data.subject}</h2>
    </>
  );
};

export default ComD;
