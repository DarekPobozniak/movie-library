import React from 'react';

const MovieItem = ({
  title, voteAverage, overview, poster,
}) => {
  const imagePath = poster ? `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster}` : null;
  return (
    <article className="movie-list__item">
      <div className="movie-list__item__content">
        <header className="movie-list__item__header">
          <h3 className="movie-list__item__title">{title}</h3>
          <span className="movie-list__item__vote">{voteAverage} &#9733;</span>
        </header>
        <p className="movie-list__item__description">{overview}</p>
        <footer className="movie-list__item__footer">
          <a href="#" className="button">More</a>
        </footer>
      </div>
      {imagePath &&
        <img src={imagePath} className="movie-list__item__image" alt="" width="185" height="278" />
      }
    </article>
  );
};

export default MovieItem;
