import React, { memo } from "react";

const ChildComp = ({ data, test }) => {
  console.log("Child Component rendered");
  return (
    <>
      <h2 className="text-success">Child Component {data}</h2>
      <button className="btn btn-danger" onClick={test}>
        Click
      </button>
    </>
  );
};

export default memo(ChildComp);
