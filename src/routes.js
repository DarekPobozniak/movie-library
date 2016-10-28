import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './app/App';
import MovieList from './movie/MovieList';
import Movie from './movie/Movie';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MovieList} />
    <Route path="movies/edit/:id" component={Movie} />
  </Route>
);
