import React from 'react'
import styled from "styled-components"


const Footer = () => {
  return (
    <Container><p>All right Reserved &copy; ..
        <br />
        Designed by Sazzy to satisfy your taste Buds 😁.</p></Container>
  )
}

const Container = styled.div`
    background-color: #3a3939;
    height: 50px;
    width: 100%;
    text-align: center;
    color: white;
    font-size: 10px;
    padding: 10px 0;
    margin-top: 20px;
`

export default Footer