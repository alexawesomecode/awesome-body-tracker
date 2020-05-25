import React from 'react';


const TrackIt = () => {

    return (

        <div className="trackit d-flex flex-column">
            <div> 
                <h3>Today</h3>
                <div className="d-flex bg-light justify-content-start">
                    <span className="flex-grow-1"> logo </span>
                    <span  className="flex-grow-2"> itedsdsdsdsdsdm </span>
                    <span  className="flex-grow-1"> amount</span>
                </div>
                
           </div>
            

            <div> <h3>Yesterday</h3> </div>
            <div> <h3>Last week</h3> </div>
        </div>
    )
}

export default TrackIt;