import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const rootUrl = 'https://reduxblog.herokuapp.com/api';
const apiKey = 'karl1423';

export function fetchPosts() {
    return {
        type: FETCH_POSTS,
        payload: axios.get(`${rootUrl}/posts?key=${apiKey}`)
    };
}