 import React, { useState, useEffect } from "react";
import { useLocation, useParams } from 'react-router-dom';
import MovieDetails from './MovieDetails'
import queryString from 'query-string';

export const Movie = () => {
    const [movieDetail, setMovieDetail] = useState(null)
    const { search } = useLocation();
    console.log('search', search)
    const movie = queryString.parse(search);
    console.log('movie', movie)

    const {movieTitle} = useParams()
    console.log(movieTitle)

    async function fetchMovieDetail() {
        try {
            const MOVIE_API_KEY = process.env.REACT_APP_MOVIE_OMDB_API;
            const response = await fetch(
                `http://omdbapi.com/?apikey=${MOVIE_API_KEY}&t=${movie.title}`
            )
            const data = await response.json();
            console.log('data', data)

            data.imdb = movieTitle
            setMovieDetail(data)
        }
        catch (e) { console.log(e) }
    }

    useEffect(() => {
        fetchMovieDetail()
    }, [])

    return (
        <div>
            <MovieDetails {...movieDetail} />
        </div>
    )
}


export default Movie;
