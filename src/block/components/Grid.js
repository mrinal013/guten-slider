import React, { Component } from 'react';
import Card from './Card';

export default class Grid extends Component {
	render() {
		return (
			<div className="grid">
			<Card></Card>
			<Card></Card>
			<Card></Card>
			</div>
		)
	}
}