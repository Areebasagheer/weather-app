import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/weather');
  };

  return (
    <>
    <div className='back-img' >
      <div className='big-box'>
        <img className='img1' src="/img/icon1.png" alt="" />
        <h1> Weather</h1>
        <h2>ForeCasts</h2>
        <br />
        <button className="btn1" onClick={handleNavigation}>Get Started</button>
        
      </div>
     
    </div>
    </>
  )
}

export default Home