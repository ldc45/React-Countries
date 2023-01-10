import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cards from './Cards';

const Countries = () => {
    const [data, setData] = useState([]);
    const [rangeValue, setRangeValue] = useState(36);
    const [selectedRadio, setSelectedRadio]= useState("");
    const radios = ["Africa","America", "Asia", "Europe", "Oceania"]
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
                <input 
                type="range" 
                min="1" 
                max={data.length} 
                defaultValue={rangeValue} 
                onChange={(e) =>setRangeValue(e.target.value)}
                />
                {radios.map((continent) => (
                    <li>
                        <label htmlFor={continent}>{continent}</label>
                        <input type="radio"
                         name="continentRadio"
                         checked={continent}
                          id={continent} 
                          onChange={(e) => setSelectedRadio(e.target.id)} />
                    </li>
                ))}
                
            </ul>
            {selectedRadio && <button onClick={() => setSelectedRadio("")}>Annuler la recherche</button>}
            <ul>
                {
                   data

                   .filter((country) => country.continents[0].includes(selectedRadio))
                   .sort((a,b) => b.population - a.population)
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