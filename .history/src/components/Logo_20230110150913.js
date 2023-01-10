import React from 'react';

const Logo = () => {
    return (
        <div className='logo'>
            {/* LEs images importées depuis la balise img sont accessible dans le dossier "public" du coup le chemin n'est pas ../ */}
            <img src="" alt="logo react" />
            <h3>React Countries</h3>
        </div>
    );
};

export default Logo;