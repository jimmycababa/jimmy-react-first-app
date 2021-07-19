import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Joke from './Joke';
import './index.css'
import Navbar from './Navbar';
import NorrisJoke from './NorrisJoke';
import Home from './Home';



function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/Home" exact component={Home}/>
          <Route path="/DadJoke" exact component={Joke}/> 
          {/* <Route path="/NorrisJoke" exact component={NorrisJoke}/>   */}
          <Route path="/NorrisJoke" >
            <NorrisJoke />
          </Route>
          <Route>
            <Redirect to='/Home' />
          </Route>
        </Switch>     
    </div>
    </Router>
    
    
  );
}

export default App;
