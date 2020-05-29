import React from 'react';
import TopNav from './TopNav'


const AddMeasure = () => (
  <div>
    <TopNav>Add Measure</TopNav>
    <div clasName="container-fluid">

      <h2>add measure for biceps</h2>
      <input type="number" />
      <button className="btn btn-primary">Add</button>
    </div>

  </div>
);

export default AddMeasure;
