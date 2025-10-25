import React from 'react'
import './About.css'
const About = () => {
  return (
    <div className='about d-flex justify-content-center align-items-center'>
      <div className="container">
        <div className='d-flex'>
          <h1 >About Us</h1>
        </div>
        <p>Welcome to TODO App, your personal task management assistant! Our app is designed to help you stay organized, increase productivity, and never forget important tasks. Whether it’s daily chores, work assignments, or personal goals, you can easily add, update, and delete tasks with just a few clicks. <br></br>

          Built with the MERN stack (MongoDB, Express, React, Node.js), our app combines a secure backend with a dynamic and responsive frontend. MongoDB safely stores your tasks and login details, while Express and Node.js handle the server and APIs to make sure everything runs smoothly. React provides a clean, interactive interface, so managing your tasks is fast and intuitive.<br/>

          Our app also includes user authentication, ensuring your tasks remain private and personalized. Plus, its responsive design means you can manage your tasks on any device — desktop, tablet, or mobile — anytime, anywhere. <br />

          With TODO App, our goal is to make task management simple, effective, and enjoyable. Stay organized, focus on what matters, and achieve your goals without the stress of forgetting anything.</p>
      </div>
    </div>
  )
}

export default About