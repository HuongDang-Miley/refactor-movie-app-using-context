import React, {useContext} from "react";
import SearchList from "./SearchList";
import './Search.css'
import {MovieContext} from '../context/MovieContext'

// old code from Pak
// const Search = ({ searchValue, fetchMovieListAPI, movieResults, isFetching }) => {
const Search = () => {
  const { searchValue, fetchMovieListAPI, movieResults, isFetching } = useContext(MovieContext)
  return (
    <div className='search'>
      <input
        value={searchValue}
        onChange={(e) => fetchMovieListAPI(e.target.value)}
        type="text"
      />
      {searchValue !== "" && isFetching && (
        <SearchList movieResults={movieResults} />
      )}
      {/* { searchValue !== "" ? <SearchList movieResults={movieResults} /> : ""} */}
      {/* {searchValue !== "" && <SearchList movieResults={movieResults} />} */}
    </div>
  );
};

export default Search;
