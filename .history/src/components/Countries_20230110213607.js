import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cards from './Cards';

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
            <ul className="radio-container">
                <input type="range" min=""/>
            </ul>
            <ul>
                {
                   data.map((country, index) => (
                  <Cards key={index} country={country}/>
                   ))
                }
            </ul>
        </div>
    );
};

export default Countries;