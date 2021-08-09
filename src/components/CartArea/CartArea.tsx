import React, { useState } from 'react';
import { CartContainer } from './CartAreaStyles';
import { IoTrashOutline } from 'react-icons/io5';
import { VscError } from 'react-icons/vsc';
import { ColoredBar, BetCard, BetGameType } from './CartAreaStyles';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxhooks';
import { currentLoggedUser, selectUsers, saveUserGames, mergeGames } from '../../store/regSlice';
import Modal from '../Modal/Modal';



const CartArea = ({ cart, onRemoveGame, total, handleCleanUp }: { cart: any, onRemoveGame: any, total: number, handleCleanUp: any}): React.ReactElement => {


    const dispatch = useAppDispatch();
    const currUser = useAppSelector(currentLoggedUser);
    const users = useAppSelector(selectUsers);

    const [error, setError] = useState<boolean>(false);
    const errorHandler = () => {
        setError(!error);
    };

    const handleSave = () => {
        if (total < 30) {
            errorHandler();
            return;
        };
        dispatch(saveUserGames(cart));
        let index = users.findIndex((user: any) => user.email === currUser?.email);
        dispatch(mergeGames({index: index, arr: cart}));
        handleCleanUp();
    };

    return (
        <CartContainer>
            <div className="padding">
                <p className="titleFont" id="titleFont">CART</p>
                {cart.length
                ? <div className="cartItem">
                {cart.map((item: any) =>
                    <div className="parent">
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
            {error && <Modal onClose={errorHandler}>
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
        </CartContainer>
    );
};

export default CartArea;