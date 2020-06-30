import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';

const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch({
    type: 'SET_USER',
    username: user,
  }),
});

const Login = props => {
  const { addUser } = props;
  const [user, setUser] = useState('');
  const handleClick = e => {
    e.preventDefault();
    addUser(user);
    props.history.push('/auth/progress');
  };

  const onChangeHandle = e => {
    setUser(e.target.value);
  };
  return (
    <main
      className="d-flex flex-column justify-content-center p-3 bg-primary text-white"
      style={{
        height: '100vh',
      }}
    >
      <h1> awesome body tracker app </h1>
      {' '}
      <h2> Enter your name </h2>
      {' '}
      <form onSubmit={handleClick}>
        <input type="text" onChange={onChangeHandle} />

        <input
          type="submit"
          className="btn m-3 btn-outline-light"
          value="Login"
        />
      </form>
      {' '}
    </main>
  );
};

Login.defaultProps = {
  /* eslint-disable no-dupe-keys */
  history: {},
};
Login.propTypes = {
  addUser: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

export default compose(withRouter, connect(null, mapDispatchToProps))(Login);
