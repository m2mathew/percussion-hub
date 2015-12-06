'use strict';

let React = require('react');
let Backbone = require('backbone');

module.exports = React.createClass({
	componentWillMount() {
		this.props.router.on('route', () => {
			this.forceUpdate();
		});
	},
	render() {
		return (
			<div className="nav-wrapper blue darken-4">
				<h1>Navigate</h1>
			</div>
		);
	}
});
