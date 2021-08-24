import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Container } from '../login/LoginStyles';
import { StyledHomeHeader } from '../../components/HomeHeader/HomeHeaderStyles';
import { useAppSelector, useAppDispatch } from '../../hooks/reduxhooks';
import { BetCard, ColoredBar, BetGameType } from '../../components/CartArea/CartAreaStyles';
import { Parent } from './HomeStyles';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { token, setId } from '../../store/regSlice';
import { Games, BetResponse } from '../../types/types';
import { GameTypeButton } from '../newbet/NewBetStyles';
import axios from 'axios';

const Home: React.FC = () => {

    const history = useHistory();
    const dispatch = useAppDispatch();

    useEffect(() => {
        userCheck();
        getGames();
        getBets();
    }, []);

    const getGames = async (): Promise<void> => {
        const games = await axios.get('http://localhost:3333/games');
        setData(games.data)
        console.log(games.data);
    };

    const userToken = useAppSelector(token);

    const getBets = async (): Promise<void> => {
        await axios.get('http://localhost:3333/bets', {
            headers: {
                'Authorization': `Bearer ${userToken}`
            }
        }).then((response) => {
            console.log(response);
            setUserBets(response.data)
            dispatch(setId(response.data[0].user_id))
        }).catch((err) => {
            console.log(err);
        })
    };

    const [filters, setFilters] = useState<string | null>(null);

    const [data, setData] = useState<Games[]>([]);
    const [userBets, setUserBets] = useState<BetResponse[]>([]);

    const userCheck = () => {
        if (!userToken) {
            history.push('/login');
        };
    };

    const filteredData = userBets?.filter((bet: BetResponse) => bet.game.type === filters);

    return (
        <>
            <Navbar />
            <Container fd="column" padding="4rem 8rem">
            <StyledHomeHeader>
                <h4>RECENT GAMES</h4>
                <div className="filters">
                    <p onClick={() => setFilters(null)}>Filters</p>
                    {data.map((button) => {
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
                        {userBets && filteredData?.map((bet: BetResponse) =>
                        <Parent key={Math.random()*20}>
                            <ColoredBar bgc={bet.game.color} />
                            <BetCard>
                                <p id="numbers">{bet.numbers}</p>
                                <p id="dateAndPrice">
                                    {new Date().toLocaleDateString('pt-br')} - {`R$ ${bet.price.toFixed(2).replace('.', ',')}`}
                                </p>
                                <BetGameType color={bet.game.color}>{bet.game.type}</BetGameType>
                            </BetCard>
                        </Parent>)}


                        {userBets && !filters && userBets.length > 0 && userBets.map((bet: any) => 
                        <Parent key={Math.random()*20}>
                            <ColoredBar bgc={bet.game.color} />
                            <BetCard>
                                <p id="numbers">{bet.numbers}</p>
                                <p id="dateAndPrice">
                                    {bet.created_at.substr(0, 10)} - {`R$ ${bet.price.toFixed(2).replace('.', ',')}`}
                                </p>
                                <BetGameType color={bet.game.color}>{bet.game.type}</BetGameType>
                            </BetCard>
                        </Parent>)}

                        {userBets?.length === 0 && <p id="noBet">Seems like you don't have any games yet! Click 
                        <strong><Link to="/bet"> here</Link></strong> or in the 'New Bet' button so you can get your first ones!</p>}
            </Container>
        </>
        
    );
};

export default Home;