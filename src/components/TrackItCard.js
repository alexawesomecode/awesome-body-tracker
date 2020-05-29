import React from 'react';

const TrackItCard = (props) => {
    console.log(props)
    const { item } = props
    console.log(item)
    const result = []
    const arr = Object.entries(item).map((key, value) => result.push([key, value]));
console.log('items', result)
    return (
        result.map(item => {
           return ( <div className="shadow p-2 card">
                <h3>yesterday</h3>
                <div className="d-flex bg-light justify-content-start">
                    <span className="flex-grow-1"> </span>
                    <span className="flex-grow-2"> {item[0][0]} </span>
                    <span className="flex-grow-1">{item[0][1]}  </span>
                </div>
                

            </div>
           )
        })

    )

}

export default TrackItCard;