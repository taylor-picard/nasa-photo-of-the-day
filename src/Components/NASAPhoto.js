import React from "react";
import styled from 'styled-components';

// const dummyData = {
//     date: "2023-05-17",
//     explanation: "Why would a small part of the Sun appear slightly dark?  Visible is a close-up picture of sunspots, depressions on the Sun's surface that are slightly cooler and less bright than the rest of the Sun.  The Sun's complex magnetic field creates these cool regions by inhibiting hot material from entering the spots.  Sunspots can be larger than the Earth and typically last for about a week.  Part of active region AR 3297 crossing the Sun in early May, the large lower sunspot is spanned by an impressive light bridge of hot and suspended solar gas.  This high-resolution picture also shows clearly that the Sun's surface is a bubbling carpet of separate cells of hot gas. These cells are known as granules.  A solar granule is about 1000 kilometers across and lasts for only about 15 minutes.    Your Sky Surprise: What picture did APOD feature on your birthday? (post 1995)", 
//     hdurl: "https://apod.nasa.gov/apod/image/2305/SunSpotBridge_Johnston_960.jpg", 
//     title: "Sunspot with Light Bridge"
//   }

const StyledNasa = styled.div`
    width: 100%;
    background-color: black;
    color: white;
    font-family: 'Roboto Condensed', sans-serif;
`
const StyledH3 = styled.h3`
    width: 100%;
    padding-top: 1.5rem;
    font-size: 2.5rem;
    text-shadow: 0.3rem 0.3rem 0rem blue;
`
const StyledP1 = styled.p`
    padding: 1.5rem;
    font-size: 1.3rem;
`
const StyledP2 = styled.p`
    padding: 1.5rem;
    font-size: 1.2rem;
    ::first-letter{
        float: left;
        line-height: 1.3rem;
        font-size: 3.5rem;
        padding-top: .5rem;
        padding-left: .5rem;
        padding-bottom: .1rem;
        margin-right: .23rem;
        margin-left: .5rem;
        color: blue;
    }
`
const StyledImg = styled.img`
    width: 100%; 
`

const NasaPhoto = (props) => {
    return (
        <StyledNasa className="nasa-photo-wrap">
            <StyledH3>{props.photo.title}</StyledH3>
            <StyledP1>{props.photo.date}</StyledP1>
            <StyledImg src={props.photo.hdurl} alt=""/>
            <StyledP2>{props.photo.explanation}</StyledP2>
        </StyledNasa>    
    )
}

export default NasaPhoto;