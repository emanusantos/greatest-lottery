import React from 'react';
import { Container, H1, H2, BtnFor } from "../pages/login/LoginStyles";

const GreatestApp: React.FC = () => {
    return (
            <Container fd="column" ai="center">
                <H2 className="center">The <br/>Greatest <br/> App</H2>
                <BtnFor disabled>for</BtnFor>
                <H1 className="center">LOTTERY</H1>
            </Container>
    );
};

export default GreatestApp;