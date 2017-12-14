import { combineReducers } from 'redux';
import { RETRIEVE_FRIENDS, ADD_FRIEND, UPDATE_FRIEND, DELETE_FRIEND } from "../actions";

const friendsReducer = (friends = [], action) => {
  switch (action.type) {
    case RETRIEVE_FRIENDS:
      return action.payload.data;
    case ADD_FRIEND:
      return action.payload.data;
    case UPDATE_FRIEND:
      return action.payload.data;
    case DELETE_FRIEND:
      return action.payload.data;
    default:
      return friends;
  }
};

const rootReducer = combineReducers({
  friends: friendsReducer
});

export default rootReducer;
