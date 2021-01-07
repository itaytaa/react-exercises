import React, { Component } from 'react';
import './Tasks.scss';

class Tasks extends Component {
	constructor(props) {
		super(props)
		this.state = {
			tasks: [],
			task: ''
		}

	}


	handleChange(e) {
		this.setState({
			task: e.target.value
		})
	
	}
	submit(e) {
		e.preventDefault()
		this.setState({
			tasks: [...this.state.tasks, this.state.task]
		})
		e.target.reset()
	}



	render() {
		return (
			<div className="Tasks">
				<form onSubmit={this.submit.bind(this)}>
					<h3>Tasks:</h3>
					<p>Make a Todo list (add only):</p>
					<input placeholder="Your task..." onChange={this.handleChange.bind(this)} /> <button>Add task</button>
				</form>
				<ul>
					{this.state.tasks.map((task, index) => {
						return <li key={index}>{task}</li>
					})}
				</ul>
			</div>
		)
	}
}

export default Tasks;
