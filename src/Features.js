import React from "react";
import img1 from "./image/Even-winter.jpg";
import img2 from "./image/winter2.jpg";
import "./Features.css";
import sideimg from "./image/Sideimg.jpg";
export const Features = () => {
  return (
    <div className="Container">
      <div className="CarouselDiv1">
        <div className="Container-row1-col1">
          <div style={{fontWeight:"bold"}}>Fetured This Week </div>
          <div>
            <button class="btn bg-transparent" style={{border:"solid black 1px"}}>View</button>
          </div>
        </div>
        <div>
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
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
            <div class="carousel-inner">
              
              <div class="carousel-item active">
                <div className="carouselItemDiv">
                  <div>
                    <img className="Carouselimg" src={img1} class="d-block w-100" alt="..." />
                  </div>
                  <div className="carouselItemDivContent">
                    <h2>The race of DragonS </h2>
                    <small>By Even Winter</small>
                    <p style={{ fontWeight: "bold" }}>$50</p>
                    <b>⭐⭐⭐⭐(1 Review)</b>
                    <br />
                    <button className="ButtonCarousel">View Detail</button>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
              <div className="carouselItemDiv">
                  <div>
                    <img className="Carouselimg" src={img2} class="d-block w-100" alt="..." />
                  </div>
                  <div className="carouselItemDivContent">
                    <h2>The race of DragonS </h2>
                    <small>By Even Winter</small>
                    <p style={{ fontWeight: "bold" }}>$50</p>
                    <b>⭐⭐⭐⭐(1 Review)</b>
                    <br />
                    <button className="ButtonCarousel">View Detail</button>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
              <div className="carouselItemDiv">
                  <div>
                    <img className="Carouselimg" src={img1} class="d-block w-100" alt="..." />
                  </div>
                  <div className="carouselItemDivContent">
                    <h2>The race of DragonS </h2>
                    <small>By Even Winter</small>
                    <p style={{ fontWeight: "bold" }}>$50</p>
                    <b>⭐⭐⭐⭐(1 Review)</b>
                    <br />
                    <button className="ButtonCarousel">View Detail</button>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="SideimgDiv">
        <img src={sideimg} className="Sideimg" alt="..." />
      </div>
    </div>
  );
};
