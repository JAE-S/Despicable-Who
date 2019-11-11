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
  constructor(props) {
    super(props);
    this.state = {
      minions: minions,
      message: "Select a minion to begin",
      guessed: [], 
      highScore: 0, 
      score: 0
    };
 }; 

   // Shuffle the minions before the component mounts
   componentWillMount() {
    this.shuffleMinions();
  }

 handleBtnClick = event => {
   let minionID = event.target.id
  
   this.state.guessed.push(minionID); 
  console.log( this.state.guessed)
   this.shuffleMinions();

}
  // Shuffle minions on click 
  shuffleMinions = () => {
    let minionsArray = this.state.minions; 
    
    for(let i = minionsArray.length - 1; i > 0; i--){
      let randomNum = Math.floor(Math.random() * (i + 1));
      [minionsArray[i], minionsArray[randomNum]] =  [minionsArray[randomNum], minionsArray[i]]
    }
     this.setState({
       minions: minionsArray
     })
  }

  render() {
   
    return (
      
      <main>
        <Wrapper> 
          <Header/>
          <Row>
            <Col className="s5">
            <LeftSide/>
            </Col>
            <Col className="s7" style={{ marginTop: "19px"}}>
  
            {this.state.minions.map((minion, i) => (
            <MinionPhoto 
            key={i}
            id={minion.id}
            image={minion.image}
            guessed={minion.guessed}
            handleBtnClick= {this.handleBtnClick.bind(this)}
            />
          ))}
          </Col>
          </Row>
        </Wrapper>
        <AppFooter/>
      </main>
      
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