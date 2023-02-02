import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import '../css/SignUp.css';

const SignIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let { signInUser } = useContext(UserContext);
    let navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        signInUser(username, password).then(() => {
            navigate('/');
        }).catch(error => {
            console.log(error);
            window.alert('Failed login');
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>LOGIN</h1>
            <br />
            <div className='sign-up-input'>
                <span>Username  </span>
                <input placeholder="Enter Username" type="text" name="username" onChange={e => setUsername(e.target.value)} />
            </div>
            <br></br>
            <div className='sign-up-input'>
                <span>Password  </span>
                <input placeholder="Enter Password" type="password" name="password" onChange={e => setPassword(e.target.value)} />
            </div>
            <br />
            <button className='sign-up-btn'>
                Sign In
            </button>
        </form>
    );
};

export default SignIn;