import React from "react";


function RightContainer(props) {
  const Right = {
    marginTop: "17px", 
    flex: "3 1 0",
    // maxHeight: "500px", 
    // maxWidth: "100%",
    width: "100%",
    display: "flex", 
    // flexDirection: "column", 
    flexFlow: "row wrap",
    flexShrink: 1 
    
  }

  return (
    <div style= { Right } {...props}> 
      {props.children}
      </div>
  )
}


export default RightContainer; 