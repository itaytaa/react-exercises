import React, { Component } from 'react';
import './Filter.scss';

class Filter extends Component {

	constructor(props) {
		super(props);
		this.state = {
			items: [
				'Big fox',
				'Small elephant',
				'Big ant',
				'Small dinosaur',
				'Medium dog'
			],
			filtered: []
		};
	}

	
	componentDidMount() {
		this.setState({
			filtered: this.state.items
		})
	}


	search(e) {
		let arr = this.state.filtered.filter(item => item.toLowerCase().includes(e.target.value.toLowerCase()))
		this.setState({ items: arr })
	}

	render() {
		return (
			<div className="Filter">
				<p>Filter the list as you type.</p>
				<input placeholder="Search..." className="Filter__textbox" onChange={this.search.bind(this)} />
				<ul>
					{this.state.items.map((item, index) => {
						return <li key={index}>{item}</li>;
					})}
				</ul>
			</div>
		)
	}
}

export default Filter;
