import React from "react";
import Col from "react-materialize/lib/Col";
import Row from "react-materialize/lib/Row"
import "./style.css"

function LeftSide() {
    const leftSide =  {
        backgroundColor: "#D78618",
        width: "100%",
        height: "500px",
        marginTop: "5px",
        borderRadius: "10px",
        paddingRight: "0px", 
      }
      
return (
    <Row style={ leftSide }>
    <Col className="s6 l6 leftImage"> 
    
    </Col>
    <Col className="s6 l6" > 
    </Col>

    </Row>
)
}

export default LeftSide; 