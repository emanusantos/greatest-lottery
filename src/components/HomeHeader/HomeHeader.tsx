import React from 'react';
import { StyledHomeHeader } from './HomeHeaderStyles';
import { Link } from 'react-router-dom';

const HomeHeader = () => {
    return (
        <StyledHomeHeader>
            <h4>RECENT GAMES</h4>
            <div className="filters">
                <p>Filters</p>
                <button id="Lotofácil">Lotofácil</button>
                <button id="Mega-Sena">Mega-Sena</button>
                <button id="Quina">Quina</button>
            </div>
            <h4 id="newbet"><Link to="/bet">New Bet ➝</Link></h4>
        </StyledHomeHeader>
    );
};

export default HomeHeader;