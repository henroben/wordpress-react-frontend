import React, { Component } from 'react';
import * as Redux from 'react-redux';

import SideNavigationMenu from './side_navigation_menu';

class App extends Component {

	render() {
		return (
			<div>
				<SideNavigationMenu />
				{this.props.children}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		...state
	};
}

export default Redux.connect(mapStateToProps, {})(App);
