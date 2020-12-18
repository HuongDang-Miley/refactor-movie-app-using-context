import React from 'react'

export const MovieDetails = ({ Title, Year, Rated, Released, Runtime, Genre, Actors, Poster, imdb }) => {
    console.log('Poster', Poster)
    return (
        <div>
            < img src={Poster} />
            <ul>
                <li>Title: {Title}</li>
                <li>Rated: {Rated}</li>
                <li>Released: {Released}</li>
                <li>Runtime: {Runtime}</li>
                <li>Genre: {Genre}</li>
                <li>Actors: {Actors}</li>
                <li><a href={`http://www.imdb.com/title/${imdb}/`} target='_blank'>Imdb Link</a></li>
            </ul>

        </div >
    )
}

export default MovieDetails