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
					<h2>All-Region Results</h2>
					<RaisedButton label="Default" />

					<AppBar
				  		title="Title"
           				iconClassNameRight="muidocs-icon-navigation-expand-more"
           			/>
				</div>
			</div>
		)
	}
});
