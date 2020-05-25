import React from 'react';

const TrackItCard = (props) => {
    console.log(props)
    const { name, progress } = props.data;
    
    
    return (
        <div>
            <h1>{name}</h1>
            {progress.map(ele => (<h2> date: {ele[0]} measure: {ele[1]} </h2>))}
        </div>
    )

}

export default TrackItCard;