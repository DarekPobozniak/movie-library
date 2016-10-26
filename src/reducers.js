import { combineReducers } from 'redux';
import movies from './movie/reducer';

const App = combineReducers({
  movies,
});

export default App;
