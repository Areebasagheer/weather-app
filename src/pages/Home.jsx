import React from 'react'
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <>
    <div className='back-img' >
      <div className='big-box'>
        <img className='img1' src="/img/icon1.png" alt="" />
        <h1> Weather</h1>
        <h2>ForeCasts</h2>
        <br />
        <Link to="/weather">
            <button className="btn1">Get Started</button>
          </Link>
      </div>
     
    </div>
    </>
  )
}

export default Home