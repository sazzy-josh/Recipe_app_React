import React from "react";
import { useEffect  , useState} from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import { Link } from "react-router-dom";
import Loading from 'react-fullscreen-loading';


const Popular = () => {
  const [ popular ,setPopular ] = useState([])
  const [ isLoading ,setIsLoading ] = useState(false)
  const [ error , setError ] = useState(false)
 

      useEffect(() => {
         const getPopular = async () => {
           const check = localStorage.getItem('popular')
           if(check){
             setPopular(JSON.parse(check))
           } else{
            try {
              setIsLoading(true)
              const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=e6268d30dec74d419918ade58f246d54&number=15&tags=dessert`);
              if(!res.ok){
                throw new Error('Ooops!!Failed to Fetch Data')
              } 
              else{
                setIsLoading(false)
              const data = await res.json()
              setPopular(data.recipes)
              localStorage.setItem('popular' , JSON.stringify(data.recipes))
              }
           } catch (error) {
               setIsLoading(false)
                setError(true)
           }
           }
         }  

         getPopular() 
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
        // autoplay: true,
        // autoplaySpeed: 5000,
        // cssEase: "linear",
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
              // autoplay: true,
              // autoplaySpeed: 9000,
              cssEase: "linear",
              
 

            }
          }
        ]
      };


    return ( 
        <Container >
          <h3>Our Favorite Dessert</h3>
          <Slider  {...settings}>
            {popular && popular.map((item) =>{
             return (
              
            
              <Wrapper key={item.id}>
               {isLoading ? <Loading loading background="#b5cabe" loaderColor="#3498db" /> :  <Link to={`/recipe/${item.id}`}>
                 <span>{item.title}</span>
                 <ImageWrapper><img src={item.image} alt={item.title} /></ImageWrapper>
                </Link> }
               </Wrapper>
              
           
               
               
             )
} )}
             </Slider>
        </Container>
     );
}
const Container = styled.div`
width: 80%;
   
    
`
const ImageWrapper = styled.div`
width: 350px;
height: 350px;
position: absolute;
border-radius: 10px; 
margin: 15px 5px;
padding: 0px 40px;

& img {
   max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
  border-radius: 10px;
  opacity: 1;
  overflow: hidden;
  border-radius: 10px; 
}
`

const Wrapper = styled.div`
 width: 350px;
 height: 350px;
 border-radius: 30px;
 /* margin: 0px 60px; */
 position: relative;
 display: flex;
 justify-content: center;
 align-items: center;
 /* padding: 10px 20px; */
 
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
 
export default Popular
