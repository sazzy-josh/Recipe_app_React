import React from "react"; 
import { useParams } from "react-router-dom";
import { useEffect , useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Loading from 'react-fullscreen-loading';


const Cuisine = () => {
    const { type } = useParams()
    const [ cuisine , setCuisine] = useState([])
    const [loading , setLoading] = useState(false)
    const [error , setError] = useState(false)

    useEffect(() =>{
     const getCuisine = async(name) => {
       
        try {
            setLoading(true)
            const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=e6268d30dec74d419918ade58f246d54&cuisine=${name}`)
            if(!res.ok){
                throw new Error('Failed to fetch data')
            } else{
                const data = await res.json()
                setCuisine(data.results)
                console.log(data.results)
                setLoading(false)
            }
        } catch (error) {
            setLoading(false)
            setError(error.message)
        }
         
     }
     getCuisine(type)

    },[type])

    return ( 

        <Container>
          <h3 >Cuisine -{type}</h3>
          <Wrapper>
          {loading && <Loading loading background="rgb(228, 228, 228)" loaderColor="#ba34db" /> }
              {cuisine && cuisine.map((item) => {
                  return (
                      <div>
                          <Link to={`/recipe/${item.id}`}>
                            
                            
                            <img src={item.image} alt={item.image} />

                            <h6>{item.title}</h6>
                          </Link>
                      </div>
                  )
              })}
          </Wrapper>
        </Container>
       

        
        
     );
}

const Container = styled.div`
    
    
    h3{
        margin-left: 20px;
    }
`

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap:20px;
    align-items: center;
    justify-content: center;
    margin: 20px 40px;
    
    a{
        padding-top: 15px;
        text-decoration: none;
    }
    
    div{
    overflow: hidden;
    
    padding: 10px;
    text-align:center ;

     img{
        border-radius: 25px;
        /* padding: 5px; */
        overflow: hidden;
     }

    }
`
export default Cuisine;