import React from 'react';

const Cards = ({country}) => {
  return (
    <li className='card'>
      <img src={country.flags.svg} alt={"Drapeau " + country.translations.fra.common} />
     <div className='infos'>
      <h2>{country.translations.fra.common}</h2>
      <h4>{country.capital}</h4>
      <p>{country.population.to}</p>
     </div>
    </li>
  );
};

export default Cards;