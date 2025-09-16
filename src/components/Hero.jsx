import React from 'react'
import { isMobile } from "react-device-detect";

const Hero = () => {
  const avatar = 'https://avatars.githubusercontent.com/u/20759711?v=4';
  const videoAvatar = 'https://d23vnzhpxwsomk.cloudfront.net/videoAvatar3.mp4';

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const options = { behavior: 'smooth' };
      if (sectionId === "about" && !isMobile) {
        options.block = "end";
        options.inLine = "nearest";
      }
      element.scrollIntoView(options)
    }
  }

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
            <div className="hero-image">
              <video 
                className="hero-avatar" 
                autoPlay 
                loop 
                muted 
                playsInline
                preload="metadata"
                onError={(e) => {
                  console.error('Video failed to load:', e);
                  const videoElement = e.target;
                  const parent = videoElement.parentNode;
                  const img = document.createElement('img');
                  img.src = avatar;
                  img.alt = 'Will Finnegan';
                  img.className = 'hero-avatar';
                  parent.replaceChild(img, videoElement);
                }}
              >
                <source src={videoAvatar} type="video/mp4" />
                {/* Fallback for browsers that don't support video */}
                <img src={avatar} alt="Will Finnegan" />
              </video>
            </div>

          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Will</span>
            </h1>
            <h2 className="hero-subtitle">
              Senior Software Engineer
            </h2>
            <p className="hero-description">
            I build performant, user-friendly web applications that turn media tech into product.
            </p>
            <div className="hero-actions">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('work')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
