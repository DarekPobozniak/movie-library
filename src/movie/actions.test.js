import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { expect } from 'chai';
import {
  REQUEST_MOVIE,
  RECEIVE_MOVIE,
  fetchMovie,
} from './actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('movie async actions', () => {
  it('creates RECEIVE_MOVIE when fetching movie has been done', () => {
    const expectedActions = [
      { type: REQUEST_MOVIE },
      { type: RECEIVE_MOVIE, item: {} },
    ];

    const requestedMovieId = 1375;

    const store = mockStore({ todos: [] });

    return store.dispatch(fetchMovie(requestedMovieId))
      .then(() => {
        const actions = store.getActions();

        expect(actions[1].type)
          .to.deep.equal(expectedActions[1].type);

        expect(actions[1].item.id).to.be.equal(requestedMovieId);
      });
  });
});

