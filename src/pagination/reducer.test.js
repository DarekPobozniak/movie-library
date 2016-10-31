import { expect } from 'chai';
import { SET_ACTIVE_PAGE } from './actions';
import reducer from './reducer';

describe('pagination reducer', () => {
  it('should return initial state', () => {
    expect(
      reducer(undefined, {})
    ).to.deep.equal(
      {
        activePage: 1,
      }
    );
  });

  it('should handle SET_ACTIVE_PAGE', () => {
    expect(
      reducer(
        {
          activePage: 2,
        },
        {
          type: SET_ACTIVE_PAGE,
          page: 4,
        })
    ).to.deep.equal(
      {
        activePage: 4,
      }
    );
  });
});
