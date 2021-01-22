import React from 'react'
import styled from 'styled-components'
export default function CharacterCards(props) {
    const {character} = props


    return (
        <CardStyle>
            <CardDetails>
                <h2>{character.name}</h2>
                <p>Height: {character.height}</p>
                <p>Mass: {character.mass}</p>
                <p>Eye Color: {character.eye_color}</p>
                <p>Skin Color: {character.skin_color}</p>
            </CardDetails>
        </CardStyle>
    )
}

const CardStyle = styled.div`
width: 18%;
margin: 2% 0%;
background-color: ${(pr)=>pr.theme.cardBackColor};
opacity: .8;
border: 1px solid ${(pr)=>pr.theme.cardBorderColor};

&:hover{
    transform: scale(1.1);
    transition: all 0.5s ease-in-out;
    }
    transition: all 0.5s ease-in-out;
};
`;

 const CardDetails = styled.div`
 h2{
    color: ${(pr)=>pr.theme.titleFontColor};
    opacity:1;
 }`