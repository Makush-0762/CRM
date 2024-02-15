import React, { useState, useEffect } from 'react';
import './style_main/Main.css';
import TopLayer from './top-layer(serch hi)/TopLayer.js';
import Statistics from './statistics/Statistics.js';
import AllCustomers from './customers/AllCustomers.js';
import arrow from '../../images/arrow_filter.svg';

export default function Main() {
    const [showScrollTop, setShowScrollTop] = useState(false); // Логіка по додаванню scroll to top на певній відстані від найвищої точки

    useEffect(() => {
        const handleScroll = () => {
            const main = document.querySelector('.main__');
            if (main.scrollTop > 10) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        const main = document.querySelector('.main__');
        main.addEventListener('scroll', handleScroll);

        return () => {
            main.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        const main = document.querySelector('.main__');
        main.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="main__">
            <TopLayer />
            <Statistics />
            <AllCustomers />
            {showScrollTop && (
                <button className="main__scroll-to-top" onClick={scrollToTop}>
                    <img src={arrow} alt="icon Arrow" className="scroll__img" />
                </button>
            )}
        </div>
    );
}
