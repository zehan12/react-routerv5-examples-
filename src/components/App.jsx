import React from 'react';
import { Route, Link, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <div>
      <nav>
        <ul className='flex justify-center w-screen bg-fuchsia-200 p-2'>
          <li className="block md:inline-block 
                        text-blue-900 hover:text-blue-500
                        px-3 py-3 border-b-2 border-b-2-red-200 hover:border-blue-900 
                        ">
            <Link to="/" >Home</Link>
          </li>
          <li className="block md:inline-block 
                        text-blue-900 hover:text-blue-500 mx-20
                        px-3 py-3 border-b-2 hover:border-rose-500 
                        ">
            <Link to="/contact" >Contact</Link>
          </li>
          <li className="block md:inline-block 
                        text-blue-900 hover:text-blue-500 
                        px-3 py-3 border-b-2 border-b-2-red-200 hover:border-blue-900 
                        ">
            <Link to="/about" >About</Link>
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
