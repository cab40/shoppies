import React from 'react';

const MovieListTitle = (props) => {
    return (
        <div className = 'col movie-title'>
            <h1>{props.heading}</h1>
        </div>
    );
};

export default MovieListTitle; 