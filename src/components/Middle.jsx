import { Avatar } from '@mui/material';
import React,{useState, useEffect} from 'react'
import "./Middle.css";
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import VideocamIcon from '@mui/icons-material/Videocam';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ArticleIcon from '@mui/icons-material/Article';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import PostModel from './PostModel';
import db from "../firebase";
import ReactPlayer from 'react-player';
import {useSelector} from "react-redux";

function Middle() {
  const [showModel, setshowModel] = useState("close");
  const [article, setArticles] = useState([]);
  const userState = useSelector((state) => state.Users.user);

  const handleHideShowModel = (e) =>{
      e.preventDefault();
      switch (showModel) {
        case "open":
          setshowModel("close");
          break;
        case "close":
          setshowModel("open");
          break;
        default:
          setshowModel("close");
          break;
      }
  }
  useEffect(() => {
    db.collection('articles').orderBy("date", "desc").onSnapshot(snapshot => {
      setArticles(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data()})))
    })
  }, [])
  return (
    <div className='Middle'>
        <div className="middle_area">
        <div className="top">
           {userState &&  <img src={userState.photoURL} alt="" />}
            <button onClick={(e) => handleHideShowModel(e)}>
                <span>Start a post  </span>
            </button>
        </div>
        <div className="bottom">
                <button>
                  <InsertPhotoIcon />
                  <span>Photo</span>
                </button>
                <button>
                  <VideocamIcon />
                  <span>Video</span>
                </button>
                <button>
                  <EventAvailableIcon />
                  <span>Event</span>
                </button>
                <button>
                  <ArticleIcon />
                  <span>Write article </span>
                </button>
        </div>
        </div>
        {article.map((article) => (

        <div className="post_container">
            <div className='top_post'>
                  <a>
                      <img src={article.data.profile} alt="" />
                      <div>
                          <span>{article.data.name}</span>
                          <span>{new Date(article.data.date?.toDate()).toGMTString()}</span>
                      </div>
                  </a>
                <MoreVertIcon />
            </div>
            <div className="post_description">
              <span>{article.data.description}</span>
            </div>
            <div className="post_image">
              {article.data.videolink &&  <ReactPlayer  
                 width={"100%"} 
                 url={article.data.videolink} />}
                 {article.data.image &&  <img src={article.data.image} /> }
             
            </div>
            <div className="post_interaction">
                <button>
                    <FavoriteBorderOutlinedIcon  fontSize="small"/>
                    <span>Like</span>
                </button>
                <button>
                    <ModeCommentOutlinedIcon fontSize="small" />
                    <span>Comment</span>
                </button>
                <button>
                    <IosShareOutlinedIcon  fontSize="small"/>
                    <span>Share</span>
                </button>
                <button>
                    <SendOutlinedIcon  fontSize="small"/>
                    <span>Re Tweet</span>
                </button>
            </div>
        </div>
))}
        <PostModel showmodel={showModel} handleHideshowmodel={handleHideShowModel} />
    </div>
  )
}

export default Middle