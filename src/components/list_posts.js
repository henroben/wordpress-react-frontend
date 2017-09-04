import React, { Component } from 'react';
import * as Redux from 'react-redux';

import {fetchAllPosts} from './../actions';

import DisplayPost from './display_post';

class ListPosts extends Component {
    componentDidMount() {
        console.log('posts');
        this.props.fetchAllPosts();
    }
    renderPosts(posts) {
        if(posts) {
            return posts.map((post, index) => {
                return <DisplayPost post={post} index={index} key={`post${index}`} />;
            });
        }
    }
    render() {
        return (
            <div>
                <ul className="list-group">
                    {this.renderPosts(this.props.posts)}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        ...state,
        posts: state.posts.all,
    }
}

export default Redux.connect(mapStateToProps, {fetchAllPosts})(ListPosts);