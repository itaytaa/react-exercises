import React, { Component } from 'react';
import './RandomNumber.scss';

class RandomNumber extends Component {
	constructor(props) {
		super(props)
		this.state = {
			number: ''
		}
	}
	onGetRandom() {
		const num = Math.floor(Math.random() * 100) + 1;
		this.setState({number: num})
	}

	render() {
		return (
			<div className="RandomNumber">
				<p className="RandomNumber__explanation">
					When clicking on the button, make a random number (between 1-100) to appear in the box.
				</p>

				<button onClick={this.onGetRandom.bind(this)}>Generate number!</button>
				<div className="box">
					{this.state.number}
				</div>
			</div>
		)
	}
}

export default RandomNumber;
