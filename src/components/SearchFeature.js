import React from 'react';

const SearchFeature = (props) => {
    return (
        <div className="col col-sm-4">
            <input className="form-control"
            value = {props.value}
            onChange = {(event) => props.setSearchInput(event.target.value)}
            placeholder="Type movie title...">
            </input>
        </div>
    );
};

export default SearchFeature;

