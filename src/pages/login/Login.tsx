import React from "react";
import { Container, Form, H3 } from "./LoginStyles";
import GreatestApp from "../../components/GreatestApp";

const Login: React.FC = () => {
    return (
        <Container jc="space-evenly" ai="space-around" mt="5rem">
            <GreatestApp />
            <Container fd="column" mw="22rem">
                <H3>Authentication</H3>
                <Form>
                    <input type="email" placeholder="Email" id="email" />
                    <input type="text" placeholder="Password" />
                    <a href="/#">I forgot my password</a>
                    <button>Log In ➝</button>
                </Form>
                <H3>Sign Up ➝</H3>
            </Container>
        </Container>
    );
};

export default Login;