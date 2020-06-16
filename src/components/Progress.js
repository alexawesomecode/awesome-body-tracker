import React, {useState, useEffect} from 'react';
import api from '../services/apiService'
import ProgressBar from './ProgressBar'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({username: state.username})

const Progress = ({username}) => {
  
  const [progress, setProgress] = useState('');
  const [lastRecord, setLastRecord] = useState('');

  useEffect(() => {
    api('/1/progress/', 'get').then(r => setProgress(r.data))
    api('/triceps/measures/', 'get').then(r => r.data).then(r => setLastRecord(r[0].value))  
  }, []);
  
  const percentage = Math.random() * 100;
  return (
    <div className="container flex-column">
      <h2 className="p-2">Hello {username}</h2>
      <div className="justify-content-center  bg-light p-2 my-2" id="pounds-lost">

      <ProgressBar value={progress} path='orange' text='#f88' trail='blue' />

    
      <h4 className="p-2 m-3">
          {' '}
         
          Biceps progression: {progress}%
          {' '}
          
        </h4>

      </div>

      <div className="justify-content-center align-items-center d-flex bg-light p-2 my-2" id="pounds-to-lose">

      <ProgressBar value={lastRecord} path='blue' text='black' trail='deeppink' />

        <h4 className="ml-3">last triceps record: {lastRecord}cm</h4>
      </div>

      <div className="container bg-light p-2 my-2" id="pounds-box">
        <div className="row justify-content-around my-2">
          <div className="flex-column col-xs-6">
            <p>Mass</p>
            <h3 className="text-success">33</h3>
            <h4>daily</h4>
          </div>

          <div className="flex-column col-xs-6">
            <p>Fat Burn</p>
            <h3 className="text-success">21.2%</h3>
            <h4>22.2</h4>
          </div>
        </div>

        <div className="row justify-content-around my-2">
          <div className="flex-column col-xs-6">
            <p>Mass to bone</p>
            <h3 className="text-success">1.42</h3>
            <h4>mg/s</h4>
          </div>

          <div className="flex-column col-xs-6">
            <p>Inches</p>
            <h3 className="text-danger">33cm</h3>
            <h4>cmor/cm</h4>
          </div>
        </div>

      </div>

    </div>
  );
};
export default connect(mapStateToProps, null)(Progress);
