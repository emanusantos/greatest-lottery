import React, { useState, useEffect } from 'react';
import GreatestApp from '../../components/GreatestApp';
import { Container, Form, H3 } from '../login/LoginStyles';
import { Input } from '../../components/Input';
import { useAppSelector } from '../../hooks/reduxhooks';
import { currentLoggedUser } from '../../store/regSlice';
import { Link, useHistory } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import { VscCheck, VscError } from 'react-icons/vsc';
import axios from 'axios';

const Signup: React.FC = () => {

    useEffect(() => {
        userCheck();
    });

    const userCheck = (): void => {
        if (selectedCurrentUser) {
            history.push('/');
        };
    };

    const selectedCurrentUser = useAppSelector(currentLoggedUser);

    const [nameReg, setNameReg] = useState<string>('');
    const [emailReg, setEmailReg] = useState<string>('');
    const [passwordReg, setPasswordReg] = useState<string>('');
    const [modal, setModal] = useState({
        error: false,
        success: false
    });

    const errorHandler = () => {
        setModal({...modal, error: !modal.error});
    };

    const successHandler = () => {
        setModal({...modal, success: !modal.success});
    };
    const history = useHistory();

    const nameResetter = (): void => {
        setNameReg('');
    };

    const emailResetter = (): void => {
        setEmailReg('');
    };

    const passwordResetter = (): void => {
        setPasswordReg('');
    };


    const formHandler = (event: React.SyntheticEvent) => {
        event.preventDefault();

        if (nameReg.length === 0 || emailReg.length === 0 || passwordReg.length === 0) {
            errorHandler();
            return;
        };

        axios.post('http://localhost:3333/users', {
            "name": nameReg,
            "email": emailReg,
            "password": passwordReg
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        successHandler();

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
            {modal.success && <Modal onClose={successHandler}>
                <div className="errorHeader">
                    <h2><VscCheck /></h2>
                </div>
                <div className="errorText">
                    <p>You've signed up successfully. <Link to="/login">Click here</Link> to log in with your brand-new credentials!</p>
                </div>
                
            </Modal>}

            {modal.error && <Modal onClose={errorHandler}>
                <div className="errorHeader">
                    <h2><VscError /></h2>
                </div>
                <div className="errorText">
                    <p>Please enter valid credentials.</p>
                </div>
                
            </Modal>}
        </>
    );
};

export default Signup;