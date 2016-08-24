import { combineReducers } from 'redux';
import {ADD_USER, SAVE_USER, CHANGE_PAGE, SELECT_USER} from './actions';
import sampleData from './sample-data';

const initialState = {
  page: 1,
  users: sampleData.users,
  selectedUser: {}
};

function page(state = 1, action) {
  switch (action.type) {
    case CHANGE_PAGE:
      return action.page;
    default:
      return state;
  }
}

function users(state = [], action) {
  switch (action.type) {
    case SAVE_USER:
      return state.map((user, index) => {
        if (user.email === action.user.email) {
          return action.user;
        }
        return user;
      });
      break;
    case ADD_USER:
      return [
        ...state,
        Object.assign({}, action.user)
      ];
      break;
    default:
      return state;
  }
}

  function selectedUser(state = {}, action) {
    switch (action.type) {
      case SELECT_USER:
        return Object.assign({}, action.user);
        break;
      default:
        return state;
    }
  }

const rankApp = combineReducers({
    page,
    users,
    selectedUser
  });

export default rankApp;
