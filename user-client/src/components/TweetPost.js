import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TweetContext from '../contexts/TweetContext';
import UserContext from '../contexts/UserContext';
import '../css/TweetList.css';

const TweetPost = () => {
    let [ newTweet, setNewTweet ] = useState({
        text: "",
        username: "",
        userId: "",
        date: ""
    });

    let { addTweet } = useContext(TweetContext);
    let { user } = useContext(UserContext);
    let navigate = useNavigate();

    function handleChange(event) {
        setNewTweet((prevValue) => {
            return { [event.target.name]: event.target.value,
                    username: user.username,
                    userId: user._id,
                    date: (new Date()).toLocaleString() }
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        addTweet(newTweet).then(() => {
            navigate('/');
        }).catch(error => {
            console.log(error);
            navigate('/signin');
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Tweet Feed</h1>
            <div className='tweet-post'>
                <textarea className='textarea' placeholder="New tweet" name="text" value={newTweet.text} onChange={handleChange}></textarea>
                <span className='btn-wrapper'><button className='tweet-btn'>Post!</button></span>
            </div>
            
        </form>
    )
};

export default TweetPost;