import React, { useState } from 'react';
import axios from 'axios';
import TopNav from './TopNav';
import PropTypes from 'prop-types'
const AddMeasure = props => {
  const [selection, setSelection] = useState({
    bodypart_id: 1, name: 'biceps', value: '', date: '',
  });
  const handleChange = e => {
    e.preventDefault();
    const { id } = e.target;
    const { value } = e.target;
    const dict = {
      biceps: 1, triceps: 2, head: 3, wrist: 4, legs: 5, chest: 6,
    };

    if (id === 'measure-select') {
      setSelection({
        bodypart_id: dict[value], name: value, value: selection.value, date: selection.date,
      });
    }

    if (id === 'measure-input') {
      setSelection({
        bodypart_id: selection.bodypart_id, name: selection.name, value, date: selection.date,
      });
    }

    if (id === 'measure-date') {
      setSelection({
        bodypart_id: selection.bodypart_id,
        name: selection.name,
        value: selection.value,
        date: value,
      });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('https://cors-anywhere.herokuapp.com/http://www.alejandro.work:3000/bodyparts/biceps/measures',
      { headers: { 'x-requested-with': 'alex', origin: '*' }, measure: selection })
      .then(() => props.history.push('/auth/track'));
  };
  return (
    <div>
      <TopNav>Add Measure</TopNav>
      <h3 className="p-2">add a new measure </h3>
      <div className="d-flex justify-content-center my-1">

        <form onSubmit={handleSubmit} className="flex-column d-flex align-items-center">
          <h4>type:</h4>
          <select id="measure-select" onChange={handleChange}>
            <option>biceps</option>
            <option>triceps</option>
            <option>legs</option>
            <option>head</option>
            <option>chest</option>
            <option>wrist</option>

          </select>
          <h4>how much?:</h4>
          <input type="text" placeholder="add measure like: 12cm" id="measure-input" onChange={handleChange} required />
          <h4>date:</h4>
          <input type="date" id="measure-date" onChange={handleChange} required />
          <input type="submit" className="btn btn-primary" value="Add" />
        </form>
      </div>

    </div>
  );
};

AddMeasure.defaultProps = {
 /* eslint-disable no-dupe-keys */
    history: { }
}
AddMeasure.propTypes = {

    history: PropTypes.objectOf(PropTypes.any).isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    })
}
export default AddMeasure;
