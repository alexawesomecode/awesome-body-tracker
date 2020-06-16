import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const TrackItCard = props => {
  const { item } = props;


  return (
    item.map(item => (
      <div className="shadow my-3 p-2 card" key={`${item.created_at}"`}>


        <div className="d-flex justify-content-start">
          <span className="flex-grow-1 align-self-center card-icon">


            <CircularProgressbar
              value={Math.floor(Math.random() * 100)}
              text={`${Math.floor(Math.random() * 100)}%`}
              styles={buildStyles({
                rotation: 0.25,
                strokeLinecap: 'butt',
                textSize: '8px',
                pathTransitionDuration: 0.5,
                pathColor: 'blue',
                textColor: '#f88',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
              })}
            />

          </span>
          <div className="flex-grow-1 d-flex justify-content-center">

            <div className="align-self-center">
              <span className="d-block card-created-at my-2">{new Date(item.created_at).toISOString().split('T')[0] }</span>
              <span className="d-block">
                body fat:
                {Math.floor(Math.random() * 10)}
                %
              </span>
            </div>
          </div>
          <span className="flex-grow-1 align-self-center track-card-md">
            {item.value} cm
            {' '}
          </span>
        </div>


      </div>
    ))

  );
};

export default TrackItCard;
