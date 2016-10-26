import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SearchForm from '../searchForm/SearchForm';
import { fetchMovies } from './actions';

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
      <div>
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
          <ul>
            {movies.map((movie, index) =>
              <li key={index}>{movie.original_title}</li>
            )}
          </ul>
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
