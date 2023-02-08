import React from 'react'
import "./HomeHeader.css"; 
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import EmailIcon from '@mui/icons-material/Email';
import { Avatar } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import { useSelector, useDispatch } from 'react-redux'
import { auth, provider } from "../firebase";
import {Signout} from "../state/features/userSlice";
import   {Navigate}  from 'react-router-dom'


auth.signOut()
function HomeHeader() {
  const userState = useSelector((state) => state.Users.user);
  const dispatch = useDispatch();
  const Logout = () =>{
    if(auth.signOut())
    {
      dispatch(Signout());
    }
  }
  return (
    <div className='HomeHeader'>
       {!userState && <Navigate to="/" />}
       <div>
          <img src="/images/home-logo.svg" alt="" />
       </div>
       <div className='search'>
          <SearchOutlinedIcon /> 
          <input type="text" placeholder='Search' />
       </div>
       <div className='links'>
          <ul>
              <li>
                <a className='active'>
                   <HomeIcon /> 
                   <span>Home</span>
                </a>
              </li>
              <li>
                <a>
                   <PeopleIcon /> 
                   <span>My network</span>
                </a>
              </li>
              <li>
                <a>
                   <WorkIcon /> 
                   <span>Jobs</span>
                </a>
              </li>
              <li>
                <a>
                   <EmailIcon /> 
                   <span>Messaging</span>
                </a>
              </li>
              <li>
                <a>
                   <NotificationsIcon />
                   <span>Notification</span>
                </a>
              </li>
              <li className='show_logout'>
                <a className='user_avatar'>
                  {userState &&  
                   <Avatar   sx={{ width: 28, height: 28 }} alt="profile not found" src={userState.photoURL} />
                 }
                 {userState && <span>{userState.displayName} <ArrowDropDownIcon /></span>}
                   
                </a>
                <div className='logout' onClick={Logout} >Logout </div>
              </li>
              <li>
                <a className='user_avatar'>
                  <WorkspacesIcon />
                   <span>Work <ArrowDropDownIcon /></span>
                </a>
              </li>
              
          </ul>
       </div>
    </div>
  )
}

export default HomeHeader