import { SET_ACTIVE_PAGE } from './actions';

export default (state = {
  activePage: 1,
}, action) => {
  switch (action.type) {
    case SET_ACTIVE_PAGE:
      return Object.assign({}, state, {
        activePage: action.page,
      });
    default:
      return state;
  }
};
