import React from "react";


function RightContainer(props) {
  const Right = {
    marginTop: "17px", 
    flex: "3 1 0 "
  }

  return (
    <div style= { Right } {...props}> 
      {props.children}
      </div>
  )
}


export default RightContainer; 