import { expect } from 'chai';
import {
  REQUEST_MOVIE, RECEIVE_MOVIE,
} from './actions';
import reducer from './reducer';

describe('movie reducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      isFetching: false,
      item: {},
    };

    expect(reducer(undefined, {}))
      .to.deep.equal(initialState);
  });

  it('should handle REQUEST_MOVIE', () => {
    const initialState = {
      isFetching: false,
      item: {},

    };

    const expectedState = {
      isFetching: true,
      item: {},
    };

    expect(
      reducer(initialState, {
        type: REQUEST_MOVIE,
      })
    ).to.deep.equal(expectedState);
  });

  it('should handle RECEIVE_MOVIE', () => {
    const initialState = {
      isFetching: true,
      item: {},
    };

    const expectedState = {
      isFetching: false,
      item: {
        title: 'Rocky V',
      },
    };

    expect(
      reducer(initialState, {
        type: RECEIVE_MOVIE,
        item: {
          title: 'Rocky V',
        },
      })
    ).to.deep.equal(expectedState);
  });
});
