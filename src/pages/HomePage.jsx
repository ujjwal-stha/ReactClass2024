import React from "react";
import Slider from "../components/Slider";
import { Helmet } from "react-helmet";
import IncrementDecrement from "../components/IncrementDecrement";
// import DataFetch from "../components/DataFetch";
import CardContainer from "../components/CardContainer";
import DataCounter from "../hooks/DataCounter";

import Memo from "../hooks/Memo";
import ParentComp from "../hooks/ParentComp";
import Show from "../contexts/Show";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Ecommerce</title>
      </Helmet>
      <Slider />
      <br />
      <CardContainer />
      <br />
      <IncrementDecrement />
      {/* <DataFetch /> */}

      <DataCounter />
      <Memo />
      <ParentComp />
      <Show />
    </>
  );
};

export default HomePage;
