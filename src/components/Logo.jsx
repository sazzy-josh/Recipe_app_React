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
<<<<<<< HEAD
=======
 
>>>>>>> 49141402ad25a9d85d04c4bd1b99ccb5ff3eb779
  padding: 15px 20px;
  color: #9b439b;
  display: flex;
  text-decoration: none; 
  text-decoration-color: beige;

  a{
    text-decoration: none;
  }
  

  
`

 
export default Logo;
