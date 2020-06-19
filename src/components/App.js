import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Progress from './Progress';
import TrackIt from './TrackIt';
import Track from './Track';
import AddMeasure from './AddMeasure';
import NavigationBar from './NavigationBar';
import '../App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Login} />
        {' '}
        <Switch>
          <Route path="/auth/progress" component={Progress} />
          {' '}
          <Route path="/auth/trackit/:id" component={TrackIt} />
          {' '}
          <Route path="/auth/AddMeasure" component={AddMeasure} />
          {' '}
          <Route path="/auth/track" component={Track} />
        </Switch>
        {' '}
        <Route path={['/auth']} component={NavigationBar} />
        {' '}
      </Router>
    </div>
  );
}

export default App;
