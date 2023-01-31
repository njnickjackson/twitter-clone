import axios from "axios";
import { useEffect, useState } from "react";
import TweetContext from "./TweetContext";

export const TweetProvider = (props) => {

    const [ tweets, setTweets ] = useState([]);
    const baseUrl = "http://localhost:3000/api/tweets/";

    useEffect(() => {
        async function fetchData() {
            await getAllTweets();
        }
        fetchData();
    }, []);

    function getAllTweets() {
        return axios.get(baseUrl).then(response => setTweets(response.data));
    }

    function getTweet(id) {
        return tweets.find(tweet => tweet._id === id)
    }

    function addTweet(tweet) {        
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('myUserToken')}`
        };
    
        return axios.post(baseUrl, tweet, { headers: myHeaders })
            .then(response => {
                getAllTweets();
                return new Promise(resolve => resolve(response.data));
            }
        );
    }

    function editTweet(tweet) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('myUserToken')}`
        };

        return axios.put(`${baseUrl}${tweet._id}`, tweet, {headers: myHeaders})
        .then(response => {
          getAllTweets()
          return new Promise((resolve) => resolve(response.data))
        })
    }

    function deleteTweet(id) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('myUserToken')}`
        };

        axios.delete(`${baseUrl}${id}`, {headers: myHeaders})
        .then(getAllTweets)
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <TweetContext.Provider value={{
            tweets,
            getTweet,
            addTweet,
            editTweet,
            deleteTweet
        }}>
            { props.children }
        </TweetContext.Provider>
    )
};