import React from "react";
import "../css/Home.css";
import Menu from "../components/Menu";
import Recomendaciones from "../components/Recomendaciones";

export const NotFound = () => {
  return (
    <div className="container">
      <section className="grid-container">
        <div className="menu">
          <Menu />
        </div>
        <div className="layout">
          <div>
            <h1>404: Not Found</h1>
          </div>
        </div>
        <div className="options">
          <Recomendaciones />
        </div>
      </section>
    </div>
  );
};

export default NotFound;
