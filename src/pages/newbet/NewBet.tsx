import React from 'react';
import Navbar from '../../components/Navbar';
import { BetContainer } from './NewBetStyles';
import GameArea from '../../components/GameArea/GameArea';
import CartArea from '../../components/CartArea/CartArea';

const NewBet: React.FC = () => {
    return (
        <>
            <Navbar />
            <BetContainer>
                <GameArea />
                <CartArea />
            </BetContainer>
        </>
    );
};

export default NewBet;