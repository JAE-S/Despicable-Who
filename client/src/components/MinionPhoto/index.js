import React from "react";
import "./style.css";

function MinionPhoto(props) {
    return (
    
        <img 
            className={`minionProfile responsive-img`}
            alt={props.name} 
            src={props.image}
            id={props.id}
            onClick={props.handleBtnClick}
        />
    
    )
}

export default MinionPhoto; 