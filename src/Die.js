import { click } from "@testing-library/user-event/dist/click"
import React from "react"

export default function Die(props) {

 const styles = {
        backgroundColor: props.isHeld ? "#ffff00" : "white"
    }

    return (
        <div className="die-item" style={styles} onClick={props.holdDice}>
            <h2 className="die-num">{props.value}</h2>
      
        </div>
    )
}