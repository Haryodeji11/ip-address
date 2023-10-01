import React, { Component, useState } from 'react';

import Header from './src/component/header';
import Container from './src/component/container';
 
const App = () => {
  
const [input, setInput] = useState('');
const [lat, setlat] = useState('');
const [lon, setlon] = useState('');
const [isp, setisp] = useState('');
const [city, setcity] = useState('');
const [timezone, settimezone] = useState('');

function handleSubmit (e) {
          e.preventDefault();
          console.log('Submitted input:', input);
          getUserIpAddress(input);
  }

function handleChange(e){
  setInput(e.target.value);
}

function getUserIpAddress(IP_ADDRESS){
  fetch(`http://ip-api.com/json/${IP_ADDRESS}`)
  .then(res => res.json())
  .then(data =>{
    console.log(data);
   const {lat, lon, isp, city, timezone } = data;
   setlat(lat);
   setlon(lon);
   setisp(isp);
   setcity(city);
   settimezone(timezone);
   console.log(lat, lon, isp, city, timezone);
  })
}
    
  return ( 
    <>
          <Header
          input = {input}
          onHandleSubmit = {handleSubmit}
          onHandleChange = {handleChange}
           />

         <Container
         input = {input}
         lat = {lat}
         lon = {lon}
         isp = {isp}
         city = {city}
         timezone = {timezone}
          />
         </>
   );
}
 
export default App;