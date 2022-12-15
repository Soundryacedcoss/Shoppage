import React from "react";
import { Bookdata1 } from "./BookDetail";
import "./BookCard1.css";
export const Bookcard1 = () => {
  return (
    <div className="BookCard">
      <h2>Best Selling Book Ever</h2>
      <div className="BookCard1">
        {Bookdata1.map((item) => (
          <div class="card" style={{ width: "10rem" }} className="Card1">
            <img
              style={{ width: "100%", height: "230px" }}
              src={item.img}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body" className="CardContaint">
              <h6>{item.title}</h6>
              <small>{item.authername}</small>
              <p class="card-text">{item.rating}</p>
              <b>{item.review}</b>{" "}
              <b style={{ marginLeft: "20px", color: "#ff1616" }}>
                {item.price}
              </b>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
