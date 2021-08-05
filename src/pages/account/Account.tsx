import React, { useState } from 'react'
import styled from 'styled-components';
import Navbar from '../../components/Navbar/Navbar';

const Backdrop = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalWrapper = styled.div`
    width: 50rem;
    height: 32rem;
    box-shadow: 0 .3rem 1rem rgba(0,0,0,0.2);
    background: #fff;
    color: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 10;
    border-radius: .6rem;
`;

const Account: React.FC = () => {
    const [modal, setModal] = useState(false);

    const arr = [1, 2, 3, 4, 5];
    console.log(arr.find(el => el > 4));

    const openModal = () => {
        setModal(prev => !prev);
    };

    return (
        <>
            <Navbar />
            <button>Open Modal</button>
        </>
    )
};

export default Account;