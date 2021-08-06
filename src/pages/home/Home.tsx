import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Container } from '../login/LoginStyles';
import { StyledHomeHeader } from '../../components/HomeHeader/HomeHeaderStyles';
import Footer from '../../components/Footer';
import { useAppSelector } from '../../hooks/reduxhooks';
import { BetCard, ColoredBar, BetGameType } from '../../components/CartArea/CartAreaStyles';
import { Parent } from './HomeStyles';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { currentLoggedUser, currentUserGames } from '../../store/regSlice';
import Data from '../../games.json';
import { GameTypeButton } from '../newbet/NewBetStyles';

const Home: React.FC = () => {

    const history = useHistory();
    const selectedCurrentUser = useAppSelector(currentLoggedUser);

    const [filters, setFilters] = useState<string | null>(null);

    useEffect(() => {
        userCheck();
    });

    const userCheck = () => {
        if (!selectedCurrentUser) {
            history.push('/login');
        }
    };


    const currentBets = useAppSelector(currentUserGames);

    const filteredData = currentBets.filter((bet: any) => bet.type === filters);

    return (
        <>
            <Navbar />
            <Container fd="column" padding="4rem 8rem">
            <StyledHomeHeader>
                <h4>RECENT GAMES</h4>
                <div className="filters">
                    <p>Filters</p>
                    {Data.types.map((button) => {
                        let color = button.color
                        let bgc = '#fff';
                        let border = color;
                        if (filters === button.type) {
                            bgc = color;
                            color = '#fff';
                            border = '#fff';
                        }

                        return (
                            <GameTypeButton
                            color={color}
                            bgc={bgc}
                            border={`.15rem solid ${border}`}
                            key={button.type}
                            className={button.type}
                            onClick={e => setFilters(e.currentTarget.value)}
                            value={button.type}>{button.type}</GameTypeButton>
                        )
                    })}
                </div>
                <h4 id="newbet"><Link to="/bet">New Bet ➝</Link></h4>
            </StyledHomeHeader>
                        {filteredData.map((bet: any) =>
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


                        {!filters && currentBets.length > 0 && currentBets.map((bet: any) => 
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