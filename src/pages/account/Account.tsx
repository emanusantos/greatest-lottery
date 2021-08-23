import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import { Container } from '../login/LoginStyles';
import { useAppSelector } from '../../hooks/reduxhooks';
import { token, id } from '../../store/regSlice';
import { ProfileInfo } from './AccountStyles';
import { BsPencilSquare } from 'react-icons/bs';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { Input } from '../../components/Input';
import { useHistory } from 'react-router';
import axios from 'axios';

let classname: string;

const Account: React.FC = () => {

    useEffect(() => {
        userCheck();
        getUser();
    }, []);

    const userToken = useAppSelector(token);
    const userId = useAppSelector(id)

    const userCheck = (): void => {
        if (!userToken) {
            history.push('/login')
        };
    };

    const getUser = async (): Promise<void> => {
        await axios.get(`http://localhost:3333/users/${userId}`)
            .then((response) => {
                console.log(response);
                setInfo(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
    
    };

    const editUserName = async (): Promise<void> => {
        await axios.put(`http://localhost:3333/users/${userId}`, {
            name: userCredentials.name
        })
        .then((response) => {
            console.log(response);
            setInfo(response.data);
        })
        .catch((err) => {
            console.log(err);
        })
    };

    const editUserEmail = async (): Promise<void> => {
        await axios.put(`http://localhost:3333/users/${userId}`, {
            email: userCredentials.email
        })
        .then((response) => {
            console.log(response);
            setInfo(response.data);
        })
        .catch((err) => {
            console.log(err);
        })
    };

    const history = useHistory();

    const [info, setInfo] = useState<any>({});
    const [editName, setEditName] = useState<boolean>(false);
    const [editEmail, setEditEmail] = useState<boolean>(false);
    const [message, setMessage] = useState({
        nameMessage: '',
        emailMessage: ''
    });
    const [userCredentials, setUserCredentials] = useState({
        name: '',
        email: ''
    })

    const editNameHandler = (): void => {
        return setEditName(!editName);
    };

    const editEmailHandler = (): void => {
        return setEditEmail(!editEmail);
    };

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

            editUserName();
            classname = 'success';
            setMessage({...message, nameMessage: "You've successfully changed your name."})
        };

        if (e === 'changeEmail') {
            if (!userCredentials.email.includes('@')) {
                classname = 'fail';
                return setMessage({...message, emailMessage: "Please enter a valid email address."})
            };

            editUserEmail();
            classname = 'success';
            setMessage({...message, emailMessage: "You've successfully changed your email address."})
        };

    };

    

    return (
        <>
            <Navbar />
            <Container padding="3rem 8.5rem" fd="column">
                <h3 id="profile">{info.name ? info.name.toUpperCase() : info.name}'S PROFILE:</h3>
                <ProfileInfo>
                        <p><strong>Name:</strong> {info.name} <BsPencilSquare onClick={editNameHandler} className="editIcon" /></p>
                    {editName && <div className="nameEdit">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <Input id="name" type="text" placeholder="Edit your name" onChange={e => handleChange(e)} value={userCredentials.name} />
                            <button onClick={() => submitHandler('changeName')} className="confirmEdit"><AiOutlineCheckCircle /></button>
                        </form>
                        <p className={classname}>{message.nameMessage}</p>
                    </div>}
                        <p><strong>Email:</strong> {info.email}<BsPencilSquare onClick={editEmailHandler} className="editIcon" /></p>
                    {editEmail && <div className="emailEdit">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <Input id="email" type="email" placeholder="Edit your email" onChange={e => handleChange(e)} value={userCredentials.email} />
                            <button onClick={() => submitHandler('changeEmail')} className="confirmEdit"><AiOutlineCheckCircle /></button>
                        </form>
                        <p className={classname}>{message.emailMessage}</p>
                    </div>}
                </ProfileInfo>
            </Container>
        </>
    )
};

export default Account;