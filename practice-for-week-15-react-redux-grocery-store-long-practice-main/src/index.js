import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './Store/index.js';
import './index.css';
import App from './App';
import { populateProduce } from './Store/produce.js';

const store = configureStore();

function Root() {
  if (process.env.NODE_ENV !== "production") {
    window.store = store;
    window.populateProduce = populateProduce;
  }
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
