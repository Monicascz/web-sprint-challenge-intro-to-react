import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'
import styled from 'styled-components'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

useEffect (()=>{
 axios.get('https://swapi.dev/api/people/')
 .then((res)=>{
  setCharacters(res.data.results)// this sets character to an array of 10 characters.
 })
 .catch((err)=>{
   console.log('Something went wrong', err)
 })
},[])



  return (
    <div className="App">
      <H1 className="Header">Characters</H1>
      <Character characters={characters}/>
    </div>
  );
}

export default App;

const H1= styled.h1`
padding-top: 2%;
font-size: 3.5rem;`