'use strict';

const React = require('react');
const Backbone = require('backbone');

module.exports = React.createClass({

	componentWillMount() {
		this.props.router.on('route', () => {
			this.forceUpdate();
		});
	},

	render() {
		let currentPage = Backbone.history.getFragment();

		let links = [
			<li key="home" className={currentPage === '' ? 'active' : ''}><a href="#">Home</a></li>,
			<li key="schools" className={currentPage === 'schools' ? 'active' : ''}><a href="#schools">Schools</a></li>,
			<li key="history" className={currentPage === 'history' ? 'active' : ''}><a href="#history">History</a></li>
		];

		return (
			<div className="nav-wrapper blue darken-4">
				<div className="brand-logo left">
					<a href="#">Percussion Hub</a>
				</div>
				<ul id="nav-mobile" className="right">
					{links}
				</ul>
			</div>
		);
	},

});
