import React from "react";
import "./style.css";

function MinionPhoto(props) {
    return (
    
        <img 
            className={`minionProfile responsive-img right-align`}
            alt={props.name} 
            src={props.image}
            id={props.id}
            onClick={props.handleBtnClick}
        />
    
    )
}

export default MinionPhoto; 