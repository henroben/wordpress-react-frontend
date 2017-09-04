import axios from 'axios';
import * as types from './types';

const baseURL = 'http://localhost/henroben';

export function fetchSiteSettings() {
    return function (dispatch) {
        const request = `${baseURL}/wp-json/wp/v2/settings`;
        return axios.get(request).then((response) => {
            return dispatch({
                type: types.SITE_SETTINGS,
                payload: response.data
            });
        })
            .catch(function (error) {
                return dispatch({
                    type: types.ERROR,
                    payload: 'Network Error, please check your connection.'
                });
            });
    };
}

export function fetchPage(id) {
    return function (dispatch) {
        const request = `${baseURL}/wp-json/wp/v2/pages/${id}`;
        return axios.get(request).then((response) => {
            console.log('page', response.data);
            if(response.data.featured_media !== 0) {
                dispatch(getPageImage(response.data.featured_media, response.data.id));
            }
            return dispatch({
                type: types.VIEW_PAGE,
                payload: response.data
            });
        })
            .catch(function (error) {
                return dispatch({
                    type: types.ERROR,
                    payload: 'Network Error, please check your connection.'
                });
            });
    };
}

export function fetchAllPages() {
    return function (dispatch) {
        const request = `${baseURL}/wp-json/wp/v2/pages`;
        return axios.get(request).then((response) => {
            console.log('pages', response.data);
            return dispatch({
                type: types.ALL_PAGES,
                payload: response.data
            });
        })
            .catch(function (error) {
                return dispatch({
                    type: types.ERROR,
                    payload: 'Network Error, please check your connection.'
                });
            });
    };
}

export function fetchAllPosts() {
    return function (dispatch) {
        const request = `${baseURL}/wp-json/wp/v2/posts/`;
        return axios.get(request).then((response) => {
            console.log(response.data);
            response.data.map((post) => {
                if(post.featured_media) {
                    dispatch(getImage(post.featured_media, post.id));
                }
            });

            return dispatch({
                type: types.All_POSTS,
                payload: response.data
            });
        })
            .catch(function (error) {
                return dispatch({
                    type: types.ERROR,
                    payload: 'Network Error, please check your connection.'
                });
            });
    };
}

export function getImage(id, postID) {
    console.log('get image called');
    return function (dispatch) {
        const request = `${baseURL}/wp-json/wp/v2/media/${id}`;
        return axios.get(request).then((response) => {
            console.log('get image', response.data);
            return dispatch({
                type: types.SET_IMAGE,
                payload: response.data.guid.rendered,
                index: postID
            });
        });
    }
}

export function getPageImage(id, pageID) {
    console.log('get image called');
    return function (dispatch) {
        const request = `${baseURL}/wp-json/wp/v2/media/${id}`;
        return axios.get(request).then((response) => {
            console.log('get image', response.data);
            return dispatch({
                type: types.SET_PAGE_IMAGE,
                payload: response.data.guid.rendered,
                index: pageID
            });
        });
    }
}