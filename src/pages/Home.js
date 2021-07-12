import React from "react";
import "../css/Home.css";
import Menu from "../components/Menu";
import Inicio from "../components/MisPublicaciones";
import Recomendaciones from "../components/Recomendaciones";

export const Home = () => {
  return (
    <div className="container">
      <section className="grid-container">
        <div className="menu">
          <Menu />
        </div>
        <div className="layout">
          <Inicio />
        </div>
        <div className="options">
          <Recomendaciones />
        </div>
      </section>
    </div>
  );
};

export default Home;
