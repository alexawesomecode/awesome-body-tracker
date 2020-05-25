import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login'
import Progress from './Progress'
import TrackIt from './TrackIt'
import Track from './Track'
import '../App.css';
// <Route path="/trackit" component={TrackIt} />
       // <Route path="/addmeasure" component={AddMeasure} />
       
function App() {
  return (
    <Router>
    <div className="App">
       <Switch>
       <Route path="/progress" component={Progress} />
       <Route path="/trackit" component={TrackIt}/>
       <Route path="/track" component={Track}/>
        <Route exact path="/" component={Login} />
        
      </Switch>
    </div>
    </Router>
  );
}

export default App;
