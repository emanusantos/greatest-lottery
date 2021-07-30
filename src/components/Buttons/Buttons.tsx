import React from 'react';
import { GameButtons } from './ButtonsStyles';


const Buttons: React.FC = (props) => {
    return (
        <GameButtons>
            <button id="Lotofácil">Lotofácil</button>
            <button id="Mega-Sena">Mega-Sena</button>
            <button id="Quina">Quina</button>
        </GameButtons>
    );
};

export default Buttons;