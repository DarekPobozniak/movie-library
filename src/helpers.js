/**
 * Defines a custom response handler for window.fetch
 * @type {Object}
 */
export const Fetch = {
  /**
   * Rejects Promise on HTTP non-2xx error statuses
   * @param  {object} response Contains: type, url, useFinalURL, status, ok, statusText, headers
   * @return {object}          Response object or an error object
   */
  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    }

    return Promise.reject(new Error(`${response.statusText} (${response.status})`));
  },

  /**
   * Converts the raw data to JavaScript object
   * @param  {object} response Response object
   * @return {object}          JSON object
   */
  parseJSON(response) {
    return response.json();
  },
};
