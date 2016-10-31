import fetch from 'isomorphic-fetch';
import { Fetch } from '../helpers';
import config from '../config';

/**
 * Action that requests movie
 * @type {String}
 */
export const REQUEST_MOVIE = 'REQUEST_MOVIE';

/**
 * Action that receives movie
 * @type {String}
 */
export const RECEIVE_MOVIE = 'RECEIVE_MOVIE';

/**
 * Request movie by given ID (action creator)
 * @param  {String} id - Movie ID
 * @return {Object}    - Action to be dispatched
 */
function requestMovie(id) {
  return {
    type: REQUEST_MOVIE,
    id,
  };
}

/**
 * Receive movie by given ID (action creator)
 * @param  {Object} item - Movie data
 * @return {Object}      - Action to be dispatched
 */
function receiveMovie(item) {
  return {
    type: RECEIVE_MOVIE,
    item,
  };
}

/**
 * Fetch movie by given ID
 * @param  {String} movieId - Movie ID
 * @return {Promise}
 */
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
