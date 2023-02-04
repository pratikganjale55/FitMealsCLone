import React from "react";
import "./features.css";

function Works() {
  return (
    <>
      <div id="container2">
        <h6>How It Works</h6>
        <div className="logosDiv" style={{ marginTop: "30px" }}>
          <div>
            <i className="fas fa-box"></i>
          </div>

          <div>
            <i className="fas fa-star"></i>
          </div>
          <div>
            <i className="fas fa-truck"></i>
          </div>
          <div>
            <i className="fas fa-check"></i>
          </div>
        </div>
        <div className="desc">
          <div>
            <h2 className="descH2">Fresh ingredients</h2>
            <p className="descp">
              Procuring fresh and fundamental ingredients required for a
              wholesome meal.
            </p>
          </div>
          <div>
            <h2 className="descH2">Finest quality</h2>
            <p className="descp">
              All the meals are designed by our nutrition experts using only the
              best quality ingredients.
            </p>
          </div>
          <div>
            <h2 className="descH2">On time delivery</h2>
            <p className="descp"> Helping you stay ahead of your diet plans.</p>
          </div>
          <div>
            <h2 className="descH2">Preservative-free</h2>
            <p className="descp">
              Your ultimate plan for eating clean without added preservatives.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Works;
