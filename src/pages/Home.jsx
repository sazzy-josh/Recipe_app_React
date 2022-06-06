import React from 'react';

import Popular from '../components/popular';
import Veggies from '../components/Veggies';
import styled from 'styled-components'

const Home = () => {
    return ( 
        <>
        <Wrapper>
        <Veggies />
        <Popular />
            
        </Wrapper>
        </>
     );
}
 

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export default Home;