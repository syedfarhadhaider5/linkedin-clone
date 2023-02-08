import React from 'react'
import   {Navigate}  from 'react-router-dom'
import "./HeroSection.css";
import { useSelector, useDispatch } from 'react-redux'
import {SignIn} from "../state/features/userSlice";
import { auth, provider } from "../firebase";

function HeroSection() {
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.Users.user);

    const openPopup = () =>{
        auth.signInWithPopup(provider).then((result) => dispatch(SignIn(result.user))
        ).catch(error => alert(error.message))
    }
   
   
  return (
    <div className='HeroSection'>
        <div>
            <h1>Welcome to your professional community</h1>
            {userState && <Navigate to="/home" />}
            <div className='offer_card'>
                <h3>Search for a job</h3>
            </div>
            <div className='offer_card'>
                <h3>Find a person you know</h3>
            </div>
            <div className='offer_card'>
                <h3>Learn a new skill </h3>
            </div>
            <div className='google_btn'>
                <button onClick={() => dispatch(openPopup())}>
                    <img src="/images/google.svg" alt="" />
                    Sign in with Google
                </button>
            </div>
        </div>
        <img src="/images/login-hero.svg" alt="" />
    </div>
  )
}


export default HeroSection