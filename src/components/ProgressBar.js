import React from 'react';
import PropTypes from 'prop-types';
import {
    CircularProgressbar,
    buildStyles
} from 'react-circular-progressbar';

const ProgressBar = ({
    value,
    path,
    text,
    trail,
}) => (

    <
    CircularProgressbar className = "my-3"
    value = {
        value
    }
    text = {
        `${value}%`
    }
    styles = {
        buildStyles({
            rotation: 0.25,
            strokeLinecap: 'butt',
            textSize: '9px',
            pathTransitionDuration: 0.5,
            pathColor: `${path}`,
            textColor: `${text}`,
            trailColor: `${trail}`,
            backgroundColor: '#3e98c7',
        })
    }
    />

);

ProgressBar.propTypes = {

    value: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    trail: PropTypes.string.isRequired,


};

export default ProgressBar;
