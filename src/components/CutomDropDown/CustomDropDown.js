import React from "react";
import { Collapse } from "antd";

import "./customDropDown.scss";

const { Panel } = Collapse;

function CustomDropDown(props) {
  const { learningPathData } = props
  return (
    <Collapse className="drop-down">
      {learningPathData.map((data, index) => (
        <Panel header={data.title} key={index}>
          {data.content.map((webLinks, index) => (
            <a key={index} href={webLinks.url} className="web-links" target="_blank">
              {webLinks.link}
            </a>
          ))}
        </Panel>
      ))}
    </Collapse>
  );
}

export default CustomDropDown;
