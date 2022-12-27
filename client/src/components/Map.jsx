import React, { useEffect } from 'react'
import { MapContainer, Marker, Popup, TileLayer,useMap } from 'react-leaflet'
import { Icon } from 'leaflet'

const Cafe = new Icon({
  iconUrl:'https://cdn-icons-png.flaticon.com/512/3307/3307695.png',
  iconSize: [30,30]
})
const College = new Icon({
  iconUrl:'https://cdn-icons-png.flaticon.com/512/5193/5193797.png',
  iconSize: [35,35]
})
const Map = ({college,types}) => {
  const RecenterAutomatically = ({lat,lng}) => {
    const map = useMap();
     useEffect(() => {
       map.setView([lat, lng]);
     }, [lat, lng]);
     return null;
   }
  return (
    <div className='container mapBox'>
    <MapContainer  center={[college.latitude,college.longitude]} zoom={25} scrollWheelZoom={false}>
    <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[college.latitude,college.longitude]}
    icon={College}>
    <Popup 
        position={[college.latitude,college.longitude]}
      >
      <div>
        <h1>{college.Name}</h1>
      </div>
      </Popup>
      </Marker>
      <RecenterAutomatically lat={college.latitude} lng={college.longitude} />
      {types.length!==0&&types.map((type)=>{
      if(type.college===college.name){
        return (
          <Marker 
          key={type.id}
          position={[type.latitude,type.longitude]}
          icon={Cafe} >
            <Popup
     position={[type.latitude,type.longitude]}
    >
    <div>
      <h1>{type.name}</h1>
    </div>
    </Popup>
          </Marker>
        )
      }
      return null
    })}
    </MapContainer>
    </div>
  )
}

export default Map
