import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const NavigationBar = () => {

    return (

        <div className="fixed-bottom bg-dark" >

            <div className="navbar nav" id="navigation-bar">
                <div> 
                    
                    <Link to="/progress" className="d-flex flex-column  align-items-center">
                    <FontAwesomeIcon icon={faCoffee} />
                    <span> Progress</span>
                    </Link>
                    
                </div>
                <div> 
                    
                    <Link to="/track" className="d-flex flex-column  align-items-center">
                    <FontAwesomeIcon icon={faCoffee} />
                    <span> Track It</span>
                    </Link>
                    
                </div>
                <div> 
                    
                    <Link to="/addmeasure" className="d-flex flex-column  align-items-center">
                    <FontAwesomeIcon icon={faCoffee} />
                    <span> Add Measure</span>
                    </Link>
                    
                </div>
                 <div> <a>...</a> </div>
            </div>

        </div>
    )

}


export default NavigationBar;