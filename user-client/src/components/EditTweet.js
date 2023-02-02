import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TweetContext from '../contexts/TweetContext';
import '../css/TweetList.css';

const EditTweet = () => {
    let params = useParams()
    let { getTweet, editTweet } = useContext(TweetContext);
    let navigate = useNavigate();
    let [currentTweet, setCurrentTweet] = useState("")

    useEffect(() => {
        async function fetch() {
            let foundTweet = await getTweet(params.id)
            setCurrentTweet(foundTweet)
          }
          fetch()
    }, [getTweet, params.id])


    function handleChange(event) {
        setCurrentTweet((prevValue) => {
            return { ...prevValue, [event.target.name]: event.target.value }
        });
        setCurrentTweet((prevValue) => {
            return { ...prevValue, date: (new Date()).toLocaleString() }
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        editTweet(currentTweet).then(() => {
            navigate('/');
        }).catch(error => {
            console.log(error);
            navigate('/signin');
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='tweet-post'>
                <textarea className='textarea' placeholder="New tweet" name="text" value={currentTweet.text} onChange={handleChange}></textarea>
                <span className='btn-wrapper'><button className='tweet-btn'>Update</button></span>
            </div>
        </form>
    )
};

export default EditTweet;