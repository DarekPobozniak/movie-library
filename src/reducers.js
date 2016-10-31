import { combineReducers } from 'redux';
import movies from './movies/reducer';
import movie from './movie/reducer';
import pagination from './pagination/reducer';

/**
 * Turns different reducing functions into a single reducing function
 */
const App = combineReducers({
  movie,
  movies,
  pagination,
});

export default App;
