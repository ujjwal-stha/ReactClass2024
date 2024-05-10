import React from "react";
import { Xyz } from "./Test";
import TestNav from "./TestNav";
import { Helmet } from "react-helmet";

const First = () => {
  return (
    <>
      <Helmet>
        <title>First Page</title>
      </Helmet>

      <TestNav />
      <h2>This is a First Component</h2>
      <Xyz />
    </>
  );
};

export default First;
