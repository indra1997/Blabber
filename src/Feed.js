import React,{useState,useEffect} from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
import db from './firebase';
import FlipMove from 'react-flip-move'

const Feed = () => {
    const [posts,setPosts]= useState([]);

    useEffect(()=>{
        db.collection('posts').onSnapshot(snapshot=>(
            setPosts(snapshot.docs.map(doc=>doc.data()))
        ))
    },[]);
    return (
        <div className = 'feed'>
            {/*Header*/}
            <div className = 'feed_header'>
                <h2>Home</h2>
            </div>
            {/*Tweetbox*/}
            <TweetBox/>

            <FlipMove>{posts.map(post=>  (
                <Post key={post.text} displayName={post.displayName} userName={post.userName} varified={post.varified} text={post.text} image={post.image} avatar={post.avatar}/>
            ))}
            </FlipMove>
            {/*post*/}
            {/*post*/}
            {/*[post]*/}

        </div>
    )
}

export default Feed
