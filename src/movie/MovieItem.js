import React, { PropTypes } from 'react';

const MovieItem = ({
  title, vote_average, overview, imagePath, releaseDate, duration, status, income, genres,
}) => (
  <article className="movie">
    <div className="movie__content-wrapper">
      <div className="movie__content">
        <header className="movie__header">
          <h1 className="movie__title">{title} ({releaseDate})</h1>
          <span className="movie__vote">&#9733; {vote_average}</span>
        </header>
        <p className="movie__description">{overview}</p>
        {genres &&
          <div>
            <h3>Genres</h3>
            <p>
              {genres.map((item, index) =>
                <span key={index} className="label">{item.name}</span>
              )}
            </p>
          </div>
        }
      </div>

      <aside className="movie__sidebar">
        <h3>Facts</h3>
        <ul>
          {duration && <li><b>Duration:</b> {duration}</li>}
          {status && <li><b>Status:</b> {status}</li>}
          {income && <li><b>Revenue:</b> {income}</li>}
        </ul>
      </aside>
    </div>

    {imagePath &&
      <aside className="movie__imagebar">
        <img src={imagePath} className="movie__image" alt="" />
      </aside>
    }
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
  genres: PropTypes.arrayOf(PropTypes.shape()),
};

export default MovieItem;
