import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import TrackItCard from './TrackItCard';

const TrackIt = props => {
  const [item, setItem] = useState({});
  /* eslint-disable react/destructuring-assignment */

  const { id } = props.match.params;
  /* eslint-enable react/destructuring-assignment */


  useEffect(() => {
    axios.get(`https://cors-anywhere.herokuapp.com/http://www.alejandro.work:3000/bodyparts/${id}/measures/`, { headers: { 'x-requested-with': 'alex', origin: '*' } }).then(r => setItem(r));
  }, [id]);
  return (

    <div className="trackit d-flex flex-column">

      <div>

        {Object.prototype.hasOwnProperty.call(item, 'data') ? <TrackItCard item={item.data} /> : 'Loading'}

      </div>
      <div>
        {' '}

        {' '}
      </div>
    </div>
  );
};

TrackIt.defaultProps = {

  match: {},
  history: {},

};

TrackIt.propTypes = {

  /* eslint-disable no-dupe-keys */
  match: PropTypes.objectOf(PropTypes.object).isRequired,
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.any).isRequired,
  }),
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),

};
export default TrackIt;
