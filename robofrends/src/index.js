import React from 'react'; // importing React, does the rendering

import ReactDOM from 'react-dom'; // use for dom websites, canvas, ie, iphone, android, windows..etc

import './index.css'; // add css not just in one file. has to give it location

//import App from './App'; //

import * as serviceWorker from './serviceWorker'; //allows to work faster and work off line

//import MyComponent from './myComponent/MyComponent.js/index.js';

import Card from './Card';

import 'tachyons';

import { robots } from './Robots';

import CardList from './CardList';

//react to use app and render what is in there
//molotov is the props, showing in mycomponent
ReactDOM.render(<CardList robots={robots} />, document.getElementById('root')); //i want react package to render app, root in index html

serviceWorker.unregister();
