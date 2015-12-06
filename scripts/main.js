'use strict';
let React = require('react');
let ReactDOM = require('react-dom');
let Backbone = require('backbone');
let Parse = require('./keys');

window.$ = require('jquery');
window.jQuery = $;

let HomeComponent = require('./components/HomeComponent');
let NavigationComponent = require('./components/NavigationComponent');

let app = document.getElementById('app');
let nav = document.getElementById('nav');

let Router = Backbone.Router.extend({
	routes: {
		'': 'home'
	},
	home: () => {
		ReactDOM.render(
			<HomeComponent />, app
		);
	}
});

let r = new Router;
Backbone.history.start();

ReactDOM.render(
	<NavigationComponent router={r} />, nav
);
