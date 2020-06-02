import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const Stats = () => (

  <div className="stats-circles">

    <CircularProgressbar
      value={Math.floor(Math.random() * 100)}
      text={`${Math.floor(Math.random() * 100)}%`}
      styles={buildStyles({
        rotation: 0.25,
        strokeLinecap: 'butt',
        textSize: '8px',
        pathTransitionDuration: 0.5,
        pathColor: 'orange',
        textColor: '#f88',
        trailColor: '#d6d6d6',
        backgroundColor: '#3e98c7',
      })}
    />
    <CircularProgressbar
      value={Math.floor(Math.random() * 100)}
      text={`${Math.floor(Math.random() * 100)}%`}
      styles={buildStyles({
        rotation: 0.25,
        strokeLinecap: 'butt',
        textSize: '8px',
        pathTransitionDuration: 0.5,
        pathColor: 'blue',
        textColor: '#f88',
        trailColor: '#d6d6d6',
        backgroundColor: '#3e98c7',
      })}
    />
    <CircularProgressbar
      value={Math.floor(Math.random() * 100)}
      text={`${Math.floor(Math.random() * 100)}%`}
      styles={buildStyles({
        rotation: 0.25,
        strokeLinecap: 'butt',
        textSize: '8px',
        pathTransitionDuration: 0.5,
        pathColor: 'deeppink',
        textColor: '#f88',
        trailColor: '#d6d6d6',
        backgroundColor: '#3e98c7',
      })}
    />
    ;
  </div>
);

export default Stats;
