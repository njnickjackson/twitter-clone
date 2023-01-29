import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import '../css/SignUp.css';

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");

    let { createUser } = useContext(UserContext);
    let navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        createUser(username, password, firstname, lastname, city, state).then(() => {
            navigate('/signin');
        }).catch(error => {
            console.log(error);
            window.alert('Failed registration: error creating user');
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>REGISTER</h1>
            <br></br>
            <div className='sign-up'>
                <div className='sign-up-input'>
                    <span>Username  </span>
                    <input placeholder="Enter Username" type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} />
                </div>
                <br></br>
                <div className='sign-up-input'>
                    <span>Password  </span>
                    <input placeholder="Enter Password" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <br />
                <div className='sign-up-input'>
                    <span>First Name </span>
                    <input placeholder="Enter First Name" type="text" name="firstname" value={firstname} onChange={e => setFirstname(e.target.value)} />
                </div>
                <br />
                <div className='sign-up-input'>
                    <span>Last Name </span>
                    <input placeholder="Enter Last Name" type="text" name="lastname" value={lastname} onChange={e => setLastname(e.target.value)} />
                </div>
                <br />
                <div className='sign-up-input'>
                    <span>City </span>
                    <input placeholder="Enter City" type="text" name="city" value={city} onChange={e => setCity(e.target.value)} />
                </div>
                <br />
                <div className='sign-up-input'>
                <span>State </span>
                <input placeholder="Enter State" type="text" name="state" value={state} onChange={e => setState(e.target.value)} />
                </div>
                <br />
            </div>
            <button className='sign-up-btn'>Sign Up</button>
        </form>
    )
};

export default SignUp;