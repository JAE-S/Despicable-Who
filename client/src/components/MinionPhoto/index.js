import React from "react";
import "./style.css";

function MinionPhoto(props) {
    return (
    
        <img className="minionProfile" alt={props.name} src={props.image} />
    
    )
}

export default MinionPhoto; 