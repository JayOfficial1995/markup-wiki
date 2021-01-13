import React from "react";
import { KnowledgeShareData } from "../../jsonObjects/knowledgeShareData";

import Card from "../../components/Card/Card";

import "./knowledgeShare.scss";

function KnowledgeShare() {
  return (
    <section className="knowledge-share-wrapper">
      {KnowledgeShareData.map((data, index) => (
        <Card
          key={index}
          image={data.imageSrc}
          imageAlt={data.imageAlt}
          readTime={data.readTime}
          title={data.title}
          date={data.date}
          description={data.description}
          url={data.url}
        />
      ))}
    </section>
  );
}

export default KnowledgeShare;
