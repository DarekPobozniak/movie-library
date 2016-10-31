import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { fetchMovie } from './actions';
import SearchForm from '../searchForm/SearchForm';
import MovieItem from './MovieItem';
import Loader from '../loader/Loader';
import Message from '../message/Message';

import './_styles.scss';

/**
 * Movie component
 */
export class Movie extends Component {
  /**
   * propTypes
   * @property {function} dispatch - path URL path
   */
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }

  /**
   * state
   * @type {Object}
   * @property {boolean} fetchingError - true if it's impossible to fetch data
   */
  state = {
    fetchingError: false,
  }

  /**
   * componentDidMount
   */
  componentDidMount() {
    const { dispatch, params: { id } } = this.props;

    Promise.all([
      dispatch(fetchMovie(id)),
    ])
      .then(() => this.setState({ fetchingError: false }))
      .catch(() => this.setState({ fetchingError: true }));
  }

  /**
   * Handle action after search form submit
   * @param  {string} searchQuery - search input's query
   */
  handleSearchFormSubmit = (searchQuery) => {
    hashHistory.replace(`/movies/${encodeURIComponent(searchQuery)}`);
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    const { isFetching, ...rest } = this.props;
    const { fetchingError } = this.state;

    if (isFetching && !fetchingError) {
      return <Loader />;
    }

    return (
      <div className="wrapper">
        <SearchForm
          onSubmit={this.handleSearchFormSubmit}
        />

        {fetchingError &&
          <Message type="alert">We couldn&apos;t find movie you were looking for :(</Message>
        }

        {!fetchingError &&
          <MovieItem {...rest} />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    title,
    original_title,
    overview,
    poster_path,
    vote_average,
    release_date,
    runtime,
    status,
    revenue,
    genres,
  } = state.movie.item;

  const imagePath = poster_path ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}` : null;
  const releaseDate = release_date ? new Date(release_date).getFullYear() : null;
  const income = revenue ? Number(revenue).toLocaleString('en-US', { style: 'currency', currency: 'USD' }) : null;
  const duration = Number(runtime) > 60 ? `${Math.floor(runtime / 60)}h ${(runtime % 60)}m` : `${runtime}m`;

  return {
    title,
    original_title,
    overview,
    imagePath,
    vote_average,
    releaseDate,
    duration,
    status,
    income,
    genres,
    isFetching: state.movie.isFetching,
  };
};

export default connect(mapStateToProps)(Movie);
