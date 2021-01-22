import React from 'react'
import styled from 'styled-components'
export default function CharacterCards(props) {
    const {character} = props


    return (
        <Cardstyle>
            <h2>{character.name}</h2>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>Eye Color: {character.eye_color}</p>
            <p>Skin Color: {character.skin_color}</p>

        </Cardstyle>
    )
}

const Cardstyle = styled.div`
 border: 1px solid green;
 `