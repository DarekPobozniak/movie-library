import { expect } from 'chai';
import {
  SET_ACTIVE_PAGE,
  setActivePage,
} from './actions';

describe('pagination actions', () => {
  it('should set active page in the pagination', () => {
    const page = 2;
    const expectedAction = {
      type: SET_ACTIVE_PAGE,
      page,
    };

    expect(setActivePage(page)).to.deep.equal(expectedAction);
  });
});
