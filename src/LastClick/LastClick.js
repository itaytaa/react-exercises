import React, { Component } from 'react';
import './LastClick.scss';

class LastClick extends Component {
	constructor(props) {
		super(props)
		this.state = {
			chosen: ''
		}
	}

	handleclick(number){
		this.setState({chosen:number})
	}

	render() {
		return (
			<div className="LastClick">
				<p>
					There are <b>3</b> buttons.<br />
					Make the box show the number of the last clicked button.
				</p>
				<div className="LastClick__buttons">
					<button onClick={this.handleclick.bind(this,1)}>1</button>
					<button onClick={this.handleclick.bind(this,2)}>2</button>
					<button onClick={this.handleclick.bind(this,3)}>3</button>
				</div>
				<div className="LastClick__box">
					{this.state.chosen}
				</div>
			</div>
		)
	}
}

export default LastClick;
