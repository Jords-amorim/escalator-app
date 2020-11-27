import React from "react";
// Importação Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Importação Stylesheet
import './App.css'
// Importação Páginas
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
