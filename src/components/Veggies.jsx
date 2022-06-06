import { useEffect  , useState} from "react";
import styled from "styled-components";
import Slider from "react-slick"
import { Link } from "react-router-dom";

const Veggies = () => {
  const [ veggies ,setVeggies ] = useState([])
  const [ isLoading ,setIsLoading ] = useState(false)
  const [ error , setError ] = useState(false)
 


      useEffect(() => {
         const getVeggies = async () => {
           const check = localStorage.getItem('veggies')
           if(check){
             setVeggies(JSON.parse(check))
           } else{
            try {
              setIsLoading(true)
              const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=e6268d30dec74d419918ade58f246d54&number=15&tags=vegetarian`);
              if(!res.ok){
                throw new Error('Ooops!!Failed to Fetch Data')
              } 
              else{
              const data = await res.json()
              setVeggies(data.recipes)
              localStorage.setItem('veggies' , JSON.stringify(data.recipes))
              console.log(data)
              }
           } catch (error) {
               setIsLoading(false)
                setError(true)
           }
           }
         }  

         getVeggies() 
      }, []);
    
      const settings = {
        dots: false,
        speed: 500,
        className: "center",
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding: "60px",
        draggable: true,
        swipeToSlide: true,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 3000,
              cssEase: "linear"
            }
          }
        ]
      };



    return ( 
        <Container>
          <h3>Trending Veggies</h3>
          <Slider {...settings}>
            {veggies && veggies.map((item) =>{
             return (
              <Wrapper key={item.id}>
                <Link to={`/recipe/${item.id}`}>
                 <span>{item.title}</span>
                 <ImageWrapper><img src={item.image} alt={item.title} /></ImageWrapper>
                </Link>
               </Wrapper>        
             )
} )}
             </Slider>
        </Container>
     );
}
const Container = styled.div`
   width: 90%;
   margin: 0 10px; 
   margin-top :-20px ;

   @media only screen and (max-width: 425px)  {
  margin-top: -5px;
  font-size: 15px;
}
`
const ImageWrapper = styled.div`
width: 400px;
height: 400px;
position: absolute;
padding: 10px 34px;
@media only screen and (max-width: 1024px)  {
  padding: 15px 35px;
}

@media only screen and (max-width: 425px)  {
  margin-left: -30px;
  margin-top: 5px;
}

& img {
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
  border-radius: 10px;
  opacity: 1.8;
}
`

const Wrapper = styled.div`
 width: 300px;
 height: 350px;
 border-radius: 20px;
 margin: 0px 10px;
 position: relative;
 display: flex;
 justify-content: center;
 align-items: center;
 
 & span{
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50% ,-150%);
   z-index: 2;
   font-weight: 600;
   color: #ffffff;
 }
`
 
export default Veggies