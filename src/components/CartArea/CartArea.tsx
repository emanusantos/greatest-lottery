import React from 'react';
import { CartContainer } from './CartAreaStyles';

const CartArea = (cart: any): React.ReactElement => {
    return (
        <CartContainer>
            <div className="padding">
                <p className="titleFont">CART</p>
                {cart.cart.length
                ? <div className="cartItem">{cart.cart.map((item: any) => <div>{item.numbers}</div>)}</div> 
                : <h4>Carrinho vazio</h4>}
                <p className="titleFont">CART<span> TOTAL:</span></p>
            </div>
            <div className="btnArea">
                <button>Save ➝</button>
            </div>
        </CartContainer>
    );
};

export default CartArea;