import {
  REQUEST_MOVIE, RECEIVE_MOVIE,
} from './actions';

export default (state = {
  isFetching: false,
  item: {},
}, action) => {
  switch (action.type) {
    case REQUEST_MOVIE:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_MOVIE:
      return {
        ...state,
        item: action.item,
        isFetching: false,
      };
    default:
      return state;
  }
};
