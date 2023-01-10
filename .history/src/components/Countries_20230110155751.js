import React, { useEffect } from 'react';

const Countries = () => {

    // Le useEffect se joue lorsque le composant est appelé
    //Callback def ?
    useEffect(()=>{
        axios.request
    }, [])
    return (
        <div className='countries'>
            <h1>Countries</h1>
        </div>
    );
};

export default Countries;