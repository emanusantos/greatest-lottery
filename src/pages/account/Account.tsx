import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Modal from '../../components/Modal/Modal';

const Account: React.FC = () => {
    const [modal, setModal] = useState(false);

    const showModalHandler = () => {
        setModal(!modal);
    };

    const arr = [1, 2, 3, 4, 5];
    console.log(arr.find(el => el > 4));

    const openModal = () => {
        setModal(prev => !prev);
    };

    return (
        <>
            <Navbar />
            <button onClick={showModalHandler}>Open Modal</button>
            {modal && <Modal onClose={showModalHandler}>
                <p>oi</p>
                <button onClick={showModalHandler}>close</button>
            </Modal>}
        </>
    )
};

export default Account;