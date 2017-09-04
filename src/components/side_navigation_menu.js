import React, { Component } from 'react';
import * as Redux from 'react-redux';
import { Link } from 'react-router';

import { fetchAllPages } from './../actions';

class SideNavigationMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			config: {
				menuWidth: '0px',
				menuLeft: '0px'
			}
		};
	}
	componentDidMount() {
		// Fetch list of pages for navigation
		this.props.fetchAllPages();
	}
	toggleNav() {
		if (this.state.config.menuWidth === '0px') {
			this.setState({
				config: {
					menuWidth: '250px',
					menuLeft: '250px'
				}
			});
		} else {
			this.setState({
				config: {
					menuWidth: '0px',
					menuLeft: '0px'
				}
			});
		}
	}

	renderMenuLinks(pages) {
		if (pages) {
			return pages.map(page => {
				return (
					<Link to={'/page/' + page.id} key={page.id}>
						<li className="list-group-item">
							{page.title.rendered}
						</li>
					</Link>
				);
			});
		}
	}

	render() {
		return (
			<div
				id="mySidenav"
				className="sidenav"
				style={{ width: this.state.config.menuWidth }}
			>
				<div
					id="menu"
					onClick={this.toggleNav.bind(this)}
					style={{ left: this.state.config.menuLeft }}
				>
					<i className="fa fa-bars" />
				</div>
				<div className="inner-wrapper">
					<div className="col-xs-12">
						<h3>Site Name</h3>
						<ul className="list-group">
							{this.renderMenuLinks(this.props.pages)}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	console.log(state.pages.all);
	return {
		...state,
		pages: state.pages.all
	};
}

export default Redux.connect(mapStateToProps, { fetchAllPages })(
	SideNavigationMenu
);
