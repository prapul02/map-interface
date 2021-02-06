import React from "react";
import "./Layout.css"
import Interface from "./Interface"
import UserInput from "./userInput"

const Layout = (props) => {
    return (
        <div className="Layout">
            <button className="Home">Home</button>
            <props.interface/>
        </div>
    )
}

export default Layout;