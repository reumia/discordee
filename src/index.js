import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'reset-css/_reset.scss';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
