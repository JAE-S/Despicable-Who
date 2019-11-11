 // Import React 
// =========================================================
import React, {Component } from 'react';

 // Components
// =========================================================
import AppFooter from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Gru from "./components/Gru";
import LRWrapper from './components/LRWrapper'
import LeftContainer from './components/LeftContainer';
import RightContainer from './components/RightContainer';
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
      status: "Select a minion to begin! Good Luck!",
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
  // Grab the id of the minion clicked
  let minionID = event.target.id
  let guessedArray = this.state.guessed.length
  let mArray = this.state.minions.length

  if (this.state.guessed.includes(minionID) && guessedArray !== mArray){
    this.gameOver();     
  } 
  else if (!this.state.guessed.includes(minionID)) {
      // Push the minion that was guessed to the guessed array 
      this.state.guessed.push(minionID); 
      // console.log( this.state.guessed)
      this.correctGuess();
  } else {
    this.wonGame();
  }
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
  // Guessed wrong image
  gameOver = () => {
    alert("GAME OVER!")
  }
  // Guessed an image correctly 
  correctGuess = () => {
  // Update score  
  let score = this.state.score + 2; 
  let highScore = score > this.state.highScore ? score : this.state.score;
    this.setState({
      highScore, 
      score,
      status: "Correct! "
    })
  }
  // Won game 
  wonGame = () => {
    alert("Congradulations, You Won!")
  }


  render() {
   
    return (
      
      <main>
        <Wrapper> 
          <Header/>
          <LRWrapper>
              <LeftContainer> 
                <Row>
                  <Col className="s5 l5"> 
                    <Gru/>
                  </Col>
        
                  <Col className="s5 l6 center-align"> 
                    <Row>
                      <h6>Welcome to the Despicable Who Memory Game!</h6>

                      <p>Can you rescue all of the minions from Gru?</p> 
                      <p> Click on each minion to earn points.</p> 
                      <p>Don’t click the same minion more than once!</p>
                      <p>{this.state.status} </p>
                    </Row>

                    <Row> 
                     <h6> Highscore: {this.state.highScore}</h6>
                     <h6> Score: {this.state.score}</h6>
                    </Row> 
                  </Col>
                  

                </Row>
              </LeftContainer> 
              <RightContainer className="right-align">
              
                {this.state.minions.map((minion, i) => (
                <MinionPhoto 
                key={i}
                id={minion.id}
                image={minion.image}
                guessed={minion.guessed}
                handleBtnClick= {this.handleBtnClick.bind(this)}
                />
              ))}
            </RightContainer>
          </LRWrapper>
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