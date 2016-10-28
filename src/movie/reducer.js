import {
  REQUEST_MOVIES, RECEIVE_MOVIES,
  REQUEST_MOVIE, RECEIVE_MOVIE,
} from './actions';

export default (state = {
  isFetching: false,
  items: [],
  selected: {
    isFetching: false,
  },
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
    case REQUEST_MOVIE:
      return Object.assign({}, state, {
        selected: {
          isFetching: true,
        },
      });
    case RECEIVE_MOVIE:
      return Object.assign({}, state, {
        selected: Object.assign({}, action.item, {
          isFetching: false,
          fetched: true,
        }),
      });
    default:
      return state;
  }
};
