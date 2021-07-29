import React from 'react';
import Navbar from '../../components/Navbar';
import { BetContainer } from './NewBetStyles';
import GameArea from '../../components/GameArea/GameArea';

const NewBet: React.FC = () => {
    return (
        <>
            <Navbar />
            <BetContainer>
                <GameArea />
            </BetContainer>
        </>
    );
};

export default NewBet;