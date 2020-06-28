import React from "react";
import { Select } from "antd";

import "./customDropDown.scss"

const { Option } = Select;

function CustomDropDown() {
  return (
    <Select defaultValue="lucy" className="custom-dropdown">
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
  );
}

export default CustomDropDown;
