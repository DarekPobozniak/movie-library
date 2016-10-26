import { Fetch } from '../helpers';

/*
 * Action types
 */
export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';

function requestMovies() {
  return {
    type: REQUEST_MOVIES,
  };
}

function receiveMovies(items) {
  return {
    type: RECEIVE_MOVIES,
    items,
  };
}

export function fetchMovies(query = '') {
  let url = 'https://api.themoviedb.org/3/search/movie?api_key=7865ca4c4fd2d00ff34dc331b1ca13b6&language=en-US';

  if (query) {
    url += `&query=${encodeURIComponent(query)}`;
  }

  return (dispatch) => {
    dispatch(requestMovies());

    return fetch(url)
      .then(Fetch.checkStatus)
      .then(Fetch.parseJSON)
      .then(json => dispatch(receiveMovies(json)))
      .catch(error => Promise.reject(error));
  };
}
