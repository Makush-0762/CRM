import React from 'react';
import search from '../../images/search.svg';
import './style_main/Search.css';

export default function Search({ color }) {
    const colorInput = {
        backgroundColor: { color },
    };
    return (
        <form
            action=""
            className="search__form"
        >
            <img
                src={search}
                alt="icon__search"
                className="search__icon"
            />
            <input
                type="text"
                className="search__input"
                // placeholder="Search"
                style={colorInput}
            />
            <span className="search__plaseholder">Search</span>
        </form>
    );
}
Search.defaultProps = {
    color: '#fff',
};
