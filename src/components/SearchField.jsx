import styled from "styled-components"
import {  useNavigate } from "react-router-dom";
import { useState } from "react";

const Search = () => {
    const [ input ,setInput] = useState("") 
    const navigate = useNavigate()

    const handleSearch = (e) => {
       e.preventDefault()
        navigate('/search/'+input)
    }

    return ( 
        <Wrapper>
            <Form onSubmit={handleSearch}>
              <input onChange={(e) => { setInput(e.target.value)}} type="search" value={input}  placeholder="Search Favorite recipe 🍕" />
            </Form>
        </Wrapper>
     );
}
 
const Form = styled.form`
  padding: 15px 25px;
  /* width: 60%; */

  input{
      padding: 10px 48px;
      outline: none;
      border-radius: 10px;
      border: none;
      background-color: #3a3939;
      color: white;
  }

  & ::placeholder{
      color: white;
  }
    
`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export default Search;