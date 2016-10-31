import { expect } from 'chai';
import {
  REQUEST_MOVIES, RECEIVE_MOVIES,
} from './actions';
import reducer from './reducer';

describe('movies reducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      isFetching: false,
      items: [],
    };

    expect(reducer(undefined, {}))
      .to.deep.equal(initialState);
  });

  it('should handle REQUEST_MOVIES', () => {
    const initialState = {
      isFetching: false,
      items: [],

    };

    const expectedState = {
      isFetching: true,
      items: [],
    };

    expect(
      reducer(initialState, {
        type: REQUEST_MOVIES,
      })
    ).to.deep.equal(expectedState);
  });

  it('should handle RECEIVE_MOVIES', () => {
    const initialState = {
      isFetching: true,
      items: [],
    };

    const expectedState = {
      isFetching: false,
      items: [{
        title: 'Rocky V',
      }, {
        title: 'Rocky IV',
      }],
    };

    expect(
      reducer(initialState, {
        type: RECEIVE_MOVIES,
        items: [{
          title: 'Rocky V',
        }, {
          title: 'Rocky IV',
        }],
      })
    ).to.deep.equal(expectedState);
  });
});
