import fetch from 'isomorphic-fetch';
import { Fetch } from '../helpers';
import config from '../config';

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

export function fetchMovies(query = '', page = 1) {
  let url = `${config.baseUrl}/search/movie?api_key=${config.apiKey}&language=${config.language}&page=${page}`;

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
