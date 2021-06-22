// import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactNotification from 'react-notifications-component'
import App from './App';
import * as serviceWorker from './serviceWorker';

export default function NextIndexWrapper() {
  return (
    <React.StrictMode>
        <ReactNotification />
        <App />
    </React.StrictMode>
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
