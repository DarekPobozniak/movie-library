import fetch from 'isomorphic-fetch';
import { Fetch } from '../helpers';
import config from '../config';

/*
 * Action types
 */
export const REQUEST_MOVIE = 'REQUEST_MOVIE';
export const RECEIVE_MOVIE = 'RECEIVE_MOVIE';

function requestMovie(id) {
  return {
    type: REQUEST_MOVIE,
    id,
  };
}

function receiveMovie(item) {
  return {
    type: RECEIVE_MOVIE,
    item,
  };
}

export function fetchMovie(movieId = '') {
  const url = `${config.baseUrl}/movie/${movieId}?api_key=${config.apiKey}&language=${config.language}`;

  return (dispatch) => {
    dispatch(requestMovie(movieId));

    return fetch(url)
      .then(Fetch.checkStatus)
      .then(Fetch.parseJSON)
      .then(json => dispatch(receiveMovie(json)))
      .catch(error => Promise.reject(error));
  };
}
