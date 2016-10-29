import { Fetch } from '../helpers';
import config from '../config';

/*
 * Action types
 */
export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';

export const REQUEST_MOVIE = 'REQUEST_MOVIE';
export const RECEIVE_MOVIE = 'RECEIVE_MOVIE';

/* Movies */

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

/* Movie */

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
