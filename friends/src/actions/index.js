import axios from 'axios';

export const RETRIEVE_FRIENDS = 'RETRIEVE_FRIENDS';
export const ADD_FRIEND = 'ADD_FRIEND';
export const UPDATE_FRIEND = 'UPDATE_FRIEND';
export const DELETE_FRIEND = 'DELETE_FRIEND';

export const retrieveFriends = () => {
    // Add the code for this action
    const getUrl = 'http://localhost:5000/friends';
    const friendList = axios.get(getUrl);
    return {
        type: RETRIEVE_FRIENDS,
        payload: friendList
    };
};

export const addFriend = (friend) => {
    // Add the code for this action
    const postUrl = 'http://localhost:5000/new-friend';
    const friendList = axios.post(postUrl, friend);
    return {
        type: ADD_FRIEND,
        payload: friendList
    };
};

export const updateFriend = (friend) => {
    // Add the code for this action
    const updateUrl = 'http://localhost:5000/update-friend';
    const friendList = axios.put(updateUrl, friend);
    return {
        type: UPDATE_FRIEND,
        payload: friendList,
    };
};

export const deleteFriend = (index) => {
    // Add the code for this action
    const deleteUrl = 'http://localhost:5000/delete-friend';
    const friendList = axios.delete(deleteUrl, {data: { index }});
    return {
        type: DELETE_FRIEND,
        payload: friendList,
    };
};

