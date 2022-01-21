import React from 'react'
import   './Sidebar.css'
import PsychologyIcon from '@mui/icons-material/Psychology';
import SidebarOption from './SidebarOption';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HomeIcon from '@mui/icons-material/Home';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@material-ui/core/Button'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            {/*TwitterIcon*/}
            < PsychologyIcon className='sidebar__twitterIcon'/>

            <SidebarOption active Icon = {HomeIcon} text = 'Home'/>
            <SidebarOption Icon = {ExploreIcon} text = 'Explore'/>
            <SidebarOption Icon = {NotificationsNoneIcon} text = 'Notifications'/>
            <SidebarOption Icon = {MailOutlineIcon} text = 'Messages'/>
            <SidebarOption Icon = {BookmarkIcon} text = 'Bookmarks'/>
            <SidebarOption Icon = {ListAltIcon} text = 'Lists'/>
            <SidebarOption Icon = {PermIdentityIcon} text = 'Profile'/>
            <SidebarOption Icon = {MoreHorizIcon} text = 'More'/>
            
            
            {/*Tweet button */}
            <Button variant = "outlined" className='sidebar__tweet' fullWidth>Blab</Button>

        </div>
    )
}

export default Sidebar
