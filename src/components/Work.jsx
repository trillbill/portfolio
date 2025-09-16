import React from 'react'

const Work = () => {
  const apps = [
    {
      name: "Web Player Pro",
      url: "https://web-player-pro.vercel.app",
      description: "A web based video player for testing HLS and DASH playback. Choose a sample test stream or provide your own stream URL to test. View video metrics and event logs to ensure your stream is playing correctly."
    },
    {
      name: "Trading Tutor",
      url: "https://tradingtutorai.com",
      description: "A learning platform for aspiring traders. Trading Tutor allows users to engage with in depth video lessons, take quizzes to test their knowledge, log their trades in a journal and engage with their own AI tutor to get personalized feedback on their trades."
    },
    {
      name: "Guitar Loops",
      url: "https://itsrighter.com",
      description: "A website where I share my guitar loops with the world. Users can browse the loops, listen to them and download them all for free."
    }
  ]

  const navigateToApp = (appUrl) => {
    window.open(appUrl, '_blank')
  }

  return (
    <section id="work" className="work">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Work</h2>
          <p className="section-subtitle">Projects I've built and applications I've created</p>
        </div>
        
        <div className="work-grid">
          {apps.map((app, index) => (
            <div key={index} className="work-card">
              <div className="work-card-header">
                <h3 className="work-title">{app.name}</h3>
                <button 
                  className="work-link"
                  onClick={() => navigateToApp(app.url)}
                  aria-label={`Visit ${app.name}`}
                >
                  Visit App →
                </button>
              </div>
              <p className="work-description">{app.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work