import React, { Component } from 'react';
import './YayValidator.scss';

class YayValidator extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isYay: false
		}
	}


	onInputChange(e) {
		if (e.target.value === 'yay') {
			this.setState({ isYay: true })
		}else{
			this.setState({ isYay: false })
		}
	}


	render() {
		let background = "white"
		if (this.state.isYay) {
			background = "green"
		}
		return (
			<div className="YayValidator">
				<p>
					When the input contains the value "yay",
					change the input's background color to <span className="YayValidator__sample">green</span>:
				</p>
				<input type="text" className="text-box" onChange={this.onInputChange.bind(this)} value={this.state.input} style={{background:background}}/>
			</div>
		)
	}
}

export default YayValidator;
