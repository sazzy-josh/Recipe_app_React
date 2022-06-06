import { useEffect , useState } from "react"; 
import { useParams } from "react-router-dom";
import styled from "styled-components"
import { Link } from "react-router-dom";
import Loading from 'react-fullscreen-loading';



const Search = () => {
 const [ data , setData] = useState()
 const [ loading , setLoading] = useState(false)
 const [error ,setError] = useState(false)

const { query } = useParams()

  useEffect(() => {
    const abortController = new AbortController();
      const SearchData = async (query) => {
       try {
           setLoading(true)
           const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=e6268d30dec74d419918ade58f246d54&query=${query}&number=20`,{signal:abortController.signal})
           if(!res.ok){
               throw new Error("Unable to fetch Data!!")
           }else{
               const data = await res.json()
               setData(data.results)
               setLoading(false)
               setError(false)
           }
       } catch (error) {
         setLoading(false)
         setError(error.message)
         console.log(error.message)
       }
      } 

      SearchData(query)
      return () => {
          console.log("clean up")
        abortController.abort()
      };
  }, [query]);
    
    return ( 
      
        <Container>
            <h4>Search-{query}</h4>
      
          <Grid>
        {error ? <h4 
        style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            width:"100%",
            height: "100%",
            marginTop: "100px",


            }}>Oops 🙊!!We are Unable to fetch Such Data..</h4> : ""}
         {loading && <Loading loading background="rgb(228, 228, 228)" loaderColor="#9b439b" /> }
          {
             data && data.map((item) => {
                   return (
                   <div>
                    <Link to={`/recipe/${item.id}`}>
                    <div key={item.id}>  
                    <img src={item.image} alt=" " />
                    
                    </div>
                    </Link> 
                    <h6>{item.title}</h6>
                   </div>   
                   
                )
               })
           }
          </Grid>
        </Container> 

     );
}
 
const Container = styled.div`
    margin:20px 30px;

`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap:30px;
    align-items: center;
    justify-content: center;
    color: black;
    text-decoration: none;

    div{
        padding: 10px;
        text-align: center;

       

       a{
           text-decoration: none;

           h6{
        text-decoration: none;
        padding-bottom: 5px;
       }
       }


    }
    img{
        border-radius: 10px;
        padding: 5px;
    }
    
`


export default Search;