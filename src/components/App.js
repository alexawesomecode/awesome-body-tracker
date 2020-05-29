import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login'
import Progress from './Progress'
import TrackIt from './TrackIt'
import Track from './Track'
import AddMeasure from './AddMeasure'
import NavigationBar from './NavigationBar'
import '../App.css';

function App() {
  return (
    
    <div className="App">
      <Router>
       <Switch>
       <Route path="/progress" component={Progress} />
       <Route path="/trackit/:id" component={TrackIt}/>
       <Route path="/AddMeasure" component={AddMeasure}/>
       <Route path="/track" component={Track}/>
        <Route exact path="/" component={Login} />
        
      </Switch>
      <NavigationBar />
      </Router>
      
    </div>
    
  );
}

export default App;
