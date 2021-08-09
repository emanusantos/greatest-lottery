import React, { useState, useEffect } from 'react';
import GreatestApp from '../../components/GreatestApp';
import { Container, Form, H3 } from '../login/LoginStyles';
import { Input } from '../../components/Input';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxhooks';
import { register, currentLoggedUser } from '../../store/regSlice';
import { Link, useHistory } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import { VscCheck } from 'react-icons/vsc';

const Signup: React.FC = () => {

    useEffect(() => {
        userCheck();
    });

    const userCheck = () => {
        if (selectedCurrentUser) {
            history.push('/');
        };
    };

    const selectedCurrentUser = useAppSelector(currentLoggedUser);

    const [nameReg, setNameReg] = useState<string>('');
    const [emailReg, setEmailReg] = useState<string>('');
    const [passwordReg, setPasswordReg] = useState<string>('');
    const [modal, setModal] = useState<boolean>(false);

    const dispatch = useAppDispatch();
    const history = useHistory();

    const nameResetter = () => {
        setNameReg('');
    };

    const emailResetter = () => {
        setEmailReg('');
    };

    const passwordResetter = () => {
        setPasswordReg('');
    };

    const showModalHandler = () => {
        setModal(!modal);
    };


    const formHandler = (event: React.SyntheticEvent) => {
        event.preventDefault();

        if (nameReg.length === 0 || emailReg.length === 0 || passwordReg.length === 0) {
            return;
        };

        dispatch(register({name: nameReg, email: emailReg, password: passwordReg, games: []}));
        setModal(true);

        nameResetter();
        emailResetter();
        passwordResetter();
    };

    return (
        <>
            <Container jc="space-evenly" ai="space-around" mt="5rem">
                <GreatestApp />
                <Container fd="column" mw="22rem">
                    <H3 className="center">Registration</H3>
                    <Form onSubmit={formHandler}>
                        <Input type="text" placeholder="Name" id="radius" onChange={e => setNameReg(e.target.value)} value={nameReg} />
                        <Input type="email" placeholder="Email" onChange={e => setEmailReg(e.target.value)} value={emailReg} />
                        <Input type="password" placeholder="Password" onChange={e => setPasswordReg(e.target.value)} value={passwordReg} />
                        <button>Register ➝</button>
                    </Form>
                    <H3 id="signup" className="center"><Link to="/login">← Back</Link></H3>
                </Container>
            </Container>
            {modal && <Modal onClose={showModalHandler}>
                <div className="errorHeader">
                    <h2><VscCheck /></h2>
                </div>
                <div className="errorText">
                    <p>You've signed up successfully. <Link to="/login">Click here</Link> to log in with your brand-new credentials!</p>
                </div>
                
            </Modal>}
        </>
    );
};

export default Signup;