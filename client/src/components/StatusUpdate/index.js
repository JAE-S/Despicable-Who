import React from "react";
import "./style.css";

function StatusUpdate(props) {
  return (
    <div
      className={"glow-on-hover scoreText"}
    
    >
      {props.children}
    </div>
  );
}

export default StatusUpdate;
