import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatCowboy } from '@fortawesome/free-solid-svg-icons';
import TopNav from './TopNav';
import Stats from './Stats.js';

const axios = require('axios');


const Track = () => {
  const [items, setItems] = useState({});
  const myDate = new Date();

  useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/http://www.alejandro.work:3000/bodyparts/', { headers: { 'x-requested-with': 'alex' } }).then(r => setItems(r));
  }, []);
  return (
    <div>
      <TopNav> Track It </TopNav>
      <div className="container-fluid" id="container-wrapper">

        <div className="bg-light track-date">
          <span>{myDate.toDateString()}</span>
        </div>
        <div className="">
          {' '}
          <Stats />
        </div>
        <div className="cards-measurement d-flex justify-content-around flex-wrap">

          {Object.prototype.hasOwnProperty.call(items, 'data') ? items.data.map(item => (

            <div key={item.name} className="shadow item-card w-40 my-3 d-flex justify-content-around">
              <Link to={`/auth/trackit/${item.name}`}>
                <div className="item-icon">
                  <FontAwesomeIcon icon={faHatCowboy} />
                </div>
                <div className="item-information">
                  <span className="item-name">{item.name}</span>

                  <p className="item-target">
                    target:
                    {item.target}
                  </p>
                </div>
              </Link>
            </div>

          )) : 'Loading'}

        </div>


      </div>
    </div>
  );
};

export default Track;
