
import React from "react";
import { BrowserRouter as Router,Route } from "react-router-dom";
import  Main  from "./component/Main";
import  Login  from "./component/Login";

function App() {
  return (
    <Router>
    <div className="App">
      <Route path="/main" component={Main}/>
      <Route path="/" component={Login}/>
    </div>
    </Router>
  );
}

export default App;
