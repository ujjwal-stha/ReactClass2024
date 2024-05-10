import React from "react";
import TestNav from "./TestNav";
import { Helmet } from "react-helmet";
// function shortcut -> rfce
// arrow function shortcut -> rafce
const Test = () => {
  return (
    //Fragment -> <></>
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>

      <TestNav />
      <h1 className="title">This is a test component</h1>
    </>
  );
};

export default Test;

export const Xyz = () => {
  return (
    <>
      <p
        style={{ color: "red", backgroundColor: "dodgerblue", padding: "20px" }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem corrupti
        officiis deserunt voluptate illo rem rerum aliquid magni deleniti
        aperiam, voluptas hic ut. Laudantium quas earum, magnam dolorum qui vel.
      </p>
    </>
  );
};

export const Abc = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem corrupti
        officiis deserunt voluptate illo rem rerum aliquid magni deleniti
        aperiam, voluptas hic ut. Laudantium quas earum, magnam dolorum qui vel.
      </p>
    </>
  );
};
