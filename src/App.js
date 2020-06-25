import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hierachy from "./pages/Hierachy/Hierachy"

import "./style/base.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route path="/" component={Hierachy}/>
          {/* <Route path="/knowledgeShare" component={KnowledgeShare}/>
          <Route path="/learningPath" component={LearningPath}/>
          <Route path="/mentorsAndMentees" component={MentorsAndMentees}/> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
