import React from 'react'; // importing React, does the rendering

import ReactDOM from 'react-dom'; // use for dom websites, canvas, ie, iphone, android, windows..etc

import './index.css'; // add css not just in one file. has to give it location

import App from './App'; //

import * as serviceWorker from './serviceWorker'; //allows to work faster and work off line

import MyComponent from './MyComponent.js';

import 'tachyons';

//react to use app and render what is in there
ReactDOM.render(<MyComponent molotov={'hello' + 'NINjaaaa'} />, document.getElementById('root')); //i want react package to render app
//root in index html

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
