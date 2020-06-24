import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";

import "./style/base.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Card />
    </div>
  );
}

export default App;
