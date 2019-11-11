import React from "react";


function LRWrapper(props) {
  const lr = {
    display: "flex", 
    flexFlow: "row wrap", 
    justifyContent: "space-around", 
    height: "500px", 
    padding: "0 60px"
  }

  return (
    <div style= { lr } {...props}> 
      {props.children}
      </div>
  )
}


export default LRWrapper; 