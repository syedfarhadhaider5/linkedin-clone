import React from 'react'
import "./Right.css";
import TagIcon from '@mui/icons-material/Tag';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
function Right() {
  return (
    <div className='Right'>
      <div className="right_card">
          <div className="card_top">
             <span>Add to your feed</span>
             <img src="/images/feed-icon.svg" alt="" />
          </div>
          <div className="card_middle">
            <TagIcon />
            <div className='follow'>
              <span>#linkedin</span>
              <button>Follow</button>
            </div>
          </div>
          <div className="card_middle">
            <TagIcon />
            <div className='follow'>
              <span>#imrankhan</span>
              <button>Follow</button>
            </div>
          </div>
          <div className='recommed'>
             <a>View all recommendations</a>
             <ArrowRightAltIcon />
          </div>
      </div>
    </div>
  )
}

export default Right