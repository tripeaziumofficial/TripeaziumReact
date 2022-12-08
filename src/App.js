import React, { useState } from 'react';
import './App.css';
function App() {
  const [latitude,setLatitude]=useState('')
  const [longitude,setLongitude]=useState('')
  React.useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
    })
  },[])
  return (
    <div className="App">
    </div>
  );
}

export default App;
