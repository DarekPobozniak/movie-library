import fetch from 'isomorphic-fetch';
import { Fetch } from '../helpers';
import config from '../config';

/**
 * Action that requests movies
 * @type {String}
 */
export const REQUEST_MOVIES = 'REQUEST_MOVIES';

/**
 * Action that receives movie
 * @type {String}
 */
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';

/**
 * Request movies (action creator)
 * @return {Object} - Action to be dispatched
 */
function requestMovies() {
  return {
    type: REQUEST_MOVIES,
  };
}

/**
 * Receive movies (action creator)
 * @param  {Array} items - List of movies
 * @return {Object}      - Action to be dispatched
 */
function receiveMovies(items) {
  return {
    type: RECEIVE_MOVIES,
    items,
  };
}

/**
 * Fetch movies by search query and page from pagination
 * @param  {String} query - Query to search movies with
 * @param  {Number} page  - Number of page from pagination
 * @return {Promise}
 */
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
