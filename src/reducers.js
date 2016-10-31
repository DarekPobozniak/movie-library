import { combineReducers } from 'redux';
import movies from './movies/reducer';
import movie from './movie/reducer';
import pagination from './pagination/reducer';

const App = combineReducers({
  movie,
  movies,
  pagination,
});

export default App;
