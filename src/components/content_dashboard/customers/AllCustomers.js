import React, { useEffect, useState } from 'react';
import CustTitle from './custom-component/CustTitle';
import ActionCustomers from './custom-component/ActionCustomers.js';
import '../style_main/Main.css';
import TableCust from './custom-component/TableCust.js';
import axios from 'axios';

export default function AllCustomers({dataLength}) {
    const [inputValue, setInputValue] = useState(''); // ! Дані які введені в search input
    const [filterFetch, setFilterFetch] = useState(); // ! Значення фільтра
    const [currentPage, setCurrentPage] = useState(1); // Пагінація, сторінка
    const [itemsPerPage, setItemsPerPage] = useState(8); // ! Сторінка для пагінації
    const [searchResults, setSearchResults] = useState({}); // ! Результат того що прийшло із сервера
    const [loading, setLoading] = useState(false); // ! Якщо повільний інет показуємо спінер
    // const [dataLength, setDataLength] = useState(null);
    
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    console.log(inputValue);
    console.log(searchResults)
    console.log('dataLength: __ '+dataLength)
    // ${
    //     filterFetch ? `_sort=${filterFetch}` : ''
    //     }${inputValue ? `&q=${inputValue}` : ''}
    useEffect(() => {
        const fetchSearchResults = async () => {

            setLoading(true);

            try {
                const response = await axios.get(
                    `https://api-eta-topaz-11.vercel.app/customers?${
                        filterFetch ? `_sort=${filterFetch}` : ''
                        }${inputValue ? `&q=${inputValue}` : ''}&_start=${
                        (currentPage - 1) * itemsPerPage
                        }&_end=${currentPage * itemsPerPage}`
                );
                setSearchResults(response.data);
                // setDataLength(response.data.length)
            } catch (error) {
                console.error('Error fetching search results:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchSearchResults();
    }, [inputValue]);


    return (
        <div className="allCust__" >
            <div className="allCust__top-layer" >
                <CustTitle
                    title="All Customers"
                    subTitle="Active Members"
                />
                <ActionCustomers handleChange={handleChange} />
            </div>
            <TableCust searchResults={searchResults} dataLength={dataLength} />
        </div>
    );
}
