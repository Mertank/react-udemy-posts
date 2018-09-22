import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';

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