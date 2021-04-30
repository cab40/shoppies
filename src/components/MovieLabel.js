import React from 'react';

const MovieLabel = (props) => {
    const NominatedMovie = props.nominatedMovie;
    return (
        <>
            {props.movies.map((movie, index) => ( 
                <div className = "d-flex justify-content-start m-3">
                    <div className="row">
                        <div className="col">
                            <h5 className="mt-4">{movie.Title}</h5>
                            <h6>{movie.Year}</h6>
                        </div>
                        <div 
                        onClick = {()=>props.handleNominateClick(movie)} //adds to nominated list 
                        className="overlay d-flex align-items-center justify-content-center">
                        <NominatedMovie />
                        </div>
                    </div>  
                </div>
            ))}
        </>
    );
};

export default MovieLabel;

