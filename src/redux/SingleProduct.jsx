import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "./actions/productAction";
// import { useParams } from "react-router-dom";
import RatingStar from "../components/RatingStar";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.product);
  const product = data.product;
  // const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSingleProduct(2));
    // dispatch(fetchSingleProduct(id));
  }, [dispatch]);

  return (
    <>
      {/* <h1>{product.title}</h1> */}
      <div className="container">
        <div className="row d-flex justify-content-around align-items-center">
          <div className="col-4">
            <img
              src={product.image}
              alt={product.title}
              height={"300"}
              width={"300"}
              className="img-fluid"
            />
          </div>

          <div className="col-6">
            <h2>{product.title}</h2>
            <h2>$ {product.price}</h2>
            <p>{product.description}</p>
            <p>
              <strong>Category:</strong> {product.category}
            </p>

            {product.rating && (
              <>
                <RatingStar rating={product.rating.rate} />
                &nbsp;<span>({product.rating.count})</span>
              </>
            )}

            <div className="my-3">
              <button className="btn btn-warning" onClick={""}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
