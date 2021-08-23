import React, { useState } from 'react';
import GreatestApp from '../../components/GreatestApp';
import { Container, H3, Form } from '../login/LoginStyles';
import { Input } from '../../components/Input';
import { Link } from 'react-router-dom';
import axios from 'axios';

let classname: string;

const ResetPassword: React.FC = () => {

    const [email, setEmail] = useState<string>('');
    const [resetCredentials, setResetCredentials] = useState({
        token: '',
        pass: '',
        passconf: ''
    });
    const [message, setMessage] = useState<string>('');
    const [hasLink, setHasLink] = useState<boolean>(false);

    const submitHandler = (event: React.SyntheticEvent) => {
        event.preventDefault();

        if (!email.includes('@')) {
            classname = 'fail';
            return setMessage('Please enter a valid e-mail');
        }

        sendRecoverToken();
    };

    const sendRecoverToken = async (): Promise<void> => {
        await axios.post('http://localhost:3333/passwords', {
            email: email,
            redirect_url: 'http://localhost:3000/recover'
        })
          .then(function (response) {
            console.log(response);
            classname = 'success';
            setMessage('A link was successfully sent to the entered e-mail.')
            setHasLink(true);
        })
          .catch(function (error) {
            console.log(error);
            classname = 'fail';
            return setMessage('Please enter a valid e-mail');
        })
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        setResetCredentials({...resetCredentials, [target.id]: target.value});
    };

    const recoverHandler = (event: React.SyntheticEvent) => {
        event.preventDefault();

        if (resetCredentials.pass.length < 2) {
            classname = 'fail';
            return setMessage("Please enter a valid password.");
        };

        if (resetCredentials.pass !== resetCredentials.passconf) {
            classname = 'fail';
            return setMessage("Your password doesn't match.");
        };

        resetPass();
    };

    const resetPass = async (): Promise<void> => {
        await axios.put('http://localhost:3333/passwords', {
            token: resetCredentials.token,
            password: resetCredentials.pass,
            password_confirmed: resetCredentials.passconf
        })
        .then((response) => {
            console.log(response);
            classname = 'success';
            setMessage('Your password was successfully reset.')
        })
        .catch((err) => {
            console.log(err);
            classname = 'fail';
            return setMessage('Something went wrong with the password reset. Please check your token');
        });
    };

    return (
        <>
           <Container jc="space-evenly" ai="space-around" mt="5rem">
                <GreatestApp />
                <Container fd="column" mw="22rem">
                    <H3>Reset password</H3>
                    {!hasLink && <Form onSubmit={submitHandler}>
                        <Input type="email" placeholder="Email" id="radius" onChange={(e) => setEmail(e.target.value)} value={email} />
                        <p className={classname}>{message}</p>
                        <button>Send link ➝</button>
                    </Form>}
                    {hasLink && <Form onSubmit={recoverHandler}>
                        <Input type="string" placeholder="Token" id="token" onChange={(e) => handleChange(e)} value={resetCredentials.token} />
                        <Input type="password" placeholder="Password" id="pass" onChange={(e) => handleChange(e)} value={resetCredentials.pass} />
                        <Input type="password" placeholder="Confirm your password" id="passconf" onChange={(e) => handleChange(e)} value={resetCredentials.passconf} />
                        <p className={classname}>{message}</p>
                        <button>Reset</button>
                    </Form>}
                    <H3 id="signup" className="center"><Link to="/login">← Back</Link></H3>
                </Container>
            </Container>
        </>
    );
};

export default ResetPassword;