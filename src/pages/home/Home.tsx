import React from 'react';
import Navbar from '../../components/Navbar';
import { Container } from '../login/LoginStyles';
import HomeHeader from '../../components/HomeHeader';
import Footer from '../../components/Footer';

const Home: React.FC = () => {
    return (
        <>
            <Navbar />
            <Container>
                <HomeHeader />
                <div className="recentGames">

                </div>
            </Container>
            <Footer /> 
        </>
        
    );
};

export default Home;