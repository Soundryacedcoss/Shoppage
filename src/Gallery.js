import React from "react";
import img1 from "./image/phiano1.jpg";
import wilma from "./image/wilma.jpg";
import "./Gallery.css";
export const Gallery = () => {
  return (
    <div className="GalleryRow1">
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="card">
            <img
              style={{ width: "70%" }}
              src={img1}
              className="img1"
              class="card-img-top"
              alt="..."
              id="img1"
            />
            <div class="carousel-caption d-none d-md-block">
              <div style={{ display: "flex", columnGap: "25%" }}>
                <h5 style={{ color: "red", marginTop: "-50%" }}>
                  The history of piano
                </h5>
                <p style={{ color: "red", marginTop: "-50%" }}>
                  {" "}
                  <button>View Detail</button>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img id="img2" src={wilma} class="card-img-top" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <div style={{ display: "flex", columnGap: "25%" }}>
                <h5 style={{ color: "red", marginTop: "-50%" }}>
                  Wilma mumduya
                </h5>
                <p style={{ color: "red", marginTop: "-50%" }}>
                  {" "}
                  <button>View Detail</button>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
