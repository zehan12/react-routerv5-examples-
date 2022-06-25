import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import React from "react";

export default function Routes(){
    <Switch>
        <Route path='/about'>
            <About />
        </Route>
        <Route path='/contact'>
            <Contact />
        </Route>
        <Route path='/'>
            <Home />
        </Route>
    </Switch>
}