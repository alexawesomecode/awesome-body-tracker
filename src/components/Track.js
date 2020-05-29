import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
const axios = require('axios');

const mapStateToProps = state => ({ items: state });

const Track = (props) => {
    const { items } = props;
    console.log(items)
    useEffect(() => {

    axios.get('http://ec2-35-183-114-24.ca-central-1.compute.amazonaws.com:3001/biceps/measures').then(response => console.log(response))

        
    }, [])
    return (
        <div className="container-fluid">
            <div className="bg-warning"> date</div>
            <div className="bg-success"> stats</div>
            <div className="cards-measurement d-flex justify-content-around flex-wrap">

                {items.map(item => {

                    return (
                        <div className="card shadow w-40 my-3">
                            <div className="card-body">
                                <a href={`/trackit/${item.name}`}>
                                <div>{item.icon}</div>
                                <div><h2>{item.name}</h2>
                                <h1>{item.target}</h1></div>
                                </a>
                            </div>
                        </div>
                    )

                })}



            </div>


        </div>
    )

}

export default connect(mapStateToProps, null)(Track);
