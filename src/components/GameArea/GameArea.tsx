import React, { useState } from 'react';
import Buttons from '../Buttons/Buttons';
import { Game } from './GameAreaStyles';
import Data from '../../games.json';

interface GameType {
    type: string;
    description: string;
    range: number;
    price: number;
    maxNumber: number;
    color: string;
    minCartValue: number;
}

const GameArea: React.FC = () => {

    const [games, setGames] = useState<GameType[]>([]);

    const onLoto = () => {
        
    };

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