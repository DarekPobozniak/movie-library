/*import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { expect } from 'chai';
import {
  REQUEST_MOVIES,
  RECEIVE_MOVIES,
  fetchMovies,
} from './actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('movies async actions', () => {
  it('creates RECEIVE_MOVIES when fetching movies has been done', () => {
    const expectedActions = [
      { type: REQUEST_MOVIES },
      { type: RECEIVE_MOVIES, items: { } },
    ];

    const store = mockStore({ todos: [] });

    return store.dispatch(fetchMovies('rocky'))
      .then(() => {
        const actions = store.getActions();

        expect(actions[1].type)
          .to.deep.equal(expectedActions[1].type);

        expect(actions[1].items).to.have.property('page')
          .that.is.a('number');

        expect(actions[1].items).to.have.property('total_results')
          .that.is.a('number');

        expect(actions[1].items).to.have.property('total_pages')
          .that.is.a('number');

        expect(actions[1].items).to.have.property('results')
          .that.is.a('array');
      });
  });
});
*/
