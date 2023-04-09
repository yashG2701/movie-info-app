import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListheading";
import SearchBox from "./components/SearchBox";
import AddFavourites from "./components/AddFavourites";
import SignUp from "./components/SignUp";
import Button from "react-bootstrap/Button";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Details from "./components/Details";

const App = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showForm, setShowForm] = useState(false);

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=c8bec70`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <div className="container-fluid movie-app">
        <div className="row d-flex align-items-center mt-4 mb-4">
          <MovieListHeading heading="Movies Infomation" />
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        <div className="row">
          <MovieList movies={movies} favouriteComponent={AddFavourites} />
        </div>
      </div>
      <div>
        <Button style={{ fontSize: "0.7em" }} variant="secondary m-2 " onClick={handleClick}>
          Registration Page
        </Button>
        {showForm && <SignUp />}
      </div>
      <div>
      <Button style={{ fontSize: "0.7em" }}variant="secondary m-2" onClick={toggleLoginForm}>Log In</Button>
      {showLoginForm && <Login />}
    </div>
      <div>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Details" element={<Details />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
