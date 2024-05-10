import React from "react";
import Item from "./Item";
import { useSelector } from "react-redux";
import Student from "./Student";
import StudentForm from "./StudentForm";
import ShowProduct from "./ShowProduct";
import SingleProduct from "./SingleProduct";

const Nav = () => {
  const cartData = useSelector((store) => store.cart);
  return (
    <>
      <h1>The number of item in the cart is {cartData.cartcount}</h1>
      <hr />
      <Item />
      <Student />
      <StudentForm />
      <ShowProduct />
      <SingleProduct />
    </>
  );
};

export default Nav;
