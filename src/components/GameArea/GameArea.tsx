import React from 'react';
import Buttons from '../Buttons';
import { Game } from './GameAreaStyles';
import Data from '../../games.json';

const GameArea: React.FC = () => {

    return (
        <Game>
            <h3>NEW BET FOR MEGA-SENA</h3>
            <p>Choose a game</p>
            <Buttons />
            <div className="descriptionArea">
                <p>Fill your bet</p>
                {Data.types.map(desc => <p>{desc.description}</p>)}
            </div>
        </Game>
    );
};

export default GameArea;