import React from "react";
import img1 from "./image/phiano1.jpg";
import wilma from "./image/wilma.jpg";
import "./Gallery.css";
export const Gallery = () => {
  return (
    <div>
    <div className="GalleryRow1">
      <div className="Galery-RowCol1">
        <div
          style={{
            display: "flex",
            columnGap: "19%",
            marginTop: "20%",
            marginRight: "5%",
            padding: "4%",
          }}
        >
          <h3 style={{ color: "white" }}>The History</h3>
          <button type="button" class="btn btn-danger rounded-pill">
            view
          </button>{" "}
        </div>
      </div>
      <div className="Galery-RowCol2">
        <div
          style={{
            display: "flex",
            columnGap: "14%",
            marginTop: "20%",
            marginRight: "5%",
            padding: "4%",
            width: "100%",
          }}
        >
          <h3 style={{ color: "white" }}>The History</h3>
          <button type="button" class="btn btn-danger rounded-pill">
            view
          </button>{" "}
        </div>
      </div>
      
    </div>
    <div className="NetWorkDiv">
        <div>
          <h2>Join NetWork</h2>
          <p>
            Lorem started its journey with cast iron (CI) products in 1980. The
            initial main objective was to ensure pure water and affordable
            irrigation.
          </p>
        </div>
        <div>
          <input type="text" className="InputBox" placeholder="Enter email.." />
          <button type="button" class="btn btn-danger rounded-pill">Send</button>
        </div>
      </div>
    </div>
  );
};
