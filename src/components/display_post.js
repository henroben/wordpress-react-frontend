import React, { Component } from 'react';
import * as Redux from 'react-redux';
import striptags from 'striptags';

import {getImage} from './../actions';

class DisplayPost extends Component {
    showImage(images) {
        return images.map((image) => {
            console.log('image', image);
            if(image.post === this.props.post.id) {
                console.log('image found for', this.props.post.id);
                console.warn(`image is ${image.post}`);
                return <img src={image.imageURL} alt="" key={`image${image.id}`} />;
            }
        });
    }
    render() {
        console.log(`Display post for ${this.props.post.title.rendered}`);
        return(
            <a key={this.props.index} href="#" className="list-group-item">
                <h4 className="list-group-item-heading">
                    {this.props.post.title.rendered}
                </h4>
                <p className="list-group-item-text">{striptags(this.props.post.excerpt.rendered)}</p>
                {this.showImage(this.props.images)}
            </a>
        )
    }
}

function mapStateToProps(state) {
    return {
        ...state,
        images: state.posts.images
    }
}

export default Redux.connect(mapStateToProps, {getImage})(DisplayPost);