import React from 'react';


const Progress = () => (
  <div className="container bg-primary d-flex flex-column hv-100">
    <div className="row">
      <div className="col-xs-12 h-25 p-3">
        <div>
          {' '}
          you lost 24 pounds
        </div>
        <div> 21 pounds to lose</div>
      </div>
    </div>
    <div className="row">
      <div>Day 18 progress to total</div>
      <div> chart</div>
      <div className="weight-goal" />
      <div>Starting weight: 129</div>
      <div>Goal Weight: 100</div>
    </div>
    <div className="row d-flex flex-wrap">
      <div>one</div>
      <div>one</div>
      <div>one</div>
      <div>one</div>
    </div>


  </div>
);
export default Progress;
