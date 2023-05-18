import React from "react";

// const dummyData = {
//     date: "2023-05-17",
//     explanation: "Why would a small part of the Sun appear slightly dark?  Visible is a close-up picture of sunspots, depressions on the Sun's surface that are slightly cooler and less bright than the rest of the Sun.  The Sun's complex magnetic field creates these cool regions by inhibiting hot material from entering the spots.  Sunspots can be larger than the Earth and typically last for about a week.  Part of active region AR 3297 crossing the Sun in early May, the large lower sunspot is spanned by an impressive light bridge of hot and suspended solar gas.  This high-resolution picture also shows clearly that the Sun's surface is a bubbling carpet of separate cells of hot gas. These cells are known as granules.  A solar granule is about 1000 kilometers across and lasts for only about 15 minutes.    Your Sky Surprise: What picture did APOD feature on your birthday? (post 1995)", 
//     hdurl: "https://apod.nasa.gov/apod/image/2305/SunSpotBridge_Johnston_960.jpg", 
//     title: "Sunspot with Light Bridge"
//   }

const NasaPhoto = (props) => {
    return (
        <div className="nasa-photo-wrap">
            <h3>{props.photo.title}</h3>
            <p>{props.photo.date}</p>
            <img src={props.photo.hdurl} alt=""/>
            <p>{props.photo.explanation}</p>
        </div>    
    )
}

export default NasaPhoto;