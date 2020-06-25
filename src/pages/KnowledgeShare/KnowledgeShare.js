import React from "react";
import { KnowledgeShareData } from "../../jsonObjects/knowledgeShareData";

import Card from "../../components/Card/Card";

import "./knowledgeShare.scss"

function KnowledgeShare() {
  return (
    <div className="knowledge-share-wrapper">
      {KnowledgeShareData.map((data, index) => {
        return (
          <Card
            thumbnailImg={data.imageSrc}
            imageAlt={data.imageAlt}
            readTime={data.readTime}
            title={data.title}
            subTitle={data.subTitle}
            description={data.description}
          />
        );
      })}
    </div>
  );
}

export default KnowledgeShare;
