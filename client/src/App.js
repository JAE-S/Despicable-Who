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
   minions
 }; 

 chosenMinion = id => {
   const minions = this.state.mionions.filter(minion => minion.id !== id);
   this.state({ minions })
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
            chosenMinion = {this.chosenMinion}
            id={minion.id}
            key={minion.id}
            image={minion.image}
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