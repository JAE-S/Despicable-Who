 // Import React 
// =========================================================
import React, {Component } from 'react';

 // Components
// =========================================================
import AppFooter from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import LeftSide from "./components/LeftSide";
import Row from "react-materialize/lib/Row";
import Col from "react-materialize/lib/Col"
import MinionPhoto from "./components/MinionPhoto"

 // CSS
// =========================================================
import './App.css';

 // Import JSON
// =========================================================
import minions from "./minions.json"

 // Set state & Exportt App 
// =========================================================
class App extends Component {
 state = {
   minions,
   clicked: false, 
   image: "",
   score: 0, 
   highScore: 0, 
   guessedCorrectly: true, 
 }; 

 handleBtnClick = event => {
  alert("something was clicked")

  this.setState({minions: this.shuffleMinions(this.state.minions) })


  }

  shuffleMinions = minions => {
    let i = minions.length - 1; 
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1)); 
      const temp = minions[i];
      minions[i] = minions[j];
      minions[j] = temp; 
      i--; 
    }
    return minions; 
  }

  render() {
   
    return (
      
      < >
        <Wrapper> 
          <Header/>
          <Row>
            <Col className="s5">
            <LeftSide/>
            </Col>
            <Col className="s7" style={{ marginTop: "19px"}}>
  
            {this.state.minions.map(minion => (
            <MinionPhoto 
            id={minion.id}
            key={minion.id}
            image={minion.image}
            clicked={minion.clicked}
            handleBtnClick= {this.handleBtnClick}
            />
          ))}
          </Col>
          </Row>
        </Wrapper>
        <AppFooter/>
      </>
      
    );
  }
}

export default App;

// import Button from 'react-materialize/lib/Button';
// import Modal from 'react-materialize/lib/Modal';
 // const trigger = <Button>Open Modal</Button>;
//  <Modal header="Modal Header" trigger={trigger}>
//  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
// </Modal>