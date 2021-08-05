import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Container } from '../login/LoginStyles';
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import Footer from '../../components/Footer';
import { useAppSelector } from '../../hooks/reduxhooks';
import { selectBets } from '../../store/cartSlice';
import { BetCard, ColoredBar, BetGameType } from '../../components/CartArea/CartAreaStyles';
import { Parent } from './HomeStyles';
import { useHistory } from 'react-router';
import { currentLoggedUser } from '../../store/regSlice';

const Home: React.FC = () => {

    const history = useHistory();
    const selectedCurrentUser = useAppSelector(currentLoggedUser)

    useEffect(() => {
        userCheck();
    });

    const userCheck = () => {
        if (!selectedCurrentUser) {
            history.push('/login')
        }
    };

    const currentBets = useAppSelector(selectBets);

    return (
        <>
            <Navbar />
            <Container fd="column" padding="4rem 8rem">
                <HomeHeader />
                        {currentBets.length > 0 && currentBets.map((bet: any) => 
                        <Parent>
                            <ColoredBar bgc={bet.color} />
                            <BetCard>
                                <p id="numbers">{bet.numbers}</p>
                                <p id="dateAndPrice">
                                    {new Date().toLocaleDateString('pt-br')} - {`R$ ${bet.price.toFixed(2).replace('.', ',')}`}
                                </p>
                                <BetGameType color={bet.color}>{bet.type}</BetGameType>
                            </BetCard>
                        </Parent>)}
            </Container>
            <Footer /> 
        </>
        
    );
};

export default Home;