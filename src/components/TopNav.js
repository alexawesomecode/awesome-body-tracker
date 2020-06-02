import React from 'react';
import PropTypes from 'prop-types';

const TopNav = props => {
  const { children } = props;
  return (
    <div className="bg-primary text-white p-2">
      <span className="top-nav-item">
        {' '}
        {children}
      </span>
    </div>
  );
};

TopNav.propTypes = {

  children: PropTypes.string.isRequired,
};

export default TopNav;
