import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetch = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  });
  return (
    <>
      {products &&
        products.map((item, i) => (
          <div key={i}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
    </>
  );
};

export default DataFetch;
