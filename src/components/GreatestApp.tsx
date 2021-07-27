import React from 'react';
import { Container, H1, H2, BtnFor } from "../pages/login/LoginStyles";

const GreatestApp = () => {
    return (
            <Container fd="column" ai="center">
                <H2>The <br/>Greatest <br/> App</H2>
                <BtnFor disabled>for</BtnFor>
                <H1>LOTTERY</H1>
            </Container>
    );
};

export default GreatestApp;