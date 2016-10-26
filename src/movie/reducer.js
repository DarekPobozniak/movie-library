import {
  REQUEST_MOVIES, RECEIVE_MOVIES,
} from './actions';

export default (state = {
  isFetching: false,
  items: [],
}, action) => {
  switch (action.type) {
    case REQUEST_MOVIES:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_MOVIES:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items,
      });
    default:
      return state;
  }
};
