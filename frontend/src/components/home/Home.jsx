import React from 'react'
import './Home.css'
import {useNavigate} from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='home d-flex justify-content-center align-items-center'>
        <div className="container d-flex flex-column justify-content-center align-items-center text-center">
            <h1 className='text-center'>Organize your <br /> work and life, finally. </h1>
            <p>Become focused, Organized, and clam with <br />
            tdo app . The world's #1 task manager app.</p>
            <button className="home-btn p-2" onClick={()=>{navigate('./todo')}}>Make todo List</button>
        </div>
    </div>
  )
}

export default Home