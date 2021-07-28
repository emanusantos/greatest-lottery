import React from 'react';
import GreatestApp from '../../components/GreatestApp';
import { Container, H3, Form } from '../login/LoginStyles';
import Footer from '../../components/Footer';

const ResetPassword: React.FC = () => {
    return (
        <>
           <Container jc="space-evenly" ai="space-around" mt="5rem">
                <GreatestApp />
                <Container fd="column" mw="22rem">
                    <H3>Reset password</H3>
                    <Form>
                        <input type="email" placeholder="Email" id="radius" />
                        <button>Send link ➝</button>
                    </Form>
                    <H3 id="signup">← Back</H3>
                </Container>
            </Container>
            <Footer /> 
        </>
    );
};

export default ResetPassword;