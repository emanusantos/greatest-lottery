import React, {useState} from 'react';
import Navbar from '../../components/Navbar';
import { BetContainer, GameTypeButton } from './NewBetStyles';
import CartArea from '../../components/CartArea/CartArea';
import { Game, GameButtons, BetButton, AddButton } from '../../components/GameArea/GameAreaStyles';
import SelectedNumbers from '../../components/SelectedNumber/SelectedNumber';
import Data from '../../games.json';
import { Games } from '../../store/cartSlice';

let currentGameRange: number[] = [];
let total = Number(0);

const NewBet: React.FC = () => {

    const [game, setGame] = useState<Games>({
        type: '', 
        description: '',
        range: 0,
        price: 0,
        'max-number': 0,
        color: '',
        'min-cart-value': 0
    });

    const [choseNumbers, setChoseNumbers] = useState<any>();
    const [toCart, setToCart] = useState<any>([]);

    const cartAddHandler = (arg: any) => {
        setToCart(arg);
    };

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
    };

    const getRandomGame = () => {
        const amount = game['max-number'] - choseNumbers.length;
        const randomizedNumbers = generateNumbers(amount, game.range, choseNumbers);
        setChoseNumbers([...randomizedNumbers]);
    };

    const generateNumbers = (amount: number, range: number, array: number[]) => {
        const getRandomNumbers = (max: number) => {
            return Math.ceil(Math.random() * max);
        };
        
        for (let i = 1; i <= amount; i++) {
            const number = getRandomNumbers(range)
            if (numberAlreadyExists(array, number)) {
              i--
            } else {
              array.push(number)
            }
          }
          return array
    };

    const formatNumbers = () => {
        let display = '';
        choseNumbers.sort((a: number, b: number) => a - b).forEach((item: number, index: number) => {
            if (index !== choseNumbers.length - 1) {
                display += `${item < 10 ? `0${item}` : item}, `
            } else {
                display += item
            }
        })
        return display;
    }

    const clearGame = () => {
        setChoseNumbers([]);
    };

    const addItemToCart = () => {
        if (choseNumbers.length < game['max-number']) {
            return;
        }

        total += game.price;

        cartAddHandler([...toCart, { id: Date.now().toString(), numbers: formatNumbers(), price: game.price, color: game.color, type: game.type }])
        console.log(toCart);
    };

    const removeGame = (id: any, price: number) => {
        let newCart = toCart.filter((cartItem: any) => id !== cartItem.id);
        total -= price;
        return setToCart(newCart);
    };

    const handleCleanUp = () => {
        setToCart([]);
        total = Number(0);
    }

    return (
        <>
            <Navbar />
            <BetContainer>
            <Game>
                <p id="newbet"><strong>NEW BET</strong> {checker() && `FOR ${game.type.toUpperCase()}`}</p>
                <p><strong>Choose a game</strong></p>
                <GameButtons>
                    {Data.types.map((button) => {
                        let color = button.color
                        let bgc = '#fff';
                        let border = color;
                        if (game.type === button.type) {
                            bgc = color;
                            color = '#fff';
                            border = '#fff';
                        }

                        return (
                            <GameTypeButton
                            color={color}
                            bgc={bgc}
                            border={`.15rem solid ${border}`}
                            key={button.type}
                            className={button.type}
                            onClick={e => updateGameType(e.currentTarget.value)}
                            value={button.type}>{button.type}</GameTypeButton>
                        )
                    })}
                </GameButtons>
                {checker() && <div className="descriptionArea">
                    <p><strong>Fill your bet</strong></p>
                    <p>{game.description}</p>
                </div>}
                {checker() && <div className="numbersArea">
                    {currentGameRange.map(button => {
                        let selected = false;
                        if (choseNumbers.includes(button)) selected = true
                        let bgc = selected ? game.color : '#ADC0C4';
                        return (
                            <SelectedNumbers bgc={bgc} clicked={selectNumber} number={button} key={button} />
                        )
                    })}
                </div>}
                {checker() && <div className="buttonsArea">
                    <BetButton onClick={getRandomGame} width="10rem" id="complete">Complete game</BetButton>
                    <BetButton onClick={clearGame} width="8.5rem" id="clear">Clear game</BetButton>
                    <AddButton onClick={addItemToCart} id="add">Add to cart</AddButton>
                </div>}
            </Game>
                <CartArea cart={toCart} onRemoveGame={removeGame} total={total} handleCleanUp={handleCleanUp} />
            </BetContainer>
        </>
    );
};

export default NewBet;