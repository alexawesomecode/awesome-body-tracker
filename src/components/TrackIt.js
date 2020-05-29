import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import TrackItCard from './TrackItCard';


const TrackIt = props => {
  const [item, setItem] = useState({});
  useEffect(() => {
    // call api -> get response
    setItem({
      items: {
        25022020: '21cm', 23022020: '21cm', 22022020: '221cm', 22022020: '2cm',
      },
    });
    console.log(item);
  }, []);
  return (

    <div className="trackit d-flex flex-column">

      <div>

        {item.hasOwnProperty('items') ? <TrackItCard item={item.items} /> : 'Loading'}

      </div>
      <div>
        {' '}
        <h3>Last week</h3>
        {' '}
      </div>
    </div>
  );
};

export default TrackIt;
