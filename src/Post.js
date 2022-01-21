import {  Avatar } from '@mui/material'
import BeenhereIcon from '@mui/icons-material/Beenhere';
import React,{forwardRef} from 'react'
import './Post.css'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import LoopIcon from '@mui/icons-material/Loop';
import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Post = forwardRef( ({displayName,userName,varified,text,image,avatar},ref) => {
    return (
        <div className = 'post' ref = {ref}>
            <div className = 'post_avatar'>
                <Avatar src={avatar}/>
            </div>
            <div className = 'post_body'>
                <div className ='post_header'>
                    <div className ='post_headerText'>
                        <h3 >
                            {displayName}{" "}
                            <span className = 'post_headerSpecial'>
                                {varified&& < BeenhereIcon className = 'post_badge'/>}@{userName}
                                
                            </span>
                        </h3>

                    </div>
                    <div className='post_headerDescription'>
                        <p>{text}</p>
                    </div>
                </div>
                
                <img src={image} alt =''/>
                
                <div className = 'post_footer'>
                    < ChatBubbleOutlineOutlinedIcon fontSize='small'/>
                    < LoopIcon fontSize='small'/>
                    < FavoriteBorderOutlinedIcon fontSize='small'/>
                    < PublishOutlinedIcon fontSize='small'/>

                </div>
            </div>
    
        </div>
    )
});

export default Post
