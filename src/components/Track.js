import React, { useState, useEffect } from 'react';
import TopNav from './TopNav'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatCowboy } from '@fortawesome/free-solid-svg-icons';
const axios = require('axios');

const mapStateToProps = state => ({ items: state });

const Track = props => {
  const { items } = props;
  console.log(items);
  const myDate = new Date;
  useEffect(() => {
  //  axios.get('http://ec2-35-183-114-24.ca-central-1.compute.amazonaws.com:3001/biceps/measures').then(response => console.log(response));
  }, []);
  return (
    <div><TopNav> Track It </TopNav>
    <div className="container-fluid">
      
      <div className="bg-light track-date"> 
  <span>{myDate.toDateString()}</span></div>
      <div className="bg-success track-stats"> stats</div>
      <div className="cards-measurement d-flex justify-content-around flex-wrap">

        {items.map(item => (
          <div className="shadow item-card w-40 my-3 d-flex justify-content-around">
            
              <div className="item-icon">
            <FontAwesomeIcon icon={faHatCowboy} />
            </div>
                <div className="item-information">
                <Link to={`/trackit/${item.name}`}> <span className="item-name">{item.name}</span> </Link>
                 
                  <p className="item-target">{item.target}</p>
                </div>
             
            
          </div>
        ))}

      </div>


    </div>
    </div>
  );
};

export default connect(mapStateToProps, null)(Track);
