import React from "react";
import templeImg from "../images/temple.jpeg";
import beachImg from "../images/beach.jpeg";
import horseImg from "../images/horse.jpeg";

const Slider = () => {
  return (
    <div className="container-fluid">
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner" style={{ height: 400 }}>
          <div className="carousel-item active">
            <img
              src={templeImg}
              className="d-block w-100"
              alt="temple"
              style={{ backgroundSize: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img src={beachImg} className="d-block w-100" alt="road" />
          </div>
          <div className="carousel-item">
            <img src={horseImg} className="d-block w-100" alt="beach" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
