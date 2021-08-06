import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Modal from '../../components/Modal/Modal';
import { Container } from '../login/LoginStyles';
import { useAppSelector } from '../../hooks/reduxhooks';
import { currentLoggedUser } from '../../store/regSlice';
import Footer from '../../components/Footer';
import { ProfileInfo } from './AccountStyles';
import { BsPencilSquare } from 'react-icons/bs'

const Account: React.FC = () => {

    const userSelector = useAppSelector(currentLoggedUser);

    const [modal, setModal] = useState(false);

    const showModalHandler = () => {
        setModal(!modal);
    };

    return (
        <>
            <Navbar />
            <Container padding="3rem 8.5rem" fd="column">
                <h3>{userSelector.name}'s profile:</h3>
                <ProfileInfo>
                    <p><strong>Name:</strong> {userSelector.name}<BsPencilSquare /></p>
                    <p><strong>Email:</strong> {userSelector.email}</p>
                    <p><strong>Change password</strong></p>
                    <p></p>
                </ProfileInfo>
            </Container>
            <button onClick={showModalHandler}>Open Modal</button>
            {modal && <Modal onClose={showModalHandler}>
                <p>oi</p>
                <button onClick={showModalHandler}>close</button>
            </Modal>}
            <Footer />
        </>
    )
};

export default Account;