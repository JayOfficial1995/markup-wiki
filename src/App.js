import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hierachy from "./pages/Hierachy/Hierachy";
import KnowledgeShare from "./pages/KnowledgeShare/KnowledgeShare";

import "./style/base.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Hierachy} />
          <Route path="/knowledgeShare" component={KnowledgeShare} />
          {/* <Route path="/learningPath" component={LearningPath}/>
          <Route path="/mentorsAndMentees" component={MentorsAndMentees}/> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
