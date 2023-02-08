import React from 'react'
import Adds from './Adds'
import HomeHeader from './HomeHeader'
import Left from './Left'
import Middle from './Middle'
import Right from './Right'
import "./Home.css";
function Home() {
  return (
    <div className='Home'>
        <HomeHeader />
        <Adds />
        <div className='home__body'>
           <Left />
           <Middle />
           <Right />
        </div>
    </div>
  )
}

export default Home