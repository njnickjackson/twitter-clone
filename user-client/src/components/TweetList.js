import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import TweetContext from '../contexts/TweetContext';
import UserContext from '../contexts/UserContext';
import '../css/TweetList.css';

const TweetList = () => {

    let { deleteTweet } = useContext(TweetContext);
    let { isSignedIn, user } = useContext(UserContext);

    function handleDeleteTweet(id) {
        deleteTweet(id)
    }

    return (
        <TweetContext.Consumer>
        {
            ({ tweets }) => {
                return <div>
                        {tweets.map((tweet) => {
                            return (
                                <div className='tweet'>
                                    <div className='tweet-wrapper' key={tweet.text}>
                                        <p className='tweet-text'>{tweet.text}</p>
                                        <div className='tweet-buttons'>
                                            <Link to={`profile/${tweet.userId}`} className='tweet-username'>{tweet.username}</Link>
                                            <span className='tweet-date'>, {tweet.date}</span>
                                            <br />
                                            {(isSignedIn && user._id === tweet.userId) && 
                                                <div className='edit-and-delete'>
                                                    <Link className='tweet-link-edit' to={`edit/${tweet._id}`}>Edit</Link>
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
    );
}

export default TweetList;