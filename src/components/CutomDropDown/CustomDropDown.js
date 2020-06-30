import React from "react";
import { Collapse } from "antd";

import "./customDropDown.scss";

const { Panel } = Collapse;

function CustomDropDown({props}) {
  const {title, content} = props
  return (
    <Collapse className="drop-down">
      <Panel header={title}>
        {content.map((data, index)=>(
          <a href={data.url} className="web-links">
            {data.link}
          </a>
        ))}
      </Panel>
    </Collapse>
  );
}

export default CustomDropDown;
