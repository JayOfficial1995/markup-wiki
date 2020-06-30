import React from "react";

import { LearningPathData } from "../../jsonObjects/learningPathData";
import CustomDropDown from "../../components/CutomDropDown/CustomDropDown";

import "./learningPath.scss";

function LearningPath() {
  return (
    <div className="learning-path-container">
      <div className="learning-path-wrapper">
        <h1 className="Learning-path-title">TUTORIALS</h1>
        <CustomDropDown  learningPathdata={LearningPathData} />
      </div>
    </div>
  );
}

export default LearningPath;
