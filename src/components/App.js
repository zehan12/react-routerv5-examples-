import React from 'react';
import { Route, Link, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/" >Home page</Link>
          </li>
          <li>
            <Link to="/contact" >Contact Page</Link>
          </li>
          <li>
            <Link to="/about" >About page</Link>
          </li>
        </ul>
      </nav>
      
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
    </div>
  );
}

export default App;
