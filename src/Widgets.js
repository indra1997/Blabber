import React from 'react'
import './Widgets.css'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import {TwitterTimelineEmbed, TwitterShareButton , TwitterTweetEmbed} from 'react-twitter-embed';

const Widgets = () => {
    return (
        <div className='widgets'>
            <div className = "widgets_input">
                <SearchSharpIcon className = 'widgets_searchIcon'/>
                <input placeholder='Search Twitter' type = 'text'/>
            </div>

            <div className = 'widgets_widgetContainer'>
                
                <TwitterTweetEmbed tweetId={"1461603507958530055"}/>
                <TwitterTimelineEmbed
                    sourceType = 'profile'
                    screenName = 'BudInspiring'
                    options = {{height:400}}/>

                <TwitterShareButton />
            </div>
        </div>
    )
}

export default Widgets
