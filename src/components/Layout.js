import React from "react";
import "./Layout.css"
import Interface from "./Interface"
import UserInput from "./userInput"

const Layout = (props) => {
    return (
        <div className="Layout">
            <button className="Home">HOME</button>
            <div className="Box">
            <label for="lname" className="Location">Location name:</label>
            <input type="text" className="lname" id="lname" name="lname"/>
            <label for="laname" className="loname">Enter Latitude:</label>
            <input type="text" id="laname" className="longname" name="loname"/>
            <label for="loname" className="loname">Enter Longitude:</label>
            <input type="text" id="loname" className="longname" name="loname"/>
            <input type="submit" className="add" value="Add"/>
                <Interface/>
            </div>
            
            <UserInput/>
        </div>
    )
}

export default Layout;