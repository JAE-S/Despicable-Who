 // Import React 
// =========================================================
import React from 'react';

 // Components
// =========================================================
import AppFooter from "./components/Footer";
// import Header from "./components/Header";
import Wrapper from "./components/Wrapper";


 // Pages 
// =========================================================
import Game from "./pages/Game";

 // CSS
// =========================================================
import './App.css';

 // Export App to index.js
// =========================================================
function App() {
 
  return (
    < >
     
      <Wrapper> 
     
        <Game/>
      </Wrapper>
      <AppFooter/>
    </>
    
  );
}

export default App;

// import Button from 'react-materialize/lib/Button';
// import Modal from 'react-materialize/lib/Modal';
 // const trigger = <Button>Open Modal</Button>;
//  <Modal header="Modal Header" trigger={trigger}>
//  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
// </Modal>