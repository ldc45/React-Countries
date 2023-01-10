import axios from 'axios';
import React, { useEffect } from 'react';

const Countries = () => {

    // Le useEffect se joue lorsque le composant est appelé
    //Callback def ?
    useEffect(()=>{
        axios.get("https://restcountries.com/v3.1/all").then((res => console.log(res)))
    }, [])
    return (
        <div className='countries'>
            <h1>Countries</h1>
        </div>
    );
};

export default Countries;