import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';
import './css/carousel.css';
import App from './components/App';
import registerServiceWorker from './components/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
