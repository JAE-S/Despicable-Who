import React from "react";

function LeftContainer(props) {
  
  const Left = {
    backgroundColor: "#D78618",
    width: "100%",
    minHeight: "200px",
    height: "500px",
    marginTop: "5px",
    marginRight: "10px",
    borderRadius: "10px",
    padding: "20px", 
    flex: "2 1 0 "
  }

  return (
    <div style= { Left } {...props}> 
      {props.children}
      </div>
  )
}

export default LeftContainer; 