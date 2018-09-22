import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';

const rootUrl = 'https://reduxblog.herokuapp.com/api';
const apiKey = 'karl1423';

export function fetchPosts() {
    return {
        type: FETCH_POSTS,
        payload: axios.get(`${rootUrl}/posts?key=${apiKey}`)
    };
}

export function createPost(data, callback) {
    return {
        type: CREATE_POST,
        payload: axios.post(`${rootUrl}/posts?key=${apiKey}`, data).then(callback)
    };
}

export function fetchPost(id) {
    return {
        type: FETCH_POST,
        payload: axios.get(`${rootUrl}/posts/${id}?key=${apiKey}`)
    };
}

export function deletePost(id, callback) {
    return {
        type: DELETE_POST,
        payload: axios.delete(`${rootUrl}/posts/${id}?key=${apiKey}`).then(callback)
    };
}