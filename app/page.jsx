'use client'

import GoogleMap from '../Components/GMap'
import ImageEditorCard from '../Components/ImageEditorCard'
import MainToolCard from '../Components/MainToolCard';
import React, { useState,useEffect  } from "react"

export default function GeoTagPhoto() {
  const [imgMeta, setImgMeta] = React.useState([{}]);
  const [selectedFile, setSelectedFile] = React.useState();
  const [latLong, setlatLong] = React.useState({lat: 40.712, lng: 74.006});
  let location={lat: 40.712, lng: 74.006};
  const [mapCenter, setMapCenter] = useState({ lat: 37.7749, lng: -122.4194 });
  const mapZoom = 13;

  function setLatChange(e) {
    if(e.target.value!=''){
      location.lat=parseFloat(e.target.value);
      //setlatLong(location);
    }
  }
  function setFinalLngChange(e) {
    if(e.target.value!=''){
      location.lng=parseFloat(e.target.value);
      //setlatLong(location);
    }
  }
  function setValue(e) {
    e.preventDefault();
    setlatLong(location);
  }
  function markerDraged(e) {
    let location={lat: parseFloat(e.latLng.lat()).toFixed(4), lng: parseFloat(e.latLng.lng()).toFixed(4)};
    setlatLong(location);
  }

  return (
    <div class="bg-gray-200 px-6 py-10 ">
    <form>
      <div className="flex gap-10 md:flex-row flex-col">
        <div className="flex-1 min-h-[300px]"><GoogleMap latLong={latLong} markerDraged={markerDraged} /></div>
        <div className="flex-1"><ImageEditorCard 
        latLong={latLong} setLatChange={setLatChange} setValue={setValue} 
        setFinalLngChange={setFinalLngChange}
        />
        </div>
      </div>
      <div><MainToolCard /></div>
    </form>
    
    
    </div>
  )
}

