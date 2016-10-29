import { combineReducers } from 'redux';
import movies from './movie/reducer';
import pagination from './pagination/reducer';

const App = combineReducers({
  movies,
  pagination,
});

export default App;
