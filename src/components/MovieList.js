import React from "react";

const MovieList = (props) => {
  const favouriteComponent = props.favouriteComponent;

  const imageContainerClass = "image-container movie-poster";

  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="d-flex justify-content-between m-3">
          {props.movies.map((movie, index) => (
            <div key={index} className={imageContainerClass}>
              <img src={movie.Poster} alt="movie" />
              <div className="overlay d-flex align-items-center justify-content-center">
                <favouriteComponent />
                <div className="column m-2">
                  <h1 className="movie-title">{movie.Title}</h1>
                </div>
                <div className="column">
                  <h1 className="movie-title">{movie.Year}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default MovieList;
