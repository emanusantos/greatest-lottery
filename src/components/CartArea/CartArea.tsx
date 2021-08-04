import React from 'react';
import { CartContainer } from './CartAreaStyles';
import { IoTrashOutline } from 'react-icons/io5';
import { ColoredBar, BetCard, BetGameType } from './CartAreaStyles';
import { useAppDispatch } from '../../hooks/reduxhooks';
import { saveCartBets } from '../../store/cartSlice';

const CartArea = ({ cart, onRemoveGame, total, handleCleanUp }: { cart: any, onRemoveGame: any, total: number, handleCleanUp: any}): React.ReactElement => {

    const dispatch = useAppDispatch();

    const handleSave = () => {
        if (total < 30) {
            return;
        };
        console.log(cart);
        dispatch(saveCartBets(cart));
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
        </CartContainer>
    );
};

export default CartArea;