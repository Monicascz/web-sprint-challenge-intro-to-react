// Write your Character component here
import React from 'react'
import CharacterCards from './CharacterCards'
import styled from 'styled-components'

export default function Character(props) {
    const { characters } = props;
    return (
        <PageDiv>
            <CardsDiv>
                {/* //mapping here to select just one character from the array, passing character to the next file (CharacterCards) for styling */}
                {
                characters.map((character)=>{
                    return <CharacterCards key={character.id} character={character}/>
                })
                }
            </CardsDiv>
        </PageDiv>
    )
}
const PageDiv= styled.div`
height: 50vh;
padding: 1% 0% 5% 0%;

`

const CardsDiv = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: space-evenly;
width:100%;
`