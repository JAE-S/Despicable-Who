 // Import React 
// =========================================================
import React from 'react';

 // Components
// =========================================================
import AppFooter from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";

 // CSS
// =========================================================
import './App.css';

 // Export App to index.js
// =========================================================
function App() {
 
  return (
    < >
     
      <Wrapper> 
        <Header/>
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