import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";
import NasaPhoto from "./Components/NASAPhoto";


function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=2YnADIdDTVruy6izcd3aXSYmRGNCEXxadnfdNcSO')
      .then(res => {
        console.log(res);
        setData(res.data);
      })
      .catch(err => console.error(err))
  }, [])
 
  return (
    <div className="App">
      { data && <NasaPhoto photo={data}/> }
    </div>
  );
}

export default App;


/*
date: "2023-05-17"
explanation: "Why would a small part of the Sun appear slightly dark?  Visible is a close-up picture of sunspots, depressions on the Sun's surface that are slightly cooler and less bright than the rest of the Sun.  The Sun's complex magnetic field creates these cool regions by inhibiting hot material from entering the spots.  Sunspots can be larger than the Earth and typically last for about a week.  Part of active region AR 3297 crossing the Sun in early May, the large lower sunspot is spanned by an impressive light bridge of hot and suspended solar gas.  This high-resolution picture also shows clearly that the Sun's surface is a bubbling carpet of separate cells of hot gas. These cells are known as granules.  A solar granule is about 1000 kilometers across and lasts for only about 15 minutes.    Your Sky Surprise: What picture did APOD feature on your birthday? (post 1995)"
hdurl: "https://apod.nasa.gov/apod/image/2305/SunSpotBridge_Johnston_960.jpg"
title: "Sunspot with Light Bridge"
 */