import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
const TrackItCard = props => {
  console.log(props);
  const { item } = props;
  console.log(item);
  const result = [];
  const arr = Object.entries(item).map((key, value) => result.push([key, value]));

  const percentage = Math.random() * 100
  return (
    result.map(item => (
      <div className="shadow my-3 p-2 card">



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
                pathColor: `rgba(62, 152, 199, ${(Math.random() * 1000 / 100)})`,
                textColor: '#f88',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
              })}
            />;

           </span>
          <div className="flex-grow-1 d-flex justify-content-center">

            <div className="align-self-center">
              <span className="d-block card-created-at">create_at</span>
            <span className="d-block">body fat: {Math.floor(Math.random() * 10)}%</span>
            </div>
          </div>
          <span className="flex-grow-1 align-self-center track-card-md">
            {item[0][1]}
            {' '}
          </span>
        </div>


      </div>
    ))

  );
};

export default TrackItCard;
