import {
  REQUEST_MOVIES, RECEIVE_MOVIES,
} from './actions';

export default (state = {
  isFetching: false,
  items: [],
}, action) => {
  switch (action.type) {
    case REQUEST_MOVIES:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_MOVIES:
      return {
        ...state,
        isFetching: false,
        items: action.items,
      };
    default:
      return state;
  }
};
