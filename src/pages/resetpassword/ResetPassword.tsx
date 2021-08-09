import React, { useState } from 'react';
import GreatestApp from '../../components/GreatestApp';
import { Container, H3, Form } from '../login/LoginStyles';
import { Input } from '../../components/Input';
import { Link } from 'react-router-dom';

let classname: string;

const ResetPassword: React.FC = () => {

    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const submitHandler = (event: React.SyntheticEvent) => {
        event.preventDefault();

        if (!email.includes('@')) {
            classname = 'fail';
            return setMessage('Please enter a valid e-mail');
        }

        classname = 'success';
        setMessage('A link was successfully sent to the entered e-mail.')
    };

    return (
        <>
           <Container jc="space-evenly" ai="space-around" mt="5rem">
                <GreatestApp />
                <Container fd="column" mw="22rem">
                    <H3>Reset password</H3>
                    <Form onSubmit={submitHandler}>
                        <Input type="email" placeholder="Email" id="radius" onChange={(e) => setEmail(e.target.value)} value={email} />
                        <p className={classname}>{message}</p>
                        <button>Send link ➝</button>
                    </Form>
                    <H3 id="signup" className="center"><Link to="/login">← Back</Link></H3>
                </Container>
            </Container>
        </>
    );
};

export default ResetPassword;