import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from './actions';
import SearchForm from '../searchForm/SearchForm';
import MovieListItem from './MovieListItem';

import './_styles.scss';

class MovieList extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    movies: PropTypes.arrayOf(React.PropTypes.shape),
  }

  handleSearchFormSubmit = (query) => {
    const { dispatch } = this.props;
    dispatch(fetchMovies(query));
  }

  render() {
    const { isFetching, movies } = this.props;

    return (
      <div className="wrapper">
        <SearchForm
          onSubmit={this.handleSearchFormSubmit}
        />

        {isFetching &&
          <p>loading...</p>
        }

        {!isFetching && movies.length === 0 &&
          <p>Use the search to find movie you like</p>
        }

        {!isFetching && movies.length > 0 &&
          <div className="movie-list">
            {movies.map((movie, index) =>
              <MovieListItem
                key={index}
                id={movie.id}
                title={movie.original_title}
                overview={movie.overview}
                voteAverage={movie.vote_average}
                poster={movie.poster_path}
              />
            )}
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    movies: state.movies.items.results || [],
    isFetching: state.movies.isFetching,
  }
);

export default connect(mapStateToProps)(MovieList);
