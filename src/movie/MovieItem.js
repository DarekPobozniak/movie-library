import React, { PropTypes } from 'react';

const MovieItem = ({
  title, vote_average, overview, imagePath, releaseDate, duration, status, income,
}) => (
  <article className="movie">
    <div className="movie__content">
      <header className="movie__header">
        <h3 className="movie__title">{title} ({releaseDate})</h3>
        <span className="movie__vote">{vote_average} &#9733;</span>
      </header>
      <p className="movie__description">{overview}</p>
    </div>
    {imagePath &&
      <aside className="movie__imagebar">
        <img src={imagePath} className="movie__image" alt="" />
      </aside>
    }
    <aside className="movie__sidebar">
      <dl>
        <dt>Duration:</dt> <dd>{duration}</dd>
        <dt>Status:</dt> <dd>{status}</dd>
        <dt>Revenue:</dt> <dd>{income}</dd>
      </dl>
    </aside>
  </article>
);

MovieItem.propTypes = {
  title: PropTypes.string,
  overview: PropTypes.string,
  imagePath: PropTypes.string,
  status: PropTypes.string,
  releaseDate: PropTypes.number,
  duration: PropTypes.string,
  income: PropTypes.string,
  vote_average: PropTypes.number,
};

export default MovieItem;
