import React from "react";
import "./Overview.css";
import Preview from "../components/Preview.js";
import v1Image from "../images/v1-beispiel.png";
import v2Image from "../images/v2-beispiel.png";

const Overview = () => {
  return (
    <section className="container overview">
      <header>
        <h3>Beispielentwürfe</h3>
        <p>
          Hier zeige ich Ihnen zwei Designentwürfe wie ihre Seite zukünftig
          aussehen könnte. Beide Entwürfe passen sich in der Darstellung an
          Smartphones an.
        </p>
      </header>
      <div className="row">
        <Preview
          title="Version 1"
          description="Modern mit Scrollfunktion"
          image={v1Image}
          link="/v1"
        />
        <Preview
          title="Version 2"
          description="Angelehnt am Original"
          image={v2Image}
          link="/v2"
        />
      </div>
    </section>
  );
};

export default Overview;
