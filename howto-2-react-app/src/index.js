import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
<<<<<<< HEAD
import  { store }  from './store';
=======
import { PersistGate } from 'redux-persist/integration/react';
import  { store, persistor }  from './store';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
>>>>>>> 00738bab9b54cd7d8583935d971617f1e7cf289b


ReactDOM.render(
    <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
  );


