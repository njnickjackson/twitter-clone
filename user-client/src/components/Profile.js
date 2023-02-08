import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import TweetContext from '../contexts/TweetContext';
import UserContext from '../contexts/UserContext';

const Profile = () => {
    
    let [clickedUser, setClickedUser] = useState("");
    let { deleteTweet } = useContext(TweetContext);
    let { isSignedIn, user, allUsers } = useContext(UserContext);
    let params = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        setClickedUser(allUsers.filter(user => user._id === params.id)[0])
    }, [allUsers, params.id])

    function handleDeleteTweet(id) {
        deleteTweet(id)
        navigate('/')
    }

    return (
        <div>
            <h1>User Profile: {clickedUser.username}</h1>
            <p><strong>Name:</strong> {clickedUser.firstname} {clickedUser.lastname}</p>
            <p><strong>Location:</strong> {clickedUser.city}, {clickedUser.state}</p>
            <h3>Tweets</h3>
            <TweetContext.Consumer>
            {
                ({ tweets }) => {
                    return <div>
                            {tweets.filter((tweet) => tweet.userId === params.id).map((tweet) => {
                                return (
                                    <div className='tweet'>
                                        <div className='tweet-wrapper' key={tweet.text}>
                                            <p className='tweet-text'>{tweet.text}</p>
                                            <div className='tweet-buttons'>
                                                <Link to={`#`} className='tweet-username'>{tweet.username}</Link>
                                                <span className='tweet-date'>, {tweet.date}</span>
                                                <br />
                                                {(isSignedIn && user._id === tweet.userId) && 
                                                    <div className='edit-and-delete'>
                                                        <Link className='tweet-link-edit' to={`../edit/${tweet._id}`}>Edit</Link>
                                                        <button className='tweet-link-delete' onClick={handleDeleteTweet.bind(this, tweet._id)}>Delete</button>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                }
            }
            </TweetContext.Consumer>
        </div>
    );
};

export default Profile;