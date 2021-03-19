import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import './index.css';
import App from './App';

import './fonts/Roboto-Regular.ttf'
import './fonts/Roboto-Thin.ttf'
import './fonts/Roboto-Medium.ttf'
import './fonts/Roboto-Bold.ttf'
import './fonts/Roboto-Black.ttf'
import './fonts/Roboto-Light.ttf'
import './fonts/ProximaNova-Black.otf'
import './fonts/ProximaNova-Thin.otf'
import './fonts/ProximaNova-Regular.otf'
import './fonts/ProximaNova-Bold.otf'

ReactDOM.render(
  	<React.StrictMode>
    		<App />,
	</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
