import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Countries = () => {
    const [data, setData] = useState([]);
    // Le useEffect se joue lorsque le composant est appelé
    //Callback def ?
    useEffect(()=>{
        axios
        .get("https://restcountries.com/v3.1/all")
        .then((res) => setData(res.data));
    }, []);

    return (
        <div className='countries'>
            <h1>Countries</h1>
            <ul>
                {
                   data.map((country) => (
                   <li key={}>{country.translations.fra}</li>
                   ))
                }
            </ul>
        </div>
    );
};

export default Countries;