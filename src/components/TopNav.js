import React from 'react';
const TopNav = (props) => {
    const {children } = props
    return (
        <div className="bg-primary text-white">
            <span className="top-nav-item"> {children}</span>
        </div>
    )

}

export default TopNav;