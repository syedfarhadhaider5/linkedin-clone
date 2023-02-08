import React, {useState} from 'react'
import CloseIcon from '@mui/icons-material/Close';
import "./PostModel.css";
import { Avatar } from '@mui/material';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import ReactPlayer from 'react-player/youtube';
import {useSelector} from "react-redux";
import db from "../firebase";
import firebase from "../firebase";
import { storage, ref, uploadBytes, getDownloadURL } from "../firebase";

function PostModel(props) {
    const [editorText, seteditorText] = useState("")
    const [sharedimage, setSharedimage] = useState("")
    const [videoLink, setvideoLink] = useState("")
    const [assetarea, setassetArea] = useState("")
    const [imageurl, Seturl] = useState("")

    const userState = useSelector((state) => state.Users.user);
    const dt = new Date();
    
    const savePost = (e) =>{
        e.preventDefault();
       // const storageRef = ref(storage, `image/${sharedimage.name}`);
        // 'file' comes from the Blob or File API
      //  uploadBytes(storageRef, sharedimage);
       // getDownloadURL(storageRef).then((url) =>{
           // Seturl(url);
      //  })
 
        db.collection("articles").add({
            name: userState.displayName,
            profile: userState.photoURL, 
            image: sharedimage,
            date: dt,
            videolink: videoLink,
            description: editorText
        }) 

        reset(e);

    }
    const reset = (e) =>{
        props.handleHideshowmodel(e);

        seteditorText("");
        setSharedimage("");
        setvideoLink("");
        setassetArea("");
        Seturl("");
        sharedimage("");

   }
   const handlefiles = (e) =>{
       
        setSharedimage(e.target.value);
    }
    return (
    <>
    {props.showmodel === 'open' &&
    <div className='PostModel'>
        <div className="modelcontent">
            <div className="header">
                <h2>Create a post</h2>
                <CloseIcon onClick={(e) => reset(e)} />
            </div>
            <div className="model_middle">
                <div className="user">
                  {userState &&  <img src={userState.photoURL} alt="" />} 
                  {userState &&  <h3>{userState.displayName}</h3>} 
                    
                </div>
                <textarea value={editorText} onChange={(e) =>seteditorText(e.target.value)} rows={5} cols={45} placeholder='What do you want to talk?'></textarea>
            </div>
            { assetarea === "media" ?(
            <div className='videourl'>
                 <input 
                        value={sharedimage}
                        type="text" onChange={(e) => handlefiles(e)}
                        placeholder="Enter Photo url"
                 />

            </div>
            ) : (assetarea === "urls"  &&
            <div className="videourl">
                    <input 
                        type="text"
                        placeholder='Enter video url'
                        value={videoLink}
                        onChange={(e) =>setvideoLink(e.target.value)}    
                        />
                        {videoLink && <ReactPlayer width={"100"} url={videoLink} />}
            </div>
            )
            }
            <div className="model_bottom">
                <div className="leftModel">
                    <button onClick={() =>setassetArea("media")}>
                        <InsertPhotoOutlinedIcon />
                    </button>
                    <button onClick={() =>setassetArea("urls")}>
                        <VideocamOutlinedIcon />
                    </button>
                </div>
                <button onClick={(e)=> savePost(e)} disabled={!editorText ? true : false} className={!editorText ? "disablebtn" : ""}>Post</button>
            </div>
            
        </div>
    </div>
}
    </>
  )
}

export default PostModel