import { Avatar,Button } from '@mui/material'
import React,{useState} from 'react'
import './TweetBox.css'
import db from './firebase'
const TweetBox = () => {
    const[tweetMessage,setTweetMessage]= useState("");
    const[tweetImage,setTweetImage]= useState("");

    const sendTweet = e =>{
        e.preventDefault();

        db.collection('posts').add({
            displayName:'Indrajit J',
            userName: 'BudInspiring',
            varified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 'https://media-exp1.licdn.com/dms/image/C5603AQHeKUtDIdVb0A/profile-displayphoto-shrink_800_800/0/1517071653202?e=1646265600&v=beta&t=WAzVeQQgsvjOVzqMFcnth1tXt3jasKkwB3xfBOJ-AxU'
        });
        setTweetMessage("");
        setTweetImage("");

    };
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <Avatar src='https://media-exp1.licdn.com/dms/image/C5603AQHeKUtDIdVb0A/profile-displayphoto-shrink_800_800/0/1517071653202?e=1646265600&v=beta&t=WAzVeQQgsvjOVzqMFcnth1tXt3jasKkwB3xfBOJ-AxU'/>
                    <input 
                        onChange={e=>setTweetMessage(e.target.value)}
                        value = {tweetMessage}
                        placeholder="What's Happening ?"/>
                </div>
                <input 
                    onChange={e=>setTweetMessage(e.target.value)}
                    value = {tweetImage}
                    className='tweetBox_imageInput'
                    placeholder='enter image URL'/>

                <Button type = 'submit' onClick = {sendTweet}className='tweetBox_tweetButton' fullWidth>Blab</Button>
            </form>
        </div>
    )
}

export default TweetBox
