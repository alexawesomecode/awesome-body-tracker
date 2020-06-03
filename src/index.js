import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers/index';
import 'bootstrap/dist/css/bootstrap.min.css';


const initialState = [

  {
    name: 'biceps', measure: 'cm', target: '20cm', progress: { day1: '12cm', day2: '22cm' }, icon: '',
  },

];
const store = createStore(reducer, initialState);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
