import React, { Component } from 'react';
import './Timer.scss';

class Timer extends Component {

	constructor(props) {
		super(props)
		this.state = {
			counter: 0
		}
	}
	onPlay() {
		this.counter = setInterval(() => {
			this.setState({ counter: this.state.counter + 1 })
		}, 1000);
	}
	onPause() {
		clearInterval(this.counter)
	}
	onReset() {
		clearInterval(this.counter)
		this.setState({ counter: 0 })
	}
	componentWillUnmount() {
		clearInterval(this.counter)
	}

	render() {
		return (
			<div className="Timer">
				<h3>Timer</h3>
				<ul className="Timer__explanation">
					<li><b>Play:</b> the timer should count the seconds and keep updating</li>
					<li><b>Pause:</b> the timer freeze the timer</li>
					<li><b>Reset:</b> should set the timer to 0</li>
				</ul>
				<div className="Timer__actions">
					<button onClick={this.onPlay.bind(this)}>Play</button>
					<button onClick={this.onPause.bind(this)}>Pause</button>
					<button onClick={this.onReset.bind(this)}>Reset</button>
				</div>
				<div className="Timer__value">{this.state.counter}</div>
			</div>
		)
	}
}

export default Timer;
