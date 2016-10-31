import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './app/App';
import MovieList from './movies/MovieList';
import Movie from './movie/Movie';
import NotFound from './notFound/NotFound';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MovieList} />
    <Route path="movies(/:query)" component={MovieList} />
    <Route path="movies(/:query)(/:page)" component={MovieList} />
    <Route path="movie/:id" component={Movie} />
    <Route path="*" component={NotFound} />
  </Route>
);
