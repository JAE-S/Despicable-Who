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
import MinionPhoto from "./components/MinionPhoto"
import StatusUpdate from './components/StatusUpdate'

 // CSS & Materialize 
// =========================================================
import {Row, Col, Container, Modal, Button} from "react-materialize";
import './App.css';

 // Import JSON
// =========================================================
import minions from "./minions.json"

 // Set state & Export App 
// =========================================================
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      minions: minions,
      status: "Select a minion to begin!",
      guessed: [], 
      turn: true,
      highScore: 0, 
      score: 0,
     gameOver: true,
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
      this.lostGame();     
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
  // Guessed an image correctly 
  correctGuess = () => {
  // Update score  
  let score = this.state.score + 2; 
  let highScore = score > this.state.highScore ? score : this.state.highScore;
    this.setState({
      highScore, 
      score,
      status: "Correct!",
      gameOver: false,
    })
  }
  
  // Won game 
  wonGame = () => {
    alert("Congradulations, You Won!")
    this.setState({
      status: "Congradulations, You Won!",
      gameOver: true
    })
    this.resetGame()
  }
  // Guessed wrong image
  lostGame = () => {
    alert("Game OVER!")
    this.setState({
      status: "GAME OVER!",
      gameOver: true,
    })
    this.resetGame()
  }
  // Function to reset the game state
  resetGame = () => {
    this.setState({
        status: "Select a minion to begin! Good Luck!",
       guessed: [],
         score: 0,
         gameOver: false
    });
  }

  render() {
   const welcome = {
     color: "#263182", 
     fontWeight: "bold",
     letterSpacing: "1px"
   }
    return (
      
      <main>

        <Wrapper> 
          <Header/>
          <LRWrapper>
              <LeftContainer> 
                
                <Row style={{marginBottom: "0px"}}>
                  <Col className="s5 l5"> 
                    <Gru/>
                  </Col>
        
                  <Col className="s5 l7 center-align" style={{ paddingLeft: "30px", position: "relative"}}> 
                    
                    <Row>
                      <h5 style={ welcome }>Welcome to the Despicable Who Memory Game!</h5>
                      <p style={{color: "#f7f7f7"}}>Rescue the minions from Gru!</p> 
                      <p style={{color: "#f7f7f7"}}> Click on each minion to earn points.</p> 
                      <p style={{color: "#f7f7f7"}}>Don’t click the same minion more than once!</p>
                    </Row>

                    <Row className="center-align" style={{ marginBottom: "0px", color: "#263182", fontWeight: "bold"}}>
                      {this.state.status}
                    </Row>
                  </Col>

                </Row>
                <Row>
                  <StatusUpdate>
                    <Col className="s6 l6 left-align">
                      <h5 style={{ fontSize: "1.5em"}}> High Score: {this.state.highScore}</h5>
                    </Col>

                    <Col className="s6 l6 right-align">
                      <h5 style={{ fontSize: "1.5em"}}> Current Score: {this.state.score}</h5>
                    </Col>              
                  </StatusUpdate>
                </Row>
                
              </LeftContainer> 
              <RightContainer className="right-align rightContainer">
              
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
