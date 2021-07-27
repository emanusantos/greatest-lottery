import React from "react";
import { Container, Form, H1, H2, H3, BtnFor } from "./LoginStyles";

const Login: React.FC = () => {
    return (
        <Container jc="space-evenly" ai="space-around" mt="5rem">
            <Container fd="column" ai="center">
                <H2>The <br/>Greatest <br/> App</H2>
                <BtnFor disabled>for</BtnFor>
                <H1>LOTTERY</H1>
            </Container>

            <Container fd="column" mw="22rem">
                <H3>Authentication</H3>
                <Form>
                    <input type="email" placeholder="Email" id="email" />
                    <input type="text" placeholder="Password" />
                    <a href="/#">I forgot my password</a>
                    <button>Log In</button>
                </Form>
            </Container>
        </Container>
    );
};

export default Login;