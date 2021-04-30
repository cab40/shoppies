import React from 'react';

const MovieList = (props) => {
    const NominatedMovie = props.nominatedMovie;
    //const IsDisabled = props.isDisabled;

    return (
        <>
            {props.movies.map((movie, index) => ( 
                <div className = 'movie-card'>
                    <div className = "image-container d-flex justify-content-start m-3">
                        <div className = 'col'>
                            <img src={movie.Poster} alt={movie.Title} className = 'poster mb-4'/>
                            <div className="row">
                                <div className="col">
                                    <h6 className="movie-info mb-4">{movie.Title}</h6>
                                    <h6 className='movie-info'> {movie.Year}</h6>
                                </div>
                                <button 
                                    onClick = {()=>props.handleNominateClick(movie)} //adds to nominated list 
                                    className = 'btn btn-outline-dark btn-sm btn-format'
                                    //disabled = {IsDisabled}
                                    >
                                    <NominatedMovie />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default MovieList;

