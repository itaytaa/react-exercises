import React, { Component } from 'react';
import './SmartParagraph.scss';

class SmartParagraph extends Component {

	constructor(props) {
		super(props);
		this.state = {
			text: 'I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of great explorers.',
			copy: '',
			isfullyShown: true

		};
	}
	componentDidMount() {
		let newText = []
		const splited = this.state.text.split(' ')
		let count = 0;
		splited.forEach(word => {
			count += word.length
			if (count <= 100) {
				newText.push(word)
				console.log(count)  // maximun 97 characters without cutting words
			} else {
				return
			}
		})
		newText = newText.join(' ')
		this.setState({
			copy: newText 
		})

	}

	toggle() {
		this.setState({ isfullyShown: !this.state.isfullyShown })
	}

	render() {
		return (
			<div className="SmartParagraph">
				<p className="SmartParagraph__explanation">
					When clicking on "Toggle" button,
					the following paragraph should display only 100 characters.
					The challenge is cutting between words!
					Clicking again should show all of the text back.
				</p>
				<p className="SmartParagraph__value">
					{this.state.isfullyShown ? this.state.text : this.state.copy}
				</p>
				<button onClick={this.toggle.bind(this)}>Toggle</button>
			</div>
		)
	}
}

export default SmartParagraph;
