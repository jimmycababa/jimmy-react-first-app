import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Joke from './Joke';
import './index.css'
import Navbar from './Navbar';
import NorrisJoke from './NorrisJoke';



function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
          <Route path="/" exact component={Joke}/> 
          <Route path="/NorrisJoke" exact component={NorrisJoke}/> 
    </div>


    </Router>
    
  );
}

export default App;
