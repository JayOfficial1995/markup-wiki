import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hierachy from "./pages/Hierachy/Hierachy";
import KnowledgeShare from "./pages/KnowledgeShare/KnowledgeShare";
import LearningPath from "./pages/LearningPath/LearningPath";

import 'antd/dist/antd.css';
import "./style/base.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Hierachy} />
          <Route path="/knowledge-share" component={KnowledgeShare} />
          <Route path="/learning-path" component={LearningPath}/>
          {/* <Route path="/mentorsAndMentees" component={MentorsAndMentees}/> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
