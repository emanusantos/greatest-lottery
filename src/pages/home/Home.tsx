import React from 'react';
import Navbar from '../../components/Navbar';
import { Container } from '../login/LoginStyles';
import HomeHeader from '../../components/HomeHeader';

const Home: React.FC = () => {
    return (
        <>
            <Navbar />
            <Container>
                <HomeHeader />
                <div className="recentGames">

                </div>
            </Container>
        </>
        
    );
};

export default Home;