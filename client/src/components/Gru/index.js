import React from "react";
import gru from "./gru_t.png";

function Gru() {
   const gruStyle = {
      maxWidth: "200px",
      width: "124%", 
    }
      
    return (

        <img alt="gru" 
            src={ gru }
            style= {gruStyle} 
        />
    )
}

export default Gru; 