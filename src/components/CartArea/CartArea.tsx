import React from 'react';
import { CartContainer } from './CartAreaStyles';
import { IoTrashOutline } from 'react-icons/io5';
import { ColoredBar, BetCard, BetGameType } from './CartAreaStyles';

const CartArea = (cart: any): React.ReactElement => {
    return (
        <CartContainer>
            <div className="padding">
                <p className="titleFont" id="titleFont">CART</p>
                {cart.cart.length
                ? <div className="cartItem">
                {cart.cart.map((item: any) =>
                    <div className="parent">
                    <IoTrashOutline size="1.5rem" className="icon" onClick={() => console.log('clicked')} />
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
                <p className="titleFont" id="footerFont">CART<span> TOTAL:</span></p>
            </div>
            <div className="btnArea">
                <button>Save ➝</button>
            </div>
        </CartContainer>
    );
};

export default CartArea;