import React, { useState, useEffect } from 'react';
import '../../style_main/TableCust.css';
import axios from 'axios';
import arrow from '../../../../images/arrow_filter.svg';

export default function TableCust() {
    const [data, setData] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(8);
    const dataLength = 150;

    useEffect(() => {
        //* Звертаємось до сервера
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://api-eta-topaz-11.vercel.app/customers?_start=${
                        (currentPage - 1) * itemsPerPage
                    }&_end=${currentPage * itemsPerPage}`
                );
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [currentPage, itemsPerPage]);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < Math.ceil(dataLength / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const generatePageNumbers = () => {
        //* Створюєм пагінацію, логіка по відображенню пагінації
        const totalPages = Math.ceil(dataLength / itemsPerPage);
        const visiblePages = 4;
        const pages = [];

        if (currentPage <= visiblePages) {
            for (let i = 1; i <= Math.min(totalPages, visiblePages + 2); i++) {
                //* якщо знаходишся на 5 сторінці, то буде видно 2 наступні і попередні, прописано тут і
                pages.push(i);
            }
            if (totalPages > visiblePages + 2) {
                pages.push('...');
                pages.push(totalPages);
            }
        } else if (currentPage >= totalPages - visiblePages + 2) {
            //* тут
            pages.push(1);
            pages.push('...');
            for (
                let i = Math.max(1, totalPages - visiblePages);
                i <= totalPages;
                i++
            ) {
                pages.push(i);
            }
        } else {
            pages.push(1);
            pages.push('...');
            for (
                let i = currentPage - Math.floor(visiblePages / 2);
                i <= currentPage + Math.floor(visiblePages / 2);
                i++
            ) {
                pages.push(i);
            }
            pages.push('...');
            pages.push(totalPages);
        }

        return pages;
    };

    const pageNumbers = generatePageNumbers();

    return (
        <div className="TableCust">
            <div className="tableCust__">
                <div className="table__row-head">
                    <p className="head__item table__item">Customer Name</p>
                    <p className="head__item table__item">Company</p>
                    <p className="head__item table__item">Phone Number</p>
                    <p className="head__item table__item">Email</p>
                    <p className="head__item table__item">Country</p>
                    <p className="head__item table__item">Status</p>
                </div>
                <div className="table__body">
                    {Array.isArray(data) && //* виводим все із API
                        data.map((custom, index) => {
                            return (
                                <div
                                    className="table__rows-body"
                                    key={index}
                                >
                                    <p className="body__item table__item">
                                        {custom.name}
                                    </p>
                                    <p className="body__item table__item">
                                        {custom.company}
                                    </p>
                                    <p className="body__item table__item">
                                        {custom.phone}
                                    </p>
                                    <p className="body__item table__item">
                                        {custom.email}
                                    </p>
                                    <p className="body__item table__item">
                                        {custom.country}
                                    </p>
                                    <p className="body__item table__item ">
                                        <span
                                            className={`${
                                                custom.status > 0
                                                    ? 'item__active'
                                                    : 'item__disactive'
                                            }`}
                                        >
                                            {`${
                                                custom.status > 0
                                                    ? 'Active'
                                                    : 'Inactive'
                                            }`}
                                        </span>
                                    </p>
                                </div>
                            );
                        })}
                </div>
            </div>
            <div className="bottom__layer">
                <div className="comment__">
                    <p>Showing data 1 to 8 of 256K entries</p>
                </div>
                <div className="pagination">
                    <button onClick={handlePrevPage}>
                        <img
                            src={arrow}
                            alt="prev"
                            className="pagin__prev"
                        />
                    </button>
                    {pageNumbers.map((pageNumber, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(pageNumber)}
                            className={`pagination__button ${
                                currentPage === pageNumber
                                    ? 'pagin__active'
                                    : ''
                            }`}
                        >
                            {pageNumber === '...' ? '...' : pageNumber}
                        </button>
                    ))}
                    <button onClick={handleNextPage}>
                        <img
                            src={arrow}
                            alt="next"
                            className="pagin__next"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}
