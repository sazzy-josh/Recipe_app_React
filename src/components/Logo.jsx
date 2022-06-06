import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {MdOutlineFastfood} from "react-icons/md"


const Logo = () => {
    return (
       <Log to={'/'}>
       FOODIE<MdOutlineFastfood /> 
       </Log>
        
      );
}

const Log = styled(Link)`
  font-size:26px ;
  font-weight: 600;
  font-family: 'Lilita One', cursive;
  padding: 15px 20px;
  color: #9b439b;
  display: flex;
  text-decoration: none; 
  text-decoration-color: beige;

  a{
    text-decoration: none;
  }
  
  .active{
  text-decoration:none;
  }

  
`

 
export default Logo;