import React from "react";
import { useDispatch } from "react-redux";

const Item = () => {
  const dispatch = useDispatch();

  const addItem = () => dispatch({ type: "ADD_ITEM" });
  const subItem = () => dispatch({ type: "SUB_ITEM" });
  return (
    <>
      <button className="btn btn-primary" onClick={addItem}>
        Add Item
      </button>
      <button className="btn btn-danger" onClick={subItem}>
        Remove Item
      </button>
    </>
  );
};

export default Item;
