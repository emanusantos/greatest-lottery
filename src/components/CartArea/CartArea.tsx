import React from 'react';
import { CartContainer } from './CartAreaStyles';

const CartArea: React.FC = () => {
    return (
        <CartContainer>
            <div className="padding">
                <h3>CART</h3>
                <h4>Carrinho vazio</h4>
                <div className="cartItem"></div>
                <h3>CART <span>TOTAL</span></h3>
            </div>
            <div className="btnArea">
                <button>Save ➝</button>
            </div>
        </CartContainer>
    );
};

export default CartArea;