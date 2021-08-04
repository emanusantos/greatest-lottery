import React, { useState } from "react";
import { Container, Form, H3 } from "./LoginStyles";
import { Input } from "../../components/Input";
import GreatestApp from "../../components/GreatestApp";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Login: React.FC = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const emailResetter = () => {
        setEmail('');
    };

    const passwordResetter = () => {
        setPassword('');
    };


    const formHandler = (event: React.SyntheticEvent) => {
        event.preventDefault();

        if (email.length === 0 || password.length === 0) {
            return;
        };

        console.log(email, password)

        emailResetter();
        passwordResetter();
    };

    return (
        <>
        <Container jc="space-evenly" ai="space-around" mt="5rem">
            <GreatestApp />
            <Container fd="column" mw="22rem">
                <H3>Authentication</H3>
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
                    <a href="/#">I forgot my password</a>
                    <button>Log In ➝</button>
                </Form>
                <H3 id="signup"><Link to="/signup">Sign Up ➝</Link></H3>
            </Container>
        </Container>
        <Footer>Copyright 2021  Luby Software</Footer>
        </>
    );
};

export default Login;