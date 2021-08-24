import React, { useState } from 'react';
import { CartContainer } from './CartAreaStyles';
import { IoTrashOutline } from 'react-icons/io5';
import { VscError, VscCheck } from 'react-icons/vsc';
import { ColoredBar, BetCard, BetGameType } from './CartAreaStyles';
import { useAppSelector } from '../../hooks/reduxhooks';
import { token } from '../../store/regSlice';
import { Bet } from '../../types/types';
import Modal from '../Modal/Modal';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CartArea = ({ cart, onRemoveGame, total, handleCleanUp }: { cart: Bet[], onRemoveGame: any, total: number, handleCleanUp: any}): React.ReactElement => {

    const userToken = useAppSelector(token);

    const [modal, setModal] = useState({
        error: false,
        success: false
    });

    const errorHandler = (): void => {
        setModal({...modal, error: !modal.error});
    };

    const successHandler = (): void => {
        setModal({...modal, success: !modal.success});
    };

    const handleSave = (): void => {
        if (total < 30) {
            errorHandler();
            return;
        };

        const postedData = cart.map(({ game_id, numbers }) => ({ game_id, numbers }));

        const postBets = async (): Promise<void> => {
            await axios.post('http://localhost:3333/bets', {
                betCart: postedData
            }, {
                headers: {
                    'Authorization': `Bearer ${userToken}`
                }
            }).then((response) => {
                console.log(response);
            }).catch((err) => {
                console.log(err);
            })
        };

        postBets();
        successHandler();
        handleCleanUp();
    };

    return (
        <CartContainer>
            <div className="padding">
                <p className="titleFont" id="titleFont">CART</p>
                {cart.length
                ? <div className="cartItem">
                {cart.map((item: Bet) =>
                    <div className="parent" key={item.id}>
                    <IoTrashOutline size="1.5rem" className="icon" onClick={() => onRemoveGame(item.id, item.price)} />
                    <ColoredBar bgc={item.color} />
                    <BetCard>
                        <p className="numbersBet">{item.numbers}</p>
                        <div className="nameAndPrice">
                            <BetGameType color={item.color}>{item.type}</BetGameType>
                            <p id="price">R$ {item.price.toFixed(2).replace('.', ',')}</p>
                        </div>
                    </BetCard>
                    </div>
                )}
                </div> 
                : <h4>Carrinho vazio</h4>}
                <p className="titleFont" id="footerFont">CART<span> TOTAL: R$ {total.toFixed(2).replace('.', ',')}</span></p>
            </div>
            <div className="btnArea">
                <button onClick={handleSave}>Save ➝</button>
            </div>


            {modal.error && <Modal onClose={errorHandler}>
            <div className="errorHeader">
                <h2><VscError /></h2>
            </div>
            <div className="errorText">
                <p>The minimum price for the cart to be saved is R$30,00. You need to spend more 
                R${(30 - total).toFixed(2).replace('.', ',')} on any games to
                proceed.</p>
                <button onClick={errorHandler}>Try again</button>
            </div>
        </Modal>}

        {modal.success && <Modal onClose={successHandler}>
            <div className="errorHeader">
                <h2><VscCheck /></h2>
            </div>
            <div className="errorText">
                <p>Your cart were successfully saved. Go to the <Link to="/">homepage</Link> to see 
                your saved games or make another bet!</p>
                <button onClick={successHandler}>Bet again</button>
            </div>
        </Modal>}
        </CartContainer>
    );
};

export default CartArea;