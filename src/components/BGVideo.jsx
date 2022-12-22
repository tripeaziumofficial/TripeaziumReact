import React from "react";
import bgvideo from '../assets/videos/Tripeazium Final Theme Video.mp4'

const BGVideo = () => {
    return (
        <>
        <div class="container bgvideo" >
            <video src={bgvideo} autoPlay loop muted></video>
        </div>
        </>
    )
}

export default BGVideo;