import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "../Home"
import Contact from "../Contact";
import About from "../About";

function MyRouter(){
    return(
        <Router>
            <Route exact path = "/" component = {Home}/>
            <Route exact path = "/about" component = {About}/>
            <Route exact path = "/contact" component = {Contact}  />
        </Router>
    )
}
export default MyRouter;