'use strict';
const React = require('react');
const RaisedButton = require('material-ui/lib/raised-button');
const AppBar = require('material-ui/lib/app-bar');
const IconButton = require('material-ui/lib/icon-button');


module.exports = React.createClass({
	getInitialState() {
		return {

		};
	},
	render() {

		return (
			<div className="container home-component">
				<div className="row">
					<h3>Welcome to Percussion Hub</h3>
					<p>Find out more about your favorite percussion programs in the area!</p>
				</div>
			</div>
		)
	}
});
