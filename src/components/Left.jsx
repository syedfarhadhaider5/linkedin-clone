import React from 'react'
import {useSelector} from "react-redux";
import "./Left.css"; 


export default function Left() {
   const userState = useSelector((state) => state.Users.user);

  return (
    <div className='left'>
       <div className="left_card">
            <div className='card_bg'></div>
            <div className='card_profile'></div>
            <div className="content">
              {userState &&  <h3>Welcome, {userState.displayName}</h3>} 
                <a href=''>Add a photo</a>
            </div>
            <div className="content_1">
               <span>Connection
                <b>Grow your network</b>
               </span>
               <img src="/images/feed-icon.svg" alt="" />
            </div>
            <div className="content_2">
               <span>
                <img src="/images/item-icon.svg" alt="" />
                <b>My items</b>
               </span>
            </div>
       </div>
       <div className="left_card_bottom">
          <span className="groups">Groups</span>
          <span  className="events">Events <img src="/images/plus-icon.svg" alt="" /></span>
          <span>Follow Hashtags</span>
          <span>Discover more</span>
       </div>
    </div>
  )
}

