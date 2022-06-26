import React from "react";
import { Link, Switch, Route, useRouteMatch, useParams } from 'react-router-dom';
import Company from "./about/Company";
import Experiance from "./about/Experiance";
import Announcement from "./about/Announcement";

function SubPage() {
    let { anyIdNameYouLike } = useParams();
     console.log(anyIdNameYouLike)
     function getComponent( value ) {
        switch ( value ) {
            case "company":
              return  <Company />
            case "experiance":
              return <Experiance />
            case "announcement":
                return <Announcement />
            default:
                break
         }
     }
    return (
        <div className="bg-red-200">
            {getComponent(anyIdNameYouLike)}
        </div>
    );
}


export default function About() {
    let { path, url } = useRouteMatch();
    return (<>
        <nav>
        <ul className='flex justify-center w-screen bg-rose-200 p-2'>
          <li className="block md:inline-block 
                        text-blue-900 hover:text-blue-500
                        px-3 py-3 border-b-2 border-b-2-red-200 hover:border-blue-900 
                        ">
           <Link to={`${url}/company`}>Company</Link>
          </li>
          <li className="block md:inline-block 
                        text-blue-900 hover:text-blue-500 mx-20
                        px-3 py-3 border-b-2 hover:border-rose-500 
                        ">
           <Link to={`${url}/experiance`}>Experiance</Link>
          </li>
          <li className="block md:inline-block 
                        text-blue-900 hover:text-blue-500 
                        px-3 py-3 border-b-2 border-b-2-red-200 hover:border-blue-900 
                        ">
             <Link to={`${url}/announcement`}>Announcement</Link>
          </li>
        </ul>
      </nav>
        <div className="relative bg-indigo-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
            alt=""
          />
          <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">About Page</h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque lacus nisi urna, arcu sociis eu. Orci vel
            lectus nisl eget eget ut consectetur. Sit justo viverra non adipisicing elit distinctio.
          </p>
        </div>
      </div>

            <Switch>
                <Route exact={true} path={path}>
                    <h3 className="mt-10 text-center text-5xl font-semibold text-gray-700">Please select a Page.</h3>
                </Route>
                <Route path={`${path}/:anyIdNameYouLike`}>
                    <SubPage />
                </Route>
            </Switch>

      </>
    )
}