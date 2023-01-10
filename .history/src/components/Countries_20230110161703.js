import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Countries = () => {
    const [data, setData] = useState([])
    // Le useEffect se joue lorsque le composant est appelé
    //Callback def ?
    useEffect(()=>{
        axios
        .get("https://restcountries.com/v3.1/all")
        .then((res => setData(res.Data));
    }, [])
    return (
        <div className='countries'>
            <h1>Countries</h1>
        </div>
    );
};

export default Countries;