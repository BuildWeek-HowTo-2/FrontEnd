import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import  { store, persistor }  from './store';

{/* <PersistGate persistor={persistor}> */}
ReactDOM.render(
    <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
  );
    {/* </PersistGate> */}

