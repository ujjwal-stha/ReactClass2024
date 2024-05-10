import React from "react";
import { Link } from "react-router-dom";
// import mountainsImg from "../images/mountains.jpeg";
// import catImg from "../images/cat.jpeg";
// import roadImg from "../images/road.jpeg";

const Card = (props) => {
  const { title, price, id, image } = props.data;
  return (
    <div className="col">
      <div className="card">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h5>$ {price}</h5>
          <Link to={`/productdetails/${id}`} className="btn btn-success">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
