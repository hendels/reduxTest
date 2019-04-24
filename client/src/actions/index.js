import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash'

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    console.log('STATE', getState().posts);
}

export const fetchPosts = () => {
    return async (dispatch, getState) => {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({type: 'FETCH_POSTS', payload: response.data});
    }
}

export const fetchUser = (id) => {
    return async (dispatch, getState) => {
        const response = await jsonPlaceholder.get(`/users/${id}`);
        dispatch({type: "FETCH_USER", payload: response.data})
    }
}

// export const fetchUser = (id) => {
//     return (dispatch, getState) => {
//         _fetchUser(id, dispatch);        
//     }
// }

// const _fetchUser = _.memoize(async(id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({type: "FETCH_USER", payload: response.data})
// });