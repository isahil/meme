import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import '../src/index.css';
import App from '../src/App';
import * as serviceWorker from '../src/serviceWorker';

ReactDOM.render(
  <BrowserRouter basename={'/src'}>
    <App exact path="/" component={App} />
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
