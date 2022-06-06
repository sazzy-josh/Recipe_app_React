import { useParams } from "react-router-dom";
import { useEffect ,useState } from "react";
import styled from "styled-components"
import lib from "react-slick/lib";

const Recipe = () => {
    const [ recipeDetails ,setRecipeDetails] = useState({})
    const [loading ,setLoading] = useState(false)
    const [error , setError] = useState(false)
    const { recipe } = useParams()
    const [active ,setActive] = useState('instructions')

    useEffect(()=> {
       const FetchDetails =  async (recipe) => {
           setLoading(true)
            try {
              const res = await fetch(`https://api.spoonacular.com/recipes/${recipe}/information?apiKey=e6268d30dec74d419918ade58f246d54`)
              if (!res.ok) {
                throw new Error("Ooops!!Something went wrong")
              } else {
                   const data = await res.json()
                   setRecipeDetails(data)
                   console.log(data)
              }
            } catch (error) {
                setLoading(false)
                
            }
       }
       FetchDetails(recipe)

    }, [recipe])
    return ( 
        <Container>
             <Grid>
                 <div>
                    <h5> {recipeDetails.title}</h5>
                    <div>
                        <img src={recipeDetails.image} alt={recipeDetails.title} />
                    </div>

                 </div>
             </Grid>

             <Details>
               <ButttonWrapper>
               <button className={active === 'instructions' ? 'active' : ''}  onClick={() => setActive('instructions')}>Instructions</button>
               <button className={active === 'ingredient' ? 'active' : ''} onClick={() => setActive('ingredient')}>Ingredient</button> 
               </ButttonWrapper>


               <Content>
                 { active === 'instructions' ? <div>
                 {/* <p dangerouslySetInnerHTML={{ __html: recipeDetails.instructions} }>
                  {recipeDetails.instructions}  
                 </p>  */}
                 <Summary>
                 <h4>Summary</h4>
                 <div style={{marginBottom:"10px"}} dangerouslySetInnerHTML={{ __html: recipeDetails.summary} }></div>
                 <div dangerouslySetInnerHTML={{ __html: recipeDetails.instructions} }></div>
                 </Summary> 
                 </div> :  <ul>
                   {recipeDetails.extendedIngredients.map((item)=> (
                     <li>{item.original}</li>
                   ) )}
                 </ul>
}
                 
                  
               </Content>
               
             </Details>

        </Container>
     );
}

const Details = styled.div`
 padding: 20px 35px;

 .active{
   background: linear-gradient(to right , #ac7b7b , #222020);
   color: white;
 }

  h4{
    
    padding: 3px 0;
  }
 

 button{
   padding: 10px;
   border: 1px solid black;
   font-size: 14px;
   margin: 5px;
   cursor: pointer;
   color: #050505;

  
 }
    
`
const ButttonWrapper = styled.div`
  display: flex;
  width: 30%;
  
  
`

const Summary = styled.div`
  margin-top: 20px;
`

const Grid = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-around;
    
    div{
        width:400px ;
        height: 400px;

        img{
            margin-top: 10px;
            max-width: 100%;
            max-height: 100%;
            vertical-align: middle;
        }
    }
`


const Content = styled.div`
  
`
const Container = styled.div`
  width: 100%;
   padding: 15px 50px;
   display:flex ;
   justify-content:center;
   align-items: center;


   @media only screen and (max-width: 1024px) {
     display: flex;
     flex-direction: column;
   }

    h5{
        text-align: center;
        font-size: 16px;
        font-weight: 500;
    }
`
 
export default Recipe;