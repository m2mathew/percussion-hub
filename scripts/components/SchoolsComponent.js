'use strict';
const React = require('react');
const Table = require('material-ui/lib/table/table');
const TableBody = require('material-ui/lib/table/table-body');
const TableFooter = require('material-ui/lib/table/table-footer');
const TableHeader = require('material-ui/lib/table/table-header');
const TableHeaderColumn = require('material-ui/lib/table/table-header-column');
const TableRow = require('material-ui/lib/table/table-row');
const TableRowColumn = require('material-ui/lib/table/table-row-column');
import FlatButton from 'material-ui/lib/flat-button';
import FontIcon from 'material-ui/lib/font-icon';

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
			<div className="school-container">
				<h3>Schools</h3>

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
							<TableHeaderColumn>Name</TableHeaderColumn>
							<TableHeaderColumn>District</TableHeaderColumn>
							<TableHeaderColumn>Classification</TableHeaderColumn>
							<TableHeaderColumn>Link</TableHeaderColumn>
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
							<FlatButton linkButton={true} href="http://www.berknerband.com/" secondary={true} label="Website">
							  <FontIcon style={styles.exampleFlatButtonIcon} className="muidocs-icon-custom-github" />
							</FlatButton>
						</TableRow>
						<TableRow>
							<TableRowColumn>Lake Highlands HS</TableRowColumn>
							<TableRowColumn>Richardson ISD</TableRowColumn>
							<TableRowColumn>6A</TableRowColumn>
							<TableRowColumn><a href="http://www.lhabc.org/">Website</a></TableRowColumn>
						</TableRow>
						<TableRow>
							<TableRowColumn>J.J. Pearce HS</TableRowColumn>
							<TableRowColumn>Richardson ISD</TableRowColumn>
							<TableRowColumn>6A</TableRowColumn>
							<TableRowColumn><a href="http://pearceband.org/">Website</a></TableRowColumn>
						</TableRow>
						<TableRow>
							<TableRowColumn>Richardson HS</TableRowColumn>
							<TableRowColumn>Richardson ISD</TableRowColumn>
							<TableRowColumn>6A</TableRowColumn>
							<TableRowColumn><a href="http://www.berknerband.com/">Website</a></TableRowColumn>
						</TableRow>
						<TableRow>
							<TableRowColumn>Lakeview Centennial HS</TableRowColumn>
							<TableRowColumn>Garland ISD</TableRowColumn>
							<TableRowColumn>6A</TableRowColumn>
							<TableRowColumn><a href="http://lchspatriotband.com/">Website</a></TableRowColumn>
						</TableRow>
						<TableRow>
							<TableRowColumn>Garland HS</TableRowColumn>
							<TableRowColumn>Garland ISD</TableRowColumn>
							<TableRowColumn>6A</TableRowColumn>
							<TableRowColumn><a href="http://mightyowlband.org/">Website</a></TableRowColumn>
						</TableRow>
						<TableRow>
							<TableRowColumn>Rowlett HS</TableRowColumn>
							<TableRowColumn>Garland ISD</TableRowColumn>
							<TableRowColumn>6A</TableRowColumn>
							<TableRowColumn><a href="http://www.rowlettmeb.org/">Website</a></TableRowColumn>
						</TableRow>
						<TableRow>
							<TableRowColumn>Naaman Forest HS</TableRowColumn>
							<TableRowColumn>Garland ISD</TableRowColumn>
							<TableRowColumn>6A</TableRowColumn>
							<TableRowColumn><a href="http://www.naamanforestband.com/">Website</a></TableRowColumn>
						</TableRow>
						<TableRow>
							<TableRowColumn>Sachse HS</TableRowColumn>
							<TableRowColumn>Garland ISD</TableRowColumn>
							<TableRowColumn>6A</TableRowColumn>
							<TableRowColumn><a href="http://sachseband.org/">Website</a></TableRowColumn>
						</TableRow>
						<TableRow>
							<TableRowColumn>North Garland HS</TableRowColumn>
							<TableRowColumn>Garland ISD</TableRowColumn>
							<TableRowColumn>6A</TableRowColumn>
							<TableRowColumn><a href="http://nghsband.org/">Website</a></TableRowColumn>
						</TableRow>
						<TableRow>
							<TableRowColumn>South Garland HS</TableRowColumn>
							<TableRowColumn>Garland ISD</TableRowColumn>
							<TableRowColumn>6A</TableRowColumn>
							<TableRowColumn><a href="http://www.garlandisdschools.net/page.cfm?p=86">Website</a></TableRowColumn>
						</TableRow>
						<TableRow>
							<TableRowColumn>Rockwall HS</TableRowColumn>
							<TableRowColumn>Rockwall ISD</TableRowColumn>
							<TableRowColumn>6A</TableRowColumn>
							<TableRowColumn><a href="http://www.berknerband.com/">Website</a></TableRowColumn>
						</TableRow>
						<TableRow>
							<TableRowColumn>Rockwall-Heath HS</TableRowColumn>
							<TableRowColumn>Rockwall ISD</TableRowColumn>
							<TableRowColumn>5A</TableRowColumn>
							<TableRowColumn><a href="http://www.berknerband.com/">Website</a></TableRowColumn>
						</TableRow>
						<TableRow>
							<TableRowColumn>Mesquite HS</TableRowColumn>
							<TableRowColumn>Mesquite ISD</TableRowColumn>
							<TableRowColumn>6A</TableRowColumn>
							<TableRowColumn><a href="http://www.berknerband.com/">Website</a></TableRowColumn>
						</TableRow>
						<TableRow>
							<TableRowColumn>West Mesquite HS</TableRowColumn>
							<TableRowColumn>Mesquite ISD</TableRowColumn>
							<TableRowColumn>5A</TableRowColumn>
							<TableRowColumn><a href="http://www.berknerband.com/">Website</a></TableRowColumn>
						</TableRow>
						<TableRow>
							<TableRowColumn>Poteet HS</TableRowColumn>
							<TableRowColumn>Mesquite ISD</TableRowColumn>
							<TableRowColumn>5A</TableRowColumn>
							<TableRowColumn><a href="http://www.berknerband.com/">Website</a></TableRowColumn>
						</TableRow>
						<TableRow>
							<TableRowColumn>North Mesquite HS</TableRowColumn>
							<TableRowColumn>Mesquite ISD</TableRowColumn>
							<TableRowColumn>6A</TableRowColumn>
							<TableRowColumn><a href="http://www.berknerband.com/">Website</a></TableRowColumn>
						</TableRow>
						<TableRow>
							<TableRowColumn>John Horn HS</TableRowColumn>
							<TableRowColumn>Mesquite ISD</TableRowColumn>
							<TableRowColumn>6A</TableRowColumn>
							<TableRowColumn><a href="http://www.berknerband.com/">Website</a></TableRowColumn>
						</TableRow>
						<TableRow>
							<TableRowColumn>Forney HS</TableRowColumn>
							<TableRowColumn>Forney ISD</TableRowColumn>
							<TableRowColumn>5A</TableRowColumn>
							<TableRowColumn><a href="http://www.berknerband.com/">Website</a></TableRowColumn>
						</TableRow>
						<TableRow>
							<TableRowColumn>North Forney HS</TableRowColumn>
							<TableRowColumn>Forney ISD</TableRowColumn>
							<TableRowColumn>5A</TableRowColumn>
							<TableRowColumn><a href="http://www.berknerband.com/">Website</a></TableRowColumn>
						</TableRow>
					</TableBody>
					<TableFooter>
						<TableRow>
							<TableRowColumn>Name</TableRowColumn>
							<TableRowColumn>District</TableRowColumn>
							<TableRowColumn>Classification</TableRowColumn>
							<TableRowColumn>Link</TableRowColumn>
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

