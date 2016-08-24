export const SAVE_USER = 'SAVE_USER';
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const SELECT_USER = 'SELECT_USER';
export const ADD_USER = 'ADD_USER';

export function saveUser(user) {
  return {
    type: SAVE_USER,
    user: user
  };
}
export function addUser(user) {
  return {
    type: ADD_USER,
    user: user
  };
}

export function changePage(p) {
  return {
    type: CHANGE_PAGE,
    page: p
  };
}

export function selectUser(user) {
  return {
    type: SELECT_USER,
    user: user
  };
}
