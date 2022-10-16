import React from 'react'
import "./home.css"
import video from "../../newvideo.mp4"

const home = () => {
  return (
    <section id="home">
    <video className='back-video' autoPlay loop muted >
    <source src={video} type="video/mp4" />
    </video>
     
    </section>
  )
}

export default home