import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const ProgressBar = ({value, path, text, trail}) => {
    console.log(value, trail, text, path)
    return (
        
        <CircularProgressbar
        className="my-3"
        value={value}
        text={value + '%'} 
        styles={buildStyles({
          rotation: 0.25,
          strokeLinecap: 'butt',
          textSize: '7px',
          pathTransitionDuration: 0.5,
          pathColor: `${path}`,
          textColor: `${text}`,
          trailColor: `${trail}`,
          backgroundColor: '#3e98c7',
        })}
      />
        
    )

}

export default ProgressBar;