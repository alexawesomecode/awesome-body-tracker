import React, { useState, useEffect } from 'react';
import TrackItCard from './TrackItCard'


const TrackIt = () => {

    const [item, setItem] = useState('')

    useEffect(() => {
    //call api
    setItem({name: 'biceps', target: '12m', progress: [['day12', '12'],['da22', '21'], ['day12', '12']]})
}, [])
    return (

        <div className="trackit d-flex flex-column">
            <div> 
                <h3>Today</h3>
                <div className="d-flex bg-light justify-content-start">
                    <span className="flex-grow-1"> logo </span>
                    <span  className="flex-grow-2"> {item.name} </span>
                    <span  className="flex-grow-1"> 12 </span>
                </div>
                
           </div>
            

            <div> <h3>Yesterday</h3> 
            

            {item.hasOwnProperty('progress') ? <TrackItCard data={item} /> : 'Loading'}
            
            
            
            </div>
            <div> <h3>Last week</h3> </div>
        </div>
    )
}

export default TrackIt;