import React, { useState, useEffect } from 'react';
import Search from '../../Search';
import Filter from './Filter';
import axios from 'axios';
import '../../style_main/Main.css';

export default function ActionCustomers({ handleChange }) {
    const [selected, setSelected] = useState('');

    return (
        <div className="actionCustomers">
            <Search
                color={'#F9FBFF'}
                customClass="search__position"
                id="search-customers"
                onInput={handleChange}
            />
            <Filter
                customClass="filter__position"
                selected={selected}
                setSelected={setSelected}
            />
        </div>
    );
}
