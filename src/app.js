import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.component';
import 'script!jquery'
import 'script!what-input'
import 'script!foundation-sites'
$(document).foundation()
const app = document.getElementById('appComponent');
ReactDOM.render(<App/>, app); 
