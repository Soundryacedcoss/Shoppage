import React from "react";
import banner1 from "./image/banner1.jpeg";
import banner2 from "./image/banner2.webp";
import banner3 from "./image/banner3.webp";
import './Carousel.css'
export const Carousel = () => {
  return (
    <div className="Carousel">
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="1000">
            <img src={banner1} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block" style={{top:"380px"}}>
              <button className="Caroselbutton1">Science Fiction</button>
              <h2 style={{color:"white"}}>THE HISTORY OF PHIANO</h2>
              <button className="Caroselbutton2">Browse Store</button>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="1000">
            <img src={banner2} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block" style={{top:"380px"}}>
              <button className="Caroselbutton1">Science Fiction</button>
              <h2 style={{color:"white"}}>THE HISTORY OF PHIANO</h2>
              <button className="Caroselbutton2">Browse Store</button>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="1000">
            <img src={banner3} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block" style={{top:"380px"}}>
              <button className="Caroselbutton1">Science Fiction</button>
              <h2 style={{color:"white"}}>THE HISTORY OF PHIANO</h2>
              <button className="Caroselbutton2">Browse Store</button>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
