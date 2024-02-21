import React, { useState, useEffect } from 'react';
import './style_main/Main.css';
import TopLayer from './top-layer(serch hi)/TopLayer.js';
import Statistics from './statistics/Statistics.js';
import AllCustomers from './customers/AllCustomers.js';
import arrow from '../../images/arrow_filter.svg';
import axios from 'axios';
import Main from '../../pages/layout/Main.js';

export default function MainCustomers() {
    const [showScrollTop, setShowScrollTop] = useState(false); // Логіка по додаванню scroll to top на певній відстані від найвищої точки
    // const [dataLength, setDataLength] = useState(0);
    // console.log(dataLength);

    // useEffect(() => {
    //     //* Звертаємось до сервера
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get(
    //                 `https://api-eta-topaz-11.vercel.app/customers`
    //             );
    //             setDataLength(response.data.length);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };
    //     fetchData();
    // }, []);

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
        <Main classN="main__">
            <TopLayer />
            <Statistics />
            <AllCustomers  />
            {showScrollTop && (
                <button
                    className="main__scroll-to-top"
                    onClick={scrollToTop}
                >
                    <img
                        src={arrow}
                        alt="icon Arrow"
                        className="scroll__img"
                    />
                </button>
            )}
        </Main>
    );
}
