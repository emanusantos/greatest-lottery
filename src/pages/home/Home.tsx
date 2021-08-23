import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Container } from '../login/LoginStyles';
import { StyledHomeHeader } from '../../components/HomeHeader/HomeHeaderStyles';
import { useAppSelector } from '../../hooks/reduxhooks';
import { BetCard, ColoredBar, BetGameType } from '../../components/CartArea/CartAreaStyles';
import { Parent } from './HomeStyles';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { token, currentUserGames } from '../../store/regSlice';
import { Bet } from '../../types/types';
import Data from '../../games.json';
import { GameTypeButton } from '../newbet/NewBetStyles';

const Home: React.FC = () => {

    const history = useHistory();

    useEffect(() => {
        userCheck();
    });

    const selectedCurrentUser = useAppSelector(token);

    const [filters, setFilters] = useState<string | null>(null);

    const userCheck = () => {
        if (!selectedCurrentUser) {
            history.push('/login');
        };
    };


    const currentBets = useAppSelector(currentUserGames);

    const filteredData = currentBets?.filter((bet: Bet) => bet.type === filters);

    return (
        <>
            <Navbar />
            <Container fd="column" padding="4rem 8rem">
            <StyledHomeHeader>
                <h4>RECENT GAMES</h4>
                <div className="filters">
                    <p onClick={() => setFilters(null)}>Filters</p>
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
                        {currentBets && filteredData?.map((bet: Bet) =>
                        <Parent key={Math.random()*20}>
                            <ColoredBar bgc={bet.color} />
                            <BetCard>
                                <p id="numbers">{bet.numbers}</p>
                                <p id="dateAndPrice">
                                    {new Date().toLocaleDateString('pt-br')} - {`R$ ${bet.price.toFixed(2).replace('.', ',')}`}
                                </p>
                                <BetGameType color={bet.color}>{bet.type}</BetGameType>
                            </BetCard>
                        </Parent>)}


                        {currentBets && !filters && currentBets.length > 0 && currentBets.map((bet: Bet) => 
                        <Parent key={Math.random()*20}>
                            <ColoredBar bgc={bet.color} />
                            <BetCard>
                                <p id="numbers">{bet.numbers}</p>
                                <p id="dateAndPrice">
                                    {new Date().toLocaleDateString('pt-br')} - {`R$ ${bet.price.toFixed(2).replace('.', ',')}`}
                                </p>
                                <BetGameType color={bet.color}>{bet.type}</BetGameType>
                            </BetCard>
                        </Parent>)}

                        {currentBets?.length === 0 && <p id="noBet">Seems like you don't have any games yet! Click 
                        <strong><Link to="/bet"> here</Link></strong> or in the 'New Bet' button so you can get your first ones!</p>}
            </Container>
        </>
        
    );
};

export default Home;