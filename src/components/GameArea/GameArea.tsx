import React, { useState } from 'react';
import { Game, GameButtons, BetNumber, BetButton, AddButton } from './GameAreaStyles';
import Data from '../../games.json';
import { useAppSelector } from '../../hooks/reduxhooks';
import { Games } from '../../store/gameSlice';

let currentGameRange: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 , 14 , 15, 16, 17, 18, 19, 20];

const GameArea: React.FC = () => {

    const [game, setGame] = useState<Games>({
        type: '', 
        description: '',
        range: 0,
        price: 0,
        'max-number': 0,
        color: '',
        'min-cart-value': 0
    });

    const updateGameType = (e: string) => {
        if (e === 'Lotofácil') {
            currentGameRange = [];
            setGame(Data.types[0])
            pushNumbers(Data.types[0].range);
        };

        if (e === 'Mega-Sena') {
            currentGameRange = [];
            setGame(Data.types[1])
            pushNumbers(Data.types[1].range);
        };

        if (e === 'Quina') {
            currentGameRange = [];
            setGame(Data.types[2])
            pushNumbers(Data.types[2].range);
        };
    };

    const pushNumbers = (range: number) => {
        for (let i = 1; i <= range; i++) {
            currentGameRange.push(i)
        };
        console.log(currentGameRange)
    };

    return (
        <Game>
            <h3>NEW BET FOR {game.type.toUpperCase()}</h3>
            <p>Choose a game</p>
            <GameButtons>
                {Data.types.map((button) => 
                <button 
                className={button.type}
                onClick={e => updateGameType(e.currentTarget.value)}
                value={button.type}>{button.type}</button>)}
            </GameButtons>
            <div className="descriptionArea">
                <p>Fill your bet</p>
                <p>{game.description}</p>
            </div>
            <div className="numbersArea">
                {currentGameRange.map(button => <BetNumber>{button < 10 ? `0${button}` : button}</BetNumber>)}
            </div>
            <div className="buttonsArea">
                <BetButton width="10rem" id="complete">Complete game</BetButton>
                <BetButton width="8.5rem" id="clear">Clear game</BetButton>
                <AddButton id="add">Add to cart</AddButton>
            </div>
        </Game>
    );
};

export default GameArea;