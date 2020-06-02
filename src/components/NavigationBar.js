import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faAddressBook, faAsterisk } from '@fortawesome/free-solid-svg-icons';


const NavigationBar = () => (

  <div className="fixed-bottom bg-dark">

    <div className="navbar nav" id="navigation-bar">
      <div>

        <Link to="/auth/progress" className="d-flex flex-column  align-items-center">
          <FontAwesomeIcon icon={faAddressBook} />
          <span> Progress</span>
        </Link>

      </div>
      <div>

        <Link to="/auth/track" className="d-flex flex-column  align-items-center">
          <FontAwesomeIcon icon={faAsterisk} />
          <span> Track It</span>
        </Link>

      </div>
      <div>

        <Link to="/auth/addmeasure" className="d-flex flex-column  align-items-center">
          <FontAwesomeIcon icon={faCoffee} />
          <span> Add Measure</span>
        </Link>

      </div>
      <div>
        {' '}
        <a href="/progress">more</a>

        {' '}
      </div>
    </div>

  </div>
);


export default NavigationBar;
