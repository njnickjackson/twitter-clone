import React, { useContext } from 'react';
import TweetPost from './TweetPost';
import TweetList from './TweetList';
import UserContext from '../contexts/UserContext';

const Home = () => {

    let { isSignedIn } = useContext(UserContext);

    return (
        <div>
            {isSignedIn ? <TweetPost /> : <h1>Tweet Feed</h1>}
            <TweetList />
        </div>
    );
};

export default Home;