import React, { useState } from 'react';
import { Game, GameButtons, BetButton, AddButton } from './GameAreaStyles';
import SelectedNumbers from '../SelectedNumber/SelectedNumber';
import Data from '../../games.json';
import { useAppSelector } from '../../hooks/reduxhooks';
import { Games } from '../../store/gameSlice';

let currentGameRange: number[] = [];

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

    const [choseNumbers, setChoseNumbers] = useState<any>()

    const updateGameType = (e: string) => {
        if (e === game.type) {
            return;
        };

        if (e === 'Lotofácil') {
            currentGameRange = [];
            setGame(Data.types[0])
            pushNumbers(Data.types[0].range);
            setChoseNumbers([])
        };

        if (e === 'Mega-Sena') {
            currentGameRange = [];
            setGame(Data.types[1])
            pushNumbers(Data.types[1].range);
            setChoseNumbers([])
        };

        if (e === 'Quina') {
            currentGameRange = [];
            setGame(Data.types[2])
            pushNumbers(Data.types[2].range);
            setChoseNumbers([])
        };
    };

    const pushNumbers = (range: number) => {
        for (let i = 1; i <= range; i++) {
            currentGameRange.push(i)
        };
        console.log(currentGameRange);
    };

    const selectNumber = (event: any): void => {
        const numberSelected = Number(event.currentTarget.dataset.number);

        if (numberAlreadyExists(choseNumbers, numberSelected)) {
            const array = removeNumber(choseNumbers, numberSelected);
            return setChoseNumbers(array);
        }
    
        if (choseNumbers.length >= game['max-number']) {
            return;
        };
    
        setChoseNumbers([...choseNumbers, numberSelected])
        console.log(choseNumbers)
    }
    
    const checker = () => {
        if (game.type === '') {
            return false;
        } else {
            return true;
        }
    }

    const numberAlreadyExists = (array: number[], number: number) => {
        return array.some((index) => {
            return index === number;
        });
    };

    const removeNumber = (array: number[], number: number) => {
        return (array = array.filter((num) => {
            return num !== number;
        }));
    }

    return (
        <Game>
            <p id="newbet"><strong>NEW BET</strong> {checker() && `FOR ${game.type.toUpperCase()}`}</p>
            <p><strong>Choose a game</strong></p>
            <GameButtons>
                {Data.types.map((button) => 
                <button
                key={button.type}
                className={button.type}
                onClick={e => updateGameType(e.currentTarget.value)}
                value={button.type}>{button.type}</button>)}
            </GameButtons>
            {checker() && <div className="descriptionArea">
                <p><strong>Fill your bet</strong></p>
                <p>{game.description}</p>
            </div>}
           {checker() && <div className="numbersArea">
                {currentGameRange.map(button => {
                    let selected = false;
                    if (choseNumbers?.includes(button)) selected = true
                    console.log(selected);
                    return (
                        <SelectedNumbers bgc={selected} clicked={selectNumber} number={button} key={button} />
                    )
                })}
            </div>}
            {checker() && <div className="buttonsArea">
                <BetButton width="10rem" id="complete">Complete game</BetButton>
                <BetButton width="8.5rem" id="clear">Clear game</BetButton>
                <AddButton id="add">Add to cart</AddButton>
            </div>}
        </Game>
    );
};

export default GameArea;