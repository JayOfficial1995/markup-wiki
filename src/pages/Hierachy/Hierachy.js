import React from "react";

import "./hierachy.scss";
import Card from "../../components/Card/Card";
import { HierachyData } from "../../jsonObjects/hierachyData";

function Hierachy() {
  return (
    <div className="hierachy-wrapper">
      {HierachyData.map((data, index) => {
        return (
          <>
            <Card
              key={index}
              thumbnailImg={data.imageSrc}
              imageAlt={data.imageAlt}
              title={data.title}
              subTitle={data.subTitle}
              description={data.description}
            />
          </>
        );
      })}
    </div>
  );
}

export default Hierachy;