import React, { useState } from "react";
import { Container, Form, H3 } from "./LoginStyles";
import { Input } from "../../components/Input";
import GreatestApp from "../../components/GreatestApp";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { selectUsers } from "../../store/regSlice";
import { useAppSelector } from "../../hooks/reduxhooks";
import { useAppDispatch } from "../../hooks/reduxhooks";
import { currentUser } from "../../store/regSlice";
import { useHistory } from "react-router";
import { VscError } from 'react-icons/vsc';
import Modal from "../../components/Modal/Modal";

const Login: React.FC = () => {

    const history = useHistory();
    const dispatch = useAppDispatch();
    const users = useAppSelector(selectUsers);
    console.log(users);

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState(false);

    const emailResetter = () => {
        setEmail('');
    };

    const passwordResetter = () => {
        setPassword('');
    };

    const errorHandler = () => {
        setError(!error);
    }

    const formHandler = (event: React.SyntheticEvent) => {
        event.preventDefault();

        if (email.length === 0 || password.length === 0) {
            return;
        };

        const emailAuth = users.find((user: any) => user.email === email);
        const passwordAuth = users.find((user: any) => user.password === password);

        console.log(email, password);
        

        if (emailAuth === undefined || passwordAuth === undefined) {
            errorHandler();
        } else {
            let index = users.findIndex((user: any) => user.email === email);
            console.log(index);
            dispatch(currentUser(users[index]));
            history.push('/');
        }

        emailResetter();
        passwordResetter();
    };

    return (
        <>
        <Container jc="space-evenly" ai="space-around" mt="5rem">
            <GreatestApp />
            <Container fd="column" mw="22rem">
                <H3 className="center">Authentication</H3>
                <Form onSubmit={formHandler}>
                    <Input type="email" 
                        placeholder="Email" 
                        id="radius" 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <Input 
                        type="password" 
                        placeholder="Password" 
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <Link to="/recover">I forgot my password</Link>
                    <button>Log In ➝</button>
                </Form>
                <H3 id="signup" className="center"><Link to="/signup">Sign Up ➝</Link></H3>
            </Container>
        </Container>
        <Footer>Copyright 2021  Luby Software</Footer>
        {error && <Modal onClose={errorHandler}>
            <div className="errorHeader">
                <h2 onClick={errorHandler}><VscError /></h2>
            </div>
            <div className="errorText">
                <p>Wrong email/password combination!</p>
                <button onClick={errorHandler}>Try again</button>
            </div>
        </Modal>}
        </>
    );
};

export default Login;