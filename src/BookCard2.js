import React from "react";
import "./BookCard2.css";
import { Bookdata2 } from "./BookDetail";
export const BookCard2 = () => {
  return (
    <div className="BookCArd2">
      <div className="NAvbar">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="//" style={{ fontWeight: "bold" }}>
              Latest Publish item
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item" style={{ marginLeft: "50%" }}>
                  <a class="nav-link active" aria-current="page" href="//">
                    {" "}
                    <button
                      type="button"
                      class="btn btn-outline-danger rounded-pill"
                    >
                      Home
                    </button>{" "}
                  </a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="//">
                    {" "}
                    <button
                      type="button"
                      class="btn btn-outline-danger rounded-pill"
                    >
                      Horror
                    </button>{" "}
                  </a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="//">
                    {" "}
                    <button
                      type="button"
                      class="btn btn-outline-danger rounded-pill"
                    >
                      Thriller
                    </button>{" "}
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link active" aria-current="page" href="//">
                    {" "}
                    <button
                      type="button"
                      class="btn btn-outline-danger rounded-pill"
                    >
                      science
                    </button>{" "}
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link active" aria-current="page" href="//">
                    {" "}
                    <button
                      type="button"
                      class="btn btn-outline-danger rounded-pill"
                    >
                      History
                    </button>{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div>
      <div className="BookCard1">
        {Bookdata2.map(
          (item) => (
            <div class="card" style={{ width: "9rem" }} className="Card1">
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
                <b style={{ marginLeft: "20px", color: "#ff1616",paddingBottom:"9%" }}>
                  {item.price}
                </b>
              </div>
            </div>
          )
        )}
      </div>
      </div>
    </div>
  );
};
