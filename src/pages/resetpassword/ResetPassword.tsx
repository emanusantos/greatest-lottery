import React from 'react';
import GreatestApp from '../../components/GreatestApp';
import { Container, H3, Form } from '../login/LoginStyles';
import { Input } from '../../components/Input';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

const ResetPassword: React.FC = () => {

    const submitHandler = (event: any) => {
        event.preventDefault();
    };

    return (
        <>
           <Container jc="space-evenly" ai="space-around" mt="5rem">
                <GreatestApp />
                <Container fd="column" mw="22rem">
                    <H3>Reset password</H3>
                    <Form onSubmit={submitHandler}>
                        <Input type="email" placeholder="Email" id="radius" />
                        <button>Send link ➝</button>
                    </Form>
                    <H3 id="signup" className="center"><Link to="/login">← Back</Link></H3>
                </Container>
            </Container>
            <Footer /> 
        </>
    );
};

export default ResetPassword;