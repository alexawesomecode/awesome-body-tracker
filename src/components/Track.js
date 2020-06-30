import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatCowboy } from '@fortawesome/free-solid-svg-icons';
import TopNav from './TopNav';
import Stats from './Stats';
import api from '../services/apiService';

const Track = () => {
  const [items, setItems] = useState({});
  const myDate = new Date();

  useEffect(() => {
    api('', 'get').then(r => setItems(r));
  }, []);
  return (
    <main>
      <TopNav> Track It </TopNav>
      {' '}
      <section className="container-fluid" id="container-wrapper">
        <div className="bg-light track-date">
          <span>
            {' '}
            {myDate.toDateString()}
            {' '}
          </span>
          {' '}
        </div>
        {' '}
        <div className="">
          {' '}
          <Stats />
        </div>
        {' '}
        <article className="cards-measurement d-flex flex-wrap justify-content-around">
          {Object.prototype.hasOwnProperty.call(items, 'data')
            ? items.data.map(item => (
              <Link to={`/auth/trackit/${item.name}`} key={item.name}>
                <div
                  key={item.name}
                  className="shadow item-card py-2 my-3 justify-content-around"
                >
                  <div className="item-icon">
                    <FontAwesomeIcon icon={faHatCowboy} />
                    {' '}
                  </div>
                  {' '}
                  <div className="item-information">
                    <span className="item-name">
                      {' '}
                      {item.name}
                      {' '}
                    </span>
                    <p className="item-target px-2  mr-2">
                      goal:
                      {' '}
                      {item.target}
                      {' '}
                    </p>
                    {' '}
                  </div>
                </div>
                {' '}
              </Link>
            ))
            : 'Loading'}
        </article>
      </section>
      {' '}
    </main>
  );
};

export default Track;
