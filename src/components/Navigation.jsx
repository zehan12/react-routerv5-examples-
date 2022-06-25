import { Link } from 'react-router-dom';
import React from 'react';

export default function Navigation(){
    <nav style={{backgroundColor:"green"}}>
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
};