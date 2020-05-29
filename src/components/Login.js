import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { SET_USER } from '../actions/index';

const mapDispatchToProps = dispatch => ({

  addUser: user => dispatch(SET_USER),

});

const Login = props => {
  const { addUser } = props;

  const handleClick = e => {
    const user = e.target.value;
    return addUser(user);
  };

  return (

    <div className="w-50 h-50 m-auto d-flex flex-column p-3 bg-primary text-white">
      <h1> awesome body tracker app </h1>
      <h2>Enter your email</h2>
      <form onSubmit={() => console.log('from submit')}>
        <input type="text" />
        <Link to="/track">
          <input type="submit" className="btn btn-outline-light" />
          Login

        </Link>
      </form>
    </div>

  );
};

export default connect(null, mapDispatchToProps)(Login);
