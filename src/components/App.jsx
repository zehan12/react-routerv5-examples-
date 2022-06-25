import React from 'react';
import { Route, NavLink, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div>
      <nav>
        <ul className='flex justify-center w-screen bg-fuchsia-200 p-2'>
          <li className="block md:inline-block 
                        text-blue-900 hover:text-blue-500
                        px-3 py-3 border-b-2 border-b-2-red-200 hover:border-blue-900 
                        ">
            <NavLink to="/" activeStyle={{ color: 'green' }} >Home</NavLink>
          </li>
          <li className="block md:inline-block 
                        text-blue-900 hover:text-blue-500 mx-20
                        px-3 py-3 border-b-2 hover:border-rose-500 
                        ">
            <NavLink to="/contact" activeStyle={{ color: 'green' }} >Contact</NavLink>
          </li>
          <li className="block md:inline-block 
                        text-blue-900 hover:text-blue-500 
                        px-3 py-3 border-b-2 border-b-2-red-200 hover:border-blue-900 
                        ">
            <NavLink to="/about" activeStyle={{ color: 'green' }} >About</NavLink>
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
        <Route path='/' exact>
          <Home />
        </Route>
        <Route>
            <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
