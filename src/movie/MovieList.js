import React, { Component, PropTypes } from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { fetchMovies } from './actions';
import { setActivePage } from '../pagination/actions';
import SearchForm from '../searchForm/SearchForm';
import MovieListItem from './MovieListItem';
import Pagination from '../pagination/Pagination';

import './_styles.scss';

class MovieList extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    movies: PropTypes.arrayOf(React.PropTypes.shape),
    totalPages: PropTypes.number.isRequired,
    params: PropTypes.shape(),
  }

  componentDidMount() {
    const { dispatch, params: { query, page } } = this.props;

    if (query) {
      dispatch(fetchMovies(query, page));
    }

    if (page) {
      dispatch(setActivePage(Number(page)));
    }
  }

  handlePaginationPageChange = (pageNo) => {
    const { dispatch, params: { query } } = this.props;

    hashHistory.push(`/movies/${encodeURIComponent(query)}/${pageNo}`);
    dispatch(fetchMovies(query, pageNo));
  }

  handleSearchFormSubmit = (searchQuery) => {
    const { dispatch, params: { query } } = this.props;

    if (!query || query !== searchQuery) {
      hashHistory.push(`/movies/${encodeURIComponent(searchQuery)}`);
    }

    dispatch(setActivePage(1));
    dispatch(fetchMovies(searchQuery));
  }

  render() {
    const { isFetching, movies, totalPages } = this.props;

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
          <div>
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
            <Pagination
              onPageChange={this.handlePaginationPageChange}
              totalPages={totalPages}
            />
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    movies: state.movies.items.results || [],
    totalPages: state.movies.items.total_pages || 0,
    isFetching: state.movies.isFetching,
  }
);

export default connect(mapStateToProps)(MovieList);
