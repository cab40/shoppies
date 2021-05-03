import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from './components/Navbar';
import './App.css';
import MovieList from './components/MovieList';
import MovieListTitle from './components/MovieListTitle';
import SearchFeature from './components/SearchFeature';
import NominateMovie from './components/Nominate';
import RemoveNominated from './components/RemoveNominated';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchName, setSearchInput] = useState('');
  const [nominated, setNominated] = useState([]);

  const getMovieInput = async (searchName) => {
    const url = `http://www.omdbapi.com/?s=${searchName}&apikey=f1ce2576`
    
    const response = await fetch(url);
    const responseJson = await response.json();
  
    if(responseJson.Search) {
      setMovies(responseJson.Search)
    }   
  };

  useEffect(() => {
    getMovieInput(searchName);
  }, [searchName]);

  const addNominatedMovie = (movie) => {
    const newNominatedList = [...nominated, movie]
    if (newNominatedList.length < 6) setNominated(newNominatedList);
  }

  const removeNominatedMovie = (movie) => {
    const newNominatedList = nominated.filter(
      (nominated) => nominated.imdbID !== movie.imdbID
    );
    setNominated(newNominatedList);
  }

  // const doesExist = (movie) => {
  //   for (let i = 0; i < nominated.length; i++) {
  //     if (nominated[i].imdbID === movie.imdbID) return true;
  //   }
  //   return false;
  // } //try putting where i call it and put in javascrip tags

  return (
    <div>
    <NavigationBar/>
    <div className = 'container-fluid movie-app'>
      <div className = 'col mt-4 mb-4'>
        <MovieListTitle heading='Movies'/>
        <SearchFeature searchName = {searchName} setSearchInput={setSearchInput}/>
      </div>
      <div className = 'row'>
        <MovieList 
          movies = {movies} 
          handleNominateClick={addNominatedMovie} 
          nominatedMovie = {NominateMovie} //button label
          //isDisabled = {doesExist}
        />
      </div>
      <div className = 'col mt-4 mb-4'>
        <MovieListTitle heading='Nominated Movies'/>
      </div>
      <div className = 'row'>
        <MovieList 
          movies = {nominated} 
          handleNominateClick={removeNominatedMovie} 
          nominatedMovie = {RemoveNominated} //button label
        />
      </div>
      </div>
      </div>
  );

};

export default App;
