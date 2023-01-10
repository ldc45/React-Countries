import React from 'react';

const Cards = ({country}) => {
  return (
    <li className='card'>
      <img src={country.flags.svg} alt={"Drapeau " + country.translations.fra.common} />
     <div className='infos'>
      <h2>{}</h2>
      <h4>{country.capital}</h4>
     </div>
    </li>
  );
};

export default Cards;