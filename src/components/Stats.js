import React from 'react';
import ProgressBar from './ProgressBar';

const Stats = () => (

  <div className="stats-circles">

    <ProgressBar value={`${92}`} path="orange" text="#f88" trail="#d6d6d6" />
    <ProgressBar value={`${12}`} path="blue" text="#f88" trail="#d6d6d6" />
    <ProgressBar value={`${32}`} path="deeppink" text="#f88" trail="#d6d6d6" />

  </div>
);

export default Stats;
