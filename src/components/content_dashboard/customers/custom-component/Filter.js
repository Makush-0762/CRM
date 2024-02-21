import React, { useState } from 'react';
import '../../style_main/Filter.css';

export default function Filter({ customClass, selected, setSelected }) {
    const [filtOpen, setFiltOpen] = useState(false);

    function hundleOpenFilter(event) {
        setFiltOpen(!filtOpen);
    }

    const optionFilt = ['Alphabet name', 'Status', 'Newest', 'The oldest'];
    return (
        <div className={`filter ${customClass}`}>
            <div
                className="filter-btn"
                onClick={hundleOpenFilter}
            >
                <span className="filter-label">Sort by :</span>{' '}
                {selected ? selected : 'Newest'}
            </div>
            {filtOpen && (
                <div className="filter-content">
                    {optionFilt.map((option, index) => {
                        return (
                            <div
                                key={index}
                                className="filter-item"
                                onClick={() => {
                                    setSelected(option);
                                    setFiltOpen(false);
                                }}
                            >
                                {option}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
