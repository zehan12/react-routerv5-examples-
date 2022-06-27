import React from 'react';
import { Route, NavLink, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import User from './pages/User';
import PageNotFound from './pages/PageNotFound';
import Users from './pages/Users';
import SingleUser from './pages/SingleUser';

function App() {
  return (
    <div>
      <nav>
        <ul className='flex justify-center w-screen bg-fuchsia-200 p-2'>
          <li style={{color:"red"}} className="block md:inline-block 
                        text-blue-900 hover:text-blue-500 mx-5
                        px-3 py-3 border-b-2 border-b-2-red-200 hover:border-blue-900 
                        ">
            <NavLink to="/" activeStyle={{ color: 'green' }} >Home</NavLink>
          </li>
          <li className="block md:inline-block 
                        text-blue-900 hover:text-blue-500 mx-5
                        px-3 py-3 border-b-2 hover:border-rose-500 
                        ">
            <NavLink to="/contact" activeStyle={{ color: 'green' }} >Contact</NavLink>
          </li>
          <li className="block md:inline-block 
                        text-blue-900 hover:text-blue-500 mx-5
                        px-3 py-3 border-b-2 border-b-2-red-200 hover:border-blue-900 
                        ">
            <NavLink to="/about" activeStyle={{ color: 'green' }} >About</NavLink>
          </li>
          <li className="block md:inline-block 
                        text-blue-900 hover:text-blue-500 mx-5
                        px-3 py-3 border-b-2 border-b-2-red-200 hover:border-blue-900 
                        ">
            <NavLink to={
                          {
                        pathname:"/user/zehan",
                        state: {
                          from:"root"
                          }
                        }
                        } activeStyle={{ color: 'green' }} >User</NavLink>
          </li>
          <li className="block md:inline-block 
                        text-blue-900 hover:text-blue-500 mr-10
                        px-3 py-3 border-b-2 border-b-2-red-200 hover:border-blue-900 
                        ">
            <NavLink to="/users" activeStyle={{ color: 'green' }} >Users</NavLink>
          </li>
        </ul>
      </nav>
      
      <Switch>
        <Route path='/about' component={About} >
          {/* <About /> */}
        </Route>
        <Route path='/contact' component={Contact}>
          {/* <Contact /> */}
        </Route>
        <Route path='/user' component={User}></Route> 
        <Route path='/users' component={Users} exact={true}></Route>
        <Route path="/users/:userId" component={SingleUser} exact={true} />

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
