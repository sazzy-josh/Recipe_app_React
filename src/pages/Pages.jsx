import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import {Routes ,Route } from 'react-router-dom'
import Search from "../components/Searched";
import Recipe from "../components/recipe";


const Pages = () => {
    return ( 
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/Cuisine/:type" element={<Cuisine /> } />
            <Route path="/search/:query" element={<Search />} />
            <Route path="/recipe/:recipe" element={<Recipe />} />
        </Routes>
     );
}
 
export default Pages;