import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Icon } from 'leaflet'

const Cafe = new Icon({
  iconUrl:'/cafes.svg',
  iconSize: [30,30]
})
const College = new Icon({
  iconUrl:'/college.svg',
  iconSize: [50,50]
})
const Map = ({college,types}) => {
  return (
    <div>
    <MapContainer  center={[college.latitude,college.longitude]} zoom={11} scrollWheelZoom={false}>
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
      {types.length!==0&&types.map((type)=>{
      if(type.targettingCollege===college.Name){
        return (
          <Marker 
          key={type.Id}
          position={[type.latitude,type.longitude]}
          icon={Cafe} >
            <Popup
     position={[type.latitude,type.longitude]}
    >
    <div>
      <h1>{type.Name}</h1>
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