import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Joke from './Joke';
import './index.css'
import Navbar from './Navbar';
import MomJoke from './MomJoke';



function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
          <Route path="/" exact component={Joke}/> 
          <Route path="/MomJoke" exact component={MomJoke}/> 
    </div>


    </Router>
    
  );
}

export default App;
