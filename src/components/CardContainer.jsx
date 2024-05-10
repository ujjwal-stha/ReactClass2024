import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const CardContainer = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(8);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {products &&
            products
              .slice(0, limit)
              .map((item, index) => <Card key={index} data={item} />)}
        </div>
      </div>
    </>
  );
};

export default CardContainer;
