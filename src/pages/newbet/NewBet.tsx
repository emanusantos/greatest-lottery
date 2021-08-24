import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { BetContainer, GameTypeButton } from './NewBetStyles';
import CartArea from '../../components/CartArea/CartArea';
import { Game, GameButtons, BetButton, AddButton } from '../../components/GameArea/GameAreaStyles';
import SelectedNumbers from '../../components/SelectedNumber/SelectedNumber';
import { Games, Bet, GameResponse } from '../../types/types';
import { IoCartOutline } from 'react-icons/io5';
import { VscError } from 'react-icons/vsc';
import { token } from '../../store/regSlice';
import { useAppSelector } from '../../hooks/reduxhooks';
import { useHistory } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import axios from 'axios';

let currentGameRange: number[] = [];
let total = Number(0);
let errorText: string;
let gameid: number;


const NewBet: React.FC = () => {

    const history = useHistory();
    const userToken = useAppSelector(token)

    useEffect(() => {
        userCheck();
        getGames();
    }, []);

    const getGames = async (): Promise<void> => {
        const games = await axios.get('http://localhost:3333/games');
        setData(games.data)
        console.log(games.data);
    } 

    const userCheck = (): void => {
        if (!userToken) {
            history.push('/login')
        };
    };

    const [data, setData] = useState<GameResponse[]>([]);

    const [game, setGame] = useState<Games>({
        type: '', 
        description: '',
        range: 0,
        price: 0,
        'max_number': 0,
        color: '',
        'min_cart_value': 0
    });

    const [choseNumbers, setChoseNumbers] = useState<any>();
    const [toCart, setToCart] = useState<Bet[] | []>([]);
    const [error, setError] = useState<boolean>(false);

    const errorHandler = (type: any) => {
        if (type === 'moreNumbers') {
            errorText = `To purchase a ${game.type} game, you have to bet ${game['max_number']} numbers. 
            Please, select ${game['max_number'] - choseNumbers!.length} more 
            ${game['max_number'] - choseNumbers!.length === 1 ? 'number' : 'numbers'}.`
        };

        if (type === 'randomGame') {
            errorText = `The game is already completed. If you want to change the numbers, please clear 
            the current game or de-select some number.`;
        };
        return setError(!error);
    };

    const cartAddHandler = (arg: Bet[]) => {
        setToCart(arg);
    };

    const updateGameType = (e: string) => {
        if (e === game.type) {
            return;
        };

        if (e === 'Lotofácil') {
            currentGameRange = [];
            setGame(data[0]);
            gameid = data[0].id;
            pushNumbers(data[0].range);
            setChoseNumbers([])
        };

        if (e === 'Mega-Sena') {
            currentGameRange = [];
            setGame(data[1])
            gameid = data[1].id;
            pushNumbers(data[1].range);
            setChoseNumbers([])
        };

        if (e === 'Quina') {
            currentGameRange = [];
            setGame(data[2])
            gameid = data[2].id;
            pushNumbers(data[2].range);
            setChoseNumbers([])
        };
    };

    const pushNumbers = (range: number) => {
        for (let i = 1; i <= range; i++) {
            currentGameRange.push(i)
        };
    };

    const selectNumber = (event: any): void => {
        const numberSelected = Number(event.currentTarget.dataset.number);

        if (numberAlreadyExists(choseNumbers!, numberSelected)) {
            const array = removeNumber(choseNumbers!, numberSelected);
            return setChoseNumbers(array);
        }
    
        if (choseNumbers!.length >= game['max_number']) {
            errorHandler('randomGame');
            return;
        };
    
        setChoseNumbers([...choseNumbers!, numberSelected])
    }
    
    const checker = (): boolean => {
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
        console.log(choseNumbers)
        let amount = game['max_number'] - choseNumbers!.length;
        let array: any = [];
        if (amount === 0) {
            const randomizedNumbers = generateNumbers(game['max_number'], game.range, array);
            return setChoseNumbers([...randomizedNumbers])
        }
        const randomizedNumbers = generateNumbers(amount, game.range, choseNumbers!);
        setChoseNumbers([...randomizedNumbers]);
    };

    const generateNumbers = (amount: number, range: number, array: number[]) => {
        clearGame();
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

    const formatNumbers = (): string => {
        let display = '';
        choseNumbers!.sort((a: number, b: number) => a - b).forEach((item: number, index: number) => {
            if (index !== choseNumbers!.length - 1) {
                display += `${item < 10 ? `0${item}` : item}, `
            } else {
                display += item
            }
        })
        return display;
    }

    const clearGame = (): void => {
        setChoseNumbers([]);
    };

    const addItemToCart = (): void => {
        if (choseNumbers!.length < game['max_number']) {
            errorHandler('moreNumbers');
            return;
        }

        total += game.price;

        cartAddHandler([...toCart, { id: Date.now().toString(), game_id: gameid, numbers: formatNumbers(), price: game.price, color: game.color, type: game.type }]);
        clearGame();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const removeGame = (id: string, price: number) => {
        let newCart = toCart.filter((cartItem: Bet) => id !== cartItem.id);
        total -= price;
        return setToCart(newCart);
    };

    const handleCleanUp = (): void => {
        setToCart([]);
        total = Number(0);
        clearGame();
    };

    return (
        <>
            <Navbar />
            <BetContainer>
            <Game>
                <p id="newbet"><strong>NEW BET</strong> {checker() && `FOR ${game.type.toUpperCase()}`}</p>
                <p><strong>Choose a game</strong></p>
                <GameButtons>
                    {data.map((button: any) => {
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
                        if (choseNumbers!.includes(button)) selected = true
                        let bgc = selected ? game.color : '#ADC0C4';
                        return (
                            <SelectedNumbers bgc={bgc} clicked={selectNumber} number={button} key={button} />
                        )
                    })}
                </div>}
                {checker() && <div className="buttonsArea">
                    <div>
                        <BetButton onClick={() => getRandomGame()} width="10rem" id="complete">Complete game</BetButton>
                        <BetButton onClick={clearGame} width="8.5rem" id="clear">Clear game</BetButton>
                    </div>
                    <AddButton onClick={addItemToCart} id="add"><IoCartOutline size="1.5rem" className="cartIcon" />Add to cart</AddButton>
                </div>}
            </Game>
                <CartArea cart={toCart} onRemoveGame={removeGame} total={total} handleCleanUp={handleCleanUp} />
            </BetContainer>
            {error && <Modal onClose={errorHandler}>
            <div className="errorHeader">
                <h2><VscError /></h2>
            </div>
            <div className="errorText">
                <p>{errorText}</p>
                <button onClick={errorHandler}>Try again</button>
            </div>
        </Modal>}
        </>
    );
};

export default NewBet;