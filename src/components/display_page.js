import React, { Component } from 'react';
import * as Redux from 'react-redux';
import striptags from 'striptags';

import { fetchPage } from './../actions';

class DisplayPage extends Component {
	componentDidMount() {
		this.props.fetchPage(this.props.params.id);
	}
	componentWillReceiveProps(nextProps) {
		if (parseInt(this.props.page.id) !== parseInt(nextProps.params.id)) {
			this.props.fetchPage(nextProps.params.id);
		} else {
			return;
		}
	}
	showFeaturedImage(images) {
		return images.map(image => {
			if (image.page === this.props.page.id) {
                // Set the featured image as the background image
				document.getElementById('htmlBackground').setAttribute(
					'style',
					`background: url("${image.imageURL}") no-repeat center center fixed;
                        background-size: cover;`
				);
			} else {
			    // no featured image, so remove any styles set
                // document.getElementById('htmlBackground').removeAttribute('style');
            }
		});
	}
	render() {
		if (this.props.page.hasOwnProperty('title')) {
			this.showFeaturedImage(this.props.images);
			return (
				<div className="col-xs-12">
					<div className="col-xs-1" />
					<div className="col-xs-10">
						<div className="panel panel-default">
							<div className="panel-heading">
								{this.props.page.title.rendered}
							</div>
							<div
								className="panel-body"
								dangerouslySetInnerHTML={{
									__html: this.props.page.content.rendered
								}}
							/>
						</div>
					</div>
					<div className="col-xs-1" />
				</div>
			);
		} else {
			return (
				<div className="col-xs-12" style={{ marginTop: '20%' }}>
					<div className="col-xs-5" />
					<div className="col-xs-2">
						<div className="loader">Loading...</div>
					</div>
					<div className="col-xs-5" />
				</div>
			);
		}
	}
}

function mapStateToProps(state) {
	console.log('current', state.pages.current);
	return {
		...state,
		page: state.pages.current,
		images: state.pages.images
	};
}

export default Redux.connect(mapStateToProps, { fetchPage })(DisplayPage);
