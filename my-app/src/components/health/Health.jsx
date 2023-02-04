import React from "react";
import "./health.css";
import Features from "./Features";
import Appintment from "./Appintment";
import Services from "./Services";
import Works from "./Works";
import Customer from "./Customer";
import Mobile from "./Mobile";

function Health() {
  return (
    <>
      <div className="prathmeshcontainer">
        <div className="image"></div>
      </div>
      <Features />
      <Appintment />
      <Services />
      <Works />
      <Customer />
      <Mobile />
    </>
  );
}

export default Health;
