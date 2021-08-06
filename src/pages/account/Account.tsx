import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Modal from '../../components/Modal/Modal';
import { Container } from '../login/LoginStyles';
import { useAppSelector } from '../../hooks/reduxhooks';
import { currentLoggedUser } from '../../store/regSlice';
import Footer from '../../components/Footer';
import { ProfileInfo } from './AccountStyles';
import { BsPencilSquare } from 'react-icons/bs';
import { AiOutlineArrowDown, AiOutlineCheckCircle } from 'react-icons/ai';
import { Form } from '../login/LoginStyles';
import { Input } from '../../components/Input';

const Account: React.FC = () => {

    const userSelector = useAppSelector(currentLoggedUser);

    const [modal, setModal] = useState(false);
    const [changePass, setChangePass] = useState(false);
    const [editName, setEditName] = useState(false);
    const [editEmail, setEditEmail] = useState(false);
    const [userCredentials, setUserCredentials] = useState({
        name: '',
        email: '',
        pass: '',
        passconf: ''
    })

    const editNameHandler = () => {
        return setEditName(!editName);
    };

    const editEmailHandler = () => {
        return setEditEmail(!editEmail);
    };

    const handleChange = (e: any) => {
        const target = e.target;
        setUserCredentials({...userCredentials, [target.id]: target.value});
    };

    const showModalHandler = () => {
        setModal(!modal);
    };

    const changePassHandler = () => {
        setChangePass(!changePass);
    }

    return (
        <>
            <Navbar />
            <Container padding="3rem 8.5rem" fd="column">
                <h3 id="profile">{userSelector.name.toUpperCase()}'S PROFILE:</h3>
                <ProfileInfo>
                    
                        <p><strong>Name:</strong> {userSelector.name}<BsPencilSquare onClick={editNameHandler} className="editIcon" /></p>
                    {editName && <div className="nameEdit">
                        <Input id="name" type="text" placeholder="Edit your name" onChange={e => handleChange(e)} value={userCredentials.name} />
                        <button className="confirmEdit"><AiOutlineCheckCircle /></button>
                    </div>}

                    
                        <p><strong>Email:</strong> {userSelector.email}<BsPencilSquare onClick={editEmailHandler} className="editIcon" /></p>
                    {editEmail && <div className="emailEdit">
                            <Input id="email" type="email" placeholder="Edit your email" onChange={e => handleChange(e)} value={userCredentials.email} />
                            <button className="confirmEdit"><AiOutlineCheckCircle /></button>
                        
                    </div>}
                    
                    
                    <p id="changePassword" onClick={changePassHandler}><strong>Change password</strong> <AiOutlineArrowDown /></p>
                    {changePass && <Form className="changeForm">
                        <Input id="pass" type="password" onChange={e => handleChange(e)} placeholder="Enter your new password" value={userCredentials.pass} />
                        <Input id="passconf" type="password" onChange={e => handleChange(e)} placeholder="Confirm your password" value={userCredentials.passconf} />
                        <button>Change</button>
                    </Form>}
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