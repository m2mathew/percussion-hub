'use strict';
const React = require('react');
const Table = require('material-ui/lib/table/table');
const TableBody = require('material-ui/lib/table/table-body');
const TableFooter = require('material-ui/lib/table/table-footer');
const TableHeader = require('material-ui/lib/table/table-header');
const TableHeaderColumn = require('material-ui/lib/table/table-header-column');
const TableRow = require('material-ui/lib/table/table-row');
const TableRowColumn = require('material-ui/lib/table/table-row-column');

module.exports = React.createClass({

	getInitialState() {
		return {
			fixedHeader: true,
			fixedFooter: true,
			stripedRows: true,
			showRowHover: false,
			displayRowCheckbox: false,
		};
	},

	render() {
		return (
			<div>
				<h2>Schools</h2>

				<Table
					fixedHeader={this.state.fixedHeader}
					fixedFooter={this.state.fixedFooter}>

					<TableHeader
						displayRowCheckbox={this.state.displayRowCheckbox}>
						<TableRow>
							<TableHeaderColumn
								colSpan="3"
								tooltip='Super Header'
								style={{textAlign: 'center', fontSize: '1em', color: '#000'}}>
							  Region 3 Schools
							</TableHeaderColumn>
						</TableRow>
						<TableRow>
							<TableHeaderColumn tooltip='School Name'>Name</TableHeaderColumn>
							<TableHeaderColumn tooltip='School District'>District</TableHeaderColumn>
							<TableHeaderColumn tooltip='Classification'>Classification</TableHeaderColumn>
					  </TableRow>
					</TableHeader>
					<TableBody
					  	showRowHover={this.state.showRowHover}
					  	stripedRows={this.state.stripedRows}
					  	displayRowCheckbox={this.state.displayRowCheckbox}>
						<TableRow>
							<TableRowColumn>Berkner HS</TableRowColumn>
							<TableRowColumn>Richardson ISD</TableRowColumn>
							<TableRowColumn>6A</TableRowColumn>
						</TableRow>
						<TableRow>
							<TableRowColumn>Lake Highlands HS</TableRowColumn>
							<TableRowColumn>Richardson ISD</TableRowColumn>
							<TableRowColumn>6A</TableRowColumn>
						</TableRow>
						<TableRow>
							<TableRowColumn>J.J. Pearce HS</TableRowColumn>
							<TableRowColumn>Richardson ISD</TableRowColumn>
							<TableRowColumn>6A</TableRowColumn>
						</TableRow>
						<TableRow>
							<TableRowColumn>Richardson HS</TableRowColumn>
							<TableRowColumn>Richardson ISD</TableRowColumn>
							<TableRowColumn>6A</TableRowColumn>
						</TableRow>
						<TableRow>
							<TableRowColumn>Lakeview Centennial HS</TableRowColumn>
							<TableRowColumn>Garland ISD</TableRowColumn>
							<TableRowColumn>6A</TableRowColumn>
						</TableRow>
						<TableRow>
							<TableRowColumn>Garland HS</TableRowColumn>
							<TableRowColumn>Garland ISD</TableRowColumn>
							<TableRowColumn>6A</TableRowColumn>
						</TableRow>
						<TableRow>
							<TableRowColumn>Rowlett HS</TableRowColumn>
							<TableRowColumn>Garland ISD</TableRowColumn>
							<TableRowColumn>6A</TableRowColumn>
						</TableRow>
						<TableRow>
							<TableRowColumn>Naaman Forest HS</TableRowColumn>
							<TableRowColumn>Garland ISD</TableRowColumn>
							<TableRowColumn>6A</TableRowColumn>
						</TableRow>
						<TableRow>
							<TableRowColumn>Sachse HS</TableRowColumn>
							<TableRowColumn>Garland ISD</TableRowColumn>
							<TableRowColumn>6A</TableRowColumn>
						</TableRow>
						<TableRow>
							<TableRowColumn>North Garland HS</TableRowColumn>
							<TableRowColumn>Garland ISD</TableRowColumn>
							<TableRowColumn>6A</TableRowColumn>
						</TableRow>
						<TableRow>
							<TableRowColumn>South Garland HS</TableRowColumn>
							<TableRowColumn>Garland ISD</TableRowColumn>
							<TableRowColumn>6A</TableRowColumn>
						</TableRow>
					</TableBody>
					<TableFooter>
						<TableRow>
							<TableRowColumn>Name</TableRowColumn>
							<TableRowColumn>District</TableRowColumn>
							<TableRowColumn>Classification</TableRowColumn>
						</TableRow>
						<TableRow>
							<TableRowColumn colSpan="3" style={{textAlign: 'center', fontSize: '1em', color: '#000'}}>
							  Region 3 Schools
							</TableRowColumn>
						</TableRow>
					</TableFooter>
				</Table>
			</div>
		);
	}
});

