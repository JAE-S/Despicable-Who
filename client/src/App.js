import React from 'react';
import Button from 'react-materialize/lib/Button';
import Modal from 'react-materialize/lib/Modal';

import './App.css';

function App() {
  const trigger = <Button>Open Modal</Button>;
  return (
    
    <div className="App">
      <header className="App-header">
       
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         
      <Modal header="Modal Header" trigger={trigger}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Modal>

        </a>
      </header>
    </div>
  );
}

export default App;
