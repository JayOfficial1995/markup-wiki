import React from "react";

import  LearningPathData  from "../../jsonObjects/learningPathData";
import CustomDropDown from "../../components/CutomDropDown/CustomDropDown";

import "./learningPath.scss";

function LearningPath() {
  return (
    <section className="learning-path-container">
      <article className="learning-path-wrapper">
        <h1 className="Learning-path-title">TUTORIALS</h1>
        <CustomDropDown learningPathData={LearningPathData}/>
      </article>
    </section>
  );
}

export default LearningPath;
