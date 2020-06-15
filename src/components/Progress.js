import React, {useState, useEffect} from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import axios from 'axios'
import _ from 'lodash'
const Progress = () => {

  const [progress, setProgress] = useState('');
  const [lastRecord, setLastRecord] = useState('');

  useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/http://www.alejandro.work:3000/bodyparts/1/progress', { headers: { 'x-requested-with': 'alex' } }).then(r => setProgress(r.data))
    axios.get('https://cors-anywhere.herokuapp.com/http://www.alejandro.work:3000/bodyparts/2/measures', { headers: { 'x-requested-with': 'alex' } }).then(r => setLastRecord(r.data[0].value))  
  }, []);
  const percentage = Math.random() * 100;
  return (
    <div className="container flex-column">

      <div className="justify-content-center  bg-light p-2 my-2" id="pounds-lost">

        <CircularProgressbar
          className="my-3"
          value={Math.floor(Math.random() * 100)}
          text={`${Math.floor(Math.random() * 100)}%`}
          styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: 'butt',
            textSize: '7px',
            pathTransitionDuration: 0.5,
            pathColor: 'orange',
            textColor: '#f88',
            trailColor: 'blue',
            backgroundColor: '#3e98c7',
          })}
        />
        <h4 className="p-2 m-3">
          {' '}
         
          Biceps progression: {progress}%
          {' '}
          
        </h4>

      </div>

      <div className="justify-content-center align-items-center d-flex bg-light p-2 my-2" id="pounds-to-lose">

        <CircularProgressbar
          className="p-2 m-3"
          value={Math.floor(Math.random() * 100)}
          text={`${Math.floor(Math.random() * 100)}`}
          styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: 'butt',
            textSize: '12px',
            pathTransitionDuration: 0.5,
            pathColor: 'blue',
            textColor: 'black',
            trailColor: 'deeppink',
            backgroundColor: '#3e98c7',
          })}
        />
        <h4>last triceps record: {lastRecord}cm</h4>
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
export default Progress;
