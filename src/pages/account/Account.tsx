import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import { Container } from '../login/LoginStyles';
import { useAppSelector, useAppDispatch } from '../../hooks/reduxhooks';
import { currentLoggedUser, selectUsers, changeCredentials, User } from '../../store/regSlice';
import { ProfileInfo } from './AccountStyles';
import { BsPencilSquare } from 'react-icons/bs';
import { AiOutlineArrowDown, AiOutlineCheckCircle } from 'react-icons/ai';
import { Form } from '../login/LoginStyles';
import { Input } from '../../components/Input';

let classname: string;

const Account: React.FC = () => {

    const dispatch = useAppDispatch();
    const userSelector = useAppSelector(currentLoggedUser);
    const users = useAppSelector(selectUsers);

    const [changePass, setChangePass] = useState<boolean>(false);
    const [editName, setEditName] = useState<boolean>(false);
    const [editEmail, setEditEmail] = useState<boolean>(false);
    const [message, setMessage] = useState({
        nameMessage: '',
        emailMessage: '',
        passwordMessage: ''
    });
    const [userCredentials, setUserCredentials] = useState({
        name: '',
        email: '',
        pass: '',
        passconf: ''
    })

    const editNameHandler = (): void => {
        return setEditName(!editName);
    };

    const editEmailHandler = (): void => {
        return setEditEmail(!editEmail);
    };

    const changePassHandler = (): void => {
        setChangePass(!changePass);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        setUserCredentials({...userCredentials, [target.id]: target.value});
    };

    const submitHandler = (e: any) => {
    
        if (e === 'changeName') {
            if (userCredentials.name.length < 2) {
                classname = 'fail';
                return setMessage({...message, nameMessage: "Please enter a valid name."})
            };

            let index = users.findIndex((user: User) => user.email === userSelector?.email);
            dispatch(changeCredentials({index: index, newCredentials: {...userSelector, name: userCredentials.name}}));
            setUserCredentials({...userCredentials, name: ''});
            classname = 'success';
            setMessage({...message, nameMessage: "You've successfully changed your name."})
        };

        if (e === 'changeEmail') {
            if (!userCredentials.email.includes('@')) {
                classname = 'fail';
                return setMessage({...message, emailMessage: "Please enter a valid email address."})
            };

            let index = users.findIndex((user: User) => user.email === userSelector?.email);
            dispatch(changeCredentials({index: index, newCredentials: {...userSelector, email: userCredentials.email}}));
            setUserCredentials({...userCredentials, email: ''});
            classname = 'success';
            setMessage({...message, emailMessage: "You've successfully changed your email address."})
        };

        if (e === 'changePass') {
            if (userCredentials.pass !== userCredentials.passconf) {
                classname = 'fail';
                return setMessage({...message, passwordMessage: "Your passwords do not match."})
            };

            if (userCredentials.pass.length < 3) {
                classname = 'fail';
                return setMessage({...message, passwordMessage: "Your password should have at least 4 characters."})
            }

            let index = users.findIndex((user: User) => user.email === userSelector?.email);
            dispatch(changeCredentials({index: index, newCredentials: {...userSelector, password: userCredentials.pass}}));
            setUserCredentials({...userCredentials, pass: '', passconf: ''});
            classname = 'success';
            setMessage({...message, passwordMessage: "You've successfully changed your password."})
        }
    }

    

    return (
        <>
            <Navbar />
            <Container padding="3rem 8.5rem" fd="column">
                <h3 id="profile">{userSelector?.name.toUpperCase()}'S PROFILE:</h3>
                <ProfileInfo>
                        <p><strong>Name:</strong> {userSelector?.name}<BsPencilSquare onClick={editNameHandler} className="editIcon" /></p>
                    {editName && <div className="nameEdit">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <Input id="name" type="text" placeholder="Edit your name" onChange={e => handleChange(e)} value={userCredentials.name} />
                            <button onClick={() => submitHandler('changeName')} className="confirmEdit"><AiOutlineCheckCircle /></button>
                        </form>
                        <p className={classname}>{message.nameMessage}</p>
                    </div>}
                        <p><strong>Email:</strong> {userSelector?.email}<BsPencilSquare onClick={editEmailHandler} className="editIcon" /></p>
                    {editEmail && <div className="emailEdit">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <Input id="email" type="email" placeholder="Edit your email" onChange={e => handleChange(e)} value={userCredentials.email} />
                            <button onClick={() => submitHandler('changeEmail')} className="confirmEdit"><AiOutlineCheckCircle /></button>
                        </form>
                        <p className={classname}>{message.emailMessage}</p>
                    </div>}
                    <p id="changePassword" onClick={changePassHandler}><strong>Change password</strong> <AiOutlineArrowDown /></p>
                    {changePass && <div><Form className="changeForm" onSubmit={(e) => e.preventDefault()}>
                        <Input id="pass" type="password" onChange={e => handleChange(e)} placeholder="Enter your new password" value={userCredentials.pass} />
                        <Input id="passconf" type="password" onChange={e => handleChange(e)} placeholder="Confirm your password" value={userCredentials.passconf} />
                        <button onClick={() => submitHandler('changePass')}>Change</button>
                    </Form>
                    <p className={classname}>{message.passwordMessage}</p></div>}
                </ProfileInfo>
            </Container>
        </>
    )
};

export default Account;