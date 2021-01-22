import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'
import { ThemeProvider } from 'styled-components'
import theme from './theme/index'
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
  console.log(res.data.results)
  setCharacters(res.data.results)
 })
 .catch((err)=>{
   console.log('Something went wrong', err)
 })
},[])



  return (
    <ThemeProvider theme = {theme}>
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character characters={characters}/>
    </div>
    </ThemeProvider>
  );
}

export default App;
