import React from 'react';
import GreatestApp from '../../components/GreatestApp';
import { Container, Form, H3 } from '../login/LoginStyles';
import Footer from '../../components/Footer';

const Signup: React.FC = () => {
    return (
        <>
            <Container jc="space-evenly" ai="space-around" mt="5rem">
                <GreatestApp />
                <Container fd="column" mw="22rem">
                    <H3>Registration</H3>
                    <Form>
                        <input type="text" placeholder="Name" id="radius" />
                        <input type="email" placeholder="Email" />
                        <input type="text" placeholder="Password" />
                        <button>Register ➝</button>
                    </Form>
                    <H3 id="signup">← Back</H3>
                </Container>
            </Container>
            <Footer />
        </>
    );
};

export default Signup;