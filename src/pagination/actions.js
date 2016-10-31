/**
 * Action that sets active page
 * @type {String}
 */
export const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';

/**
 * Sets active page (action creator)
 * @return {Object} - Action to be dispatched
 */
export function setActivePage(page) {
  return {
    type: SET_ACTIVE_PAGE,
    page,
  };
}
