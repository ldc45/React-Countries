import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cards from './Cards';

const Countries = () => {
    const [data, setData] = useState([]);
    const [rangeValue, setrangeValue] = useState(36);
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
                <input type="range" min="1" max={data.length} defaultValue={rangeValue} onChange={(e) =>setrangeValue(e.target.value)}/>
            </ul>
            <ul>
                {
                   data
                   .slice(0,rangeValue)
                   .map((country, index) => (
                  <Cards key={index} country={country}/>
                   ))
                }
            </ul>
        </div>
    );
};

export default Countries;