'use client'
import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import markerpin from '../Assets/images/marker-pin.png'


function GMap({latLong,markerDraged}) {
  const center = {
    lat: latLong.lat,
    lng: latLong.lng
  };
  // const containerStyle = {
  //   width: '100%',
  //   height: '100%'
  // };
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey:"AIzaSyBDb7f5dULys3eUH6CtwlKqt6e8abwiRTY"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    //const location = {lat: 40.712, lng: 74.006};
    //setlatLong(location);
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    //const bounds = new window.google.maps.LatLngBounds(center);
    //map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  
  const onMarkerDragChange = async (e) => {        
     if (e?.latLng) {
        let lat=e?.latLng.lat();
        let lng=e?.latLng.lng();
        let location={lat: lat, lng: lng};
        //setlatLong(location);

        // let place = await geocodeByLatLng(e?.latLng)
        // if (place.length > 0) {
        //     let place=place[0];
        // }
    }
}
  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={{
          width: '100%',
          height: '100%'
        }}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
       <Marker
          key="gmap"
          icon={markerpin}
          draggable={true}                            
          onDragEnd={markerDraged}
          position={{
              lat: parseFloat(latLong.lat),
              lng: parseFloat(latLong.lng),
          }}
        >                            
        </Marker>
        
        <></>
      </GoogleMap>
      
  ) : <></>
}

export default React.memo(GMap)