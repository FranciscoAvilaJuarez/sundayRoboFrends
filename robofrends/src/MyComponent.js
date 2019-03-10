import React, { Component } from 'react';
import './Mycomponent.css';

class MyComponent extends Component {
	render() {
		return (
			<div className="f1 tc">
				{' '}
				<h1> hello paco </h1> // needs to use className to work properly as it is html
				<p> hello paco </p>
				<p1>{this.props.molotov}</p1> // molotov props, calling bindidng
			</div>
		);
	}
}
export default MyComponent;

//react uses jsx to develop or render
//rect compares to its dom and if there are. it will load its dom.
