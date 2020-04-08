import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';
import App from '../src/App';
import * as serviceWorker from '../src/serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
