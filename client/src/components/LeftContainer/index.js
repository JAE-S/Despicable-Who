import React from "react";


function LeftContainer(props) {
  const Left = {
    backgroundColor: "#D78618",
    width: "100%",
    height: "500px",
    marginTop: "5px",
    borderRadius: "10px",
    paddingRight: "0px", 
    flex: "2 1 0 "
  }

  return (
    <div style= { Left } {...props}> 
      {props.children}
      </div>
  )
}


export default LeftContainer; 