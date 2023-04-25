import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import First from '../Questions/First';
import Second from '../Questions/Second';
import Third from '../Questions/Third';
import Fourth from '../Questions/Fourth';
import Review from '../Review/Review';
import Completion from '../Completion/Completion';
function App() {

  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    </div>
    <Route exact path = '/'>
      <First />
    </Route>
    <Route exact path = '/second-question'>
      <Second />
    </Route>
    <Route exact path = '/third-question'>
      <Third />
    </Route>
    <Route exact path = '/fourth-question'>
      <Fourth />
    </Route>
    <Route exact path = '/review'>
      <Review />
    </Route>
    <Route exact path ='/completed'>
      <Completion />
    </Route>
   </Router>
  );
}

export default App;
