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
    case REQUEST_MOVIE:
      return {
        ...state,
        selected: {
          isFetching: true,
        },
      };
    case RECEIVE_MOVIE:
      return {
        ...state,
        selected: {
          ...action.item,
          isFetching: false,
        },
      };
    default:
      return state;
  }
};
