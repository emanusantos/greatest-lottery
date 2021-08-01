import React, { useState } from 'react';
import GreatestApp from '../../components/GreatestApp';
import { Container, Form, H3 } from '../login/LoginStyles';
import Footer from '../../components/Footer';
import { Input } from '../../components/Input';
import { useDispatch } from 'react-redux';
import { register } from '../../store/regSlice';

const Signup: React.FC = () => {

    const [nameReg, setNameReg] = useState<string>('');
    const [emailReg, setEmailReg] = useState<string>('');
    const [passwordReg, setPasswordReg] = useState<string>('');

    const dispatch = useDispatch();

    const nameResetter = () => {
        setNameReg('');
    };

    const emailResetter = () => {
        setEmailReg('');
    };

    const passwordResetter = () => {
        setPasswordReg('');
    };


    const formHandler = (event: React.SyntheticEvent) => {
        event.preventDefault();

        if (nameReg.length === 0 || emailReg.length === 0 || passwordReg.length === 0) {
            return;
        };

        console.log(nameReg, emailReg, passwordReg);
        dispatch(register({name: nameReg, email: emailReg, password: passwordReg}))

        nameResetter();
        emailResetter();
        passwordResetter();
    };

    return (
        <>
            <Container jc="space-evenly" ai="space-around" mt="5rem">
                <GreatestApp />
                <Container fd="column" mw="22rem">
                    <H3>Registration</H3>
                    <Form onSubmit={formHandler}>
                        <Input type="text" placeholder="Name" id="radius" onChange={e => setNameReg(e.target.value)} value={nameReg} />
                        <Input type="email" placeholder="Email" onChange={e => setEmailReg(e.target.value)} value={emailReg} />
                        <Input type="text" placeholder="Password" onChange={e => setPasswordReg(e.target.value)} value={passwordReg} />
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