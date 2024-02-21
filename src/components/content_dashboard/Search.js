import React from 'react';
import search from '../../images/search.svg';
import './style_main/Search.css';

export default function Search({ color, customClass, id, onInput }) {
    const colorInput = {
        backgroundColor: color,
    };
    return (
        <div className={`${color ? customClass : ''}`}>
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
                    id={id}
                    // placeholder="Search"
                    style={colorInput}
                    onInput={onInput}
                />
                <span className="search__plaseholder">Search</span>
            </form>
        </div>
    );
}
Search.defaultProps = {
    color: '#fff',
    id: 'search_input',
};
