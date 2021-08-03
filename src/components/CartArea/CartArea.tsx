import React from 'react';
import { CartContainer } from './CartAreaStyles';

const CartArea: React.FC = () => {
    return (
        <CartContainer>
            <div className="padding">
                <p className="titleFont">CART</p>
                <h4>Carrinho vazio</h4>
                <div className="cartItem"></div>
                <p className="titleFont">CART<span> TOTAL</span></p>
            </div>
            <div className="btnArea">
                <button>Save ➝</button>
            </div>
        </CartContainer>
    );
};

export default CartArea;