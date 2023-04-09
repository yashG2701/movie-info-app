import React from "react";

const MovieListHeading = (props) => {
  return (
    <div className="col">
      <h1 style={{ color: "white", fontSize: "1.5em", fontFamily: "Arial, sans-serif" }}>
        {props.heading}
      </h1>
    </div>
  );
};

export default MovieListHeading;
