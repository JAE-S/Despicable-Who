import React from "react";
import "./style.css";

function MinionPhoto(props) {
    const imageSize ={
        maxWidth: "140px",
        width: "100%", 
        // flex: "1 1 0"
    }
    return (
    // <div style= { imageSize }>
        <img 
            className={`minionProfile responsive-img right-align`}
            alt={props.name} 
            src={props.image}
            id={props.id}
            onClick={props.handleBtnClick}
        />
    //    </div>
    )
}

export default MinionPhoto; 