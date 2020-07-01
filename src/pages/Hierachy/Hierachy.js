import React from "react";

import "./hierachy.scss";
import Card from "../../components/Card/Card";
import { HierachyData } from "../../jsonObjects/hierachyData";

function Hierachy() {
  return (
    <section className="hierachy-wrapper">
      {HierachyData.map((data, index) => (
        <Card
          key={index}
          image={data.imageSrc}
          imageAlt={data.imageAlt}
          title={data.title}
          designation={data.designation}
          description={data.description}
        />
      ))}
    </section>
  );
}

export default Hierachy;
