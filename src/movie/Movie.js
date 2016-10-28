import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchMovie } from './actions';
import MovieItem from './MovieItem';

class Movie extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }

  componentDidMount() {
    const { dispatch, params: { id } } = this.props;

    Promise.all([
      dispatch(fetchMovie(id)),
    ])
      .then(() => this.setState({ fetchingError: false }))
      .catch(() => this.setState({ fetchingError: true }));
  }

  render() {
    const { isFetching, ...rest } = this.props;

    if (isFetching) {
      return <p>loading...</p>;
    }

    return (
      <div className="wrapper">
        <MovieItem {...rest} />
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
    isFetching,
    release_date,
    runtime,
    status,
    revenue,
  } = state.movies.selected;

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
    isFetching,
    releaseDate,
    duration,
    status,
    income,
  };
};

export default connect(mapStateToProps)(Movie);
