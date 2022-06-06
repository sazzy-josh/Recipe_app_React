
import {GiFullPizza , GiHamburger ,GiChopsticks} from "react-icons/gi"
import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";


const Category = () => {
    return ( 
    <Wrapper>
       
       <Container>
       <Slink to={"/cuisine/Italian"}>
        <div> <GiFullPizza /></div> 
        <p> Italian</p>
        </Slink>
       </Container>  
       <Container>
       <Slink  to={"/cuisine/Thai"}>
        <div> <GiHamburger /></div>
        <p>Thai</p>
       </Slink>   
        </Container>
      
       <Container>
       <Slink  to={"/cuisine/Korean"}>
        <div> <GiChopsticks /></div> 
         <p>Korean</p>
         </Slink>
       </Container> 
       
       
        
       
       

    </Wrapper>  
    );
}
 


const Wrapper = styled.div`
  display  :flex ;
  justify-content: center;
  gap: 20px;
  margin: 3px 0;
  
`
const Slink = styled(NavLink)`
    text-decoration: none;
    font-size: 9px;
    background-color: #3a3939;
    border-radius: 100%;
    padding: 9px;
    width: 55px;
    height: 55px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;

    & svg{
        z-index: 2;
        color: #dfd5d5;
        font-size: 15px;
        font-weight: 700;
    }

    &.active{
        background: linear-gradient(to right, #382f1b , #9b439b);
        color: #c4afaf;
    }
`


const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 10px;
    width: 50px;
    text-align: center;

    h4{
        font-size: 12px;
        margin-top: 10px;
    }
    
`

export default Category;