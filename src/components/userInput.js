import React, { Fragment } from "react"

const userInput = (props) => {
    return(
        <Fragment>
        <input onChange={(event)=>props.successPosition(event.target.value)}   />
        </Fragment>
    )

}

export default userInput;