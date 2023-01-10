import React from 'react';

const Cards = ({country}) => {
  return (
    <li className='card'>
      <img src={country.flags.svg} alt={"Drapeau " + country.translations.fra.common} />
     <div className='infos'>
      <h2>Nom du pays</h2>
      <h4>cou</h4>
     </div>
    </li>
  );
};

export default Cards;