import React, { Component } from 'react';
import './Weather.scss';

class Weather extends Component {

	constructor(props) {
		super(props)
		this.state = {
			hottestDay: 0,
			coldestDay: 0,
			hottestTemp: 0,
			coldestTemp: 0
		}
	}
	componentDidMount() {
		fetch('https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json')
			.then(res => res.json())
			.then((days) => this.getDays(days))
	}

	getDays(days) {
		let hottestTemp = -Infinity
		let coldestTemp = Infinity
		let idxHot = 0;
		let idxCold = 0;
		days.forEach((day, index) => {
			if (day.temperature > hottestTemp) {
				hottestTemp = day.temperature
				idxHot = index
			}
			if (day.temperature < coldestTemp) {
				coldestTemp = day.temperature
				idxCold = index
			}
		});

		this.setState({
			hottest: days[idxHot].day,
			coldest: days[idxCold].day,
			hottestTemp,
			coldestTemp
		})
	}




	render() {
		return (
			<div className="Weather">
				<p>
					Use the following API to display the hottest and coldest days:<br />
					<code>https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json</code>
				</p>
				<div className="Weather__stats">
					<strong>Hottest day is: {this.state.hottest} with {this.state.hottestTemp} Degrees</strong>
				</div>
				<div className="Weather__stats">
					<strong>Coldest day is: {this.state.coldest} with {this.state.coldestTemp} Degrees</strong>
				</div>
			</div>
		)
	}
}

export default Weather;
