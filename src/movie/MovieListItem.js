import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const MovieListItem = ({
  id, title, voteAverage, overview, poster,
}) => {
  const imagePath = poster ? `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster}` : null;
  return (
    <article className="movie-list__item">
      <div className="movie-list__item__content">
        <header className="movie-list__item__header">
          <h3 className="movie-list__item__title">
            <Link to={`/movie/${id}`}>{title}</Link>
          </h3>
          <span className="movie-list__item__vote">{voteAverage} &#9733;</span>
        </header>
        <p className="movie-list__item__description">{overview}</p>
        <footer className="movie-list__item__footer">
          <Link className="button" to={`/movie/${id}`}>More</Link>
        </footer>
      </div>
      {imagePath &&
        <Link to={`/movie/${id}`}>
          <img src={imagePath} className="movie-list__item__image" alt="" width="185" height="278" />
        </Link>
      }
    </article>
  );
};

MovieListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  voteAverage: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string,
};

export default MovieListItem;
