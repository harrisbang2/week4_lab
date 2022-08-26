import React from "react";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";

import Home from "./pages/Home";
import SEPractice from "./pages/SE-Practice";
import SubmitArticle from "./pages/Submit-Article"; 
//import NotFoundPage from "./pages/404.js";

const App = () =>  {
    return (
        <Router>
        <div>
          <h1>Software Engineering Empirical Evidence Database (SEED)</h1>
            <ul className="header">
                <li><NavLink exact to = "/">Home</NavLink></li>
                <li><NavLink to = "/SEPractice">Select the Practice</NavLink></li>
                <li><NavLink to = "/SubmitArticle">Submit an Article</NavLink></li>
            </ul>
          <div className="content">
          <Routes>
            <Route exact path="/" component={Home}/>
            <Route  path="/SEPractice" component={SEPractice}/>
            <Route  path="/SubmitArticle" component={SubmitArticle}/>
          </Routes>
          </div>
        </div>
        </Router>
    );
}
 
export default App;
