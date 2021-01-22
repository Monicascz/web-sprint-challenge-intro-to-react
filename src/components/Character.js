// Write your Character component here
import React from 'react'
import CharacterCards from './CharacterCards'
import styled from 'styled-components'

export default function Character(props) {
    const { characters } = props;
    return (
        <CardsDiv>
            {
            characters.map((character)=>{
                return <CharacterCards key={character.id} character={character}/>
            })
            }
        </CardsDiv>
    )
}

const CardsDiv = styled.div`
display:flex;
flex: wrap;
justify-content: space-evenly;
border: 1px solid red;

`