import React, { useEffect, useRef, useState } from "react"
import "./Interface.css"
import mapboxgl from "mapbox-gl"
import UserInput from "./userInput"

const Interface = () => {

    mapboxgl.accessToken = 'pk.eyJ1IjoicHJhcHVsMDIiLCJhIjoiY2trdGY2dXB6MG1ueDJ2cGxha25xcW84ayJ9.hOe6WZWmXxyNH6iJPDvXMQ'

    const interfaceRef = useRef(null)

    const [longitude, setLongitude] = useState(0)
    const [latitude, setLatitude] = useState(0)

    

    navigator.geolocation.getCurrentPosition(successPosition, errorPosition, {
        enableHighAccuracy:true
    })

    function successPosition(position){
        console.log(position)
        console.log(position.coords)
            setLongitude(position.coords.longitude)
            setLatitude(position.coords.latitude)
    }

    function errorPosition(){
        setLongitude(20.1234)
        setLatitude(15.1234)
        
    }

    useEffect(() => {
        const map = new mapboxgl.Map({
        container: interfaceRef.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [latitude, longitude]
        })

        map.on("move", () => {
            setLongitude(map.getCenter().longitude);
            setLatitude(map.getCenter().latitude);
          });

        return () => map.remove()  
    }, [])

    

    return(
        <div>
             <div className="Interface" ref={interfaceRef}/>
             <UserInput successPosition={successPosition}/>
        </div>
    )
}

export default Interface;