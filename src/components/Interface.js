import React, { useEffect, useRef, useState } from "react"
import "./Interface.css"
import mapboxgl from "mapbox-gl"
import UserInput from "./userInput"
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'

const Interface = () => {

    mapboxgl.accessToken = 'pk.eyJ1IjoicHJhcHVsMDIiLCJhIjoiY2trdGY2dXB6MG1ueDJ2cGxha25xcW84ayJ9.hOe6WZWmXxyNH6iJPDvXMQ'

    

    const interfaceRef = useRef(null)

    const [longitude, setLongitude] = useState(0)
    const [latitude, setLatitude] = useState(0)
    const [zoom, setZoom] = useState(5)

    

    navigator.geolocation.getCurrentPosition(successPosition, errorPosition, {
        enableHighAccuracy:true
    })

    function successPosition(position){
            setLongitude(position.coords.longitude)
            setLatitude(position.coords.latitude)

    }

    function errorPosition(){
        setLongitude(19.075984)
        setLatitude(72.877656)
        
    }

    useEffect(() => {
        const map = new mapboxgl.Map({
        container: interfaceRef.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [longitude, latitude],
        zoom: zoom
        })

        map.addControl(
            new MapboxDirections({
                accessToken: mapboxgl.accessToken
            }),
            'top-left'
        ).on("result", (result) => {console.log(result.place_name)})
    

        

          

        
    }, [])

    

    return(
        <div>
             <div className="Interface" ref={interfaceRef}/>
        </div>
    )
}

export default Interface;