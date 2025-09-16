import React from 'react'
import { isMobile } from "react-device-detect";
import githubLogo from '../assets/github.svg'
import linkedinLogo from '../assets/linkedin.svg'
import emailLogo from '../assets/email.svg'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/trillbill",
      logo: githubLogo
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/william-finnegan-4b64819a",
      logo: linkedinLogo
    },
    {
      name: "Email",
      url: "mailto:wfinnegan13@gmail.com",
      logo: emailLogo
    }
  ]

  const apps = [
    {
      name: "Web Player Pro",
      url: "https://web-player-pro.vercel.app"
    },
    {
      name: "Trading Tutor",
      url: "https://tradingtutorai.com"
    },
    {
      name: "Guitar Loops",
      url: "https://itsrighter.com"
    }
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      const options = { behavior: 'smooth' };
      if (sectionId === "#about" && !isMobile) {
        options.block = "end";
        options.inLine = "nearest";
      }
      element.scrollIntoView(options)
    }
  }

  const navigateToApp = (appUrl) => {
    window.open(appUrl, '_blank')
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-text">Will Finnegan</span>
              <p className="footer-tagline">
                Senior Software Engineer
              </p>
              <p className="footer-tagline">&copy; {currentYear} All rights reserved.</p>
              <p className="footer-tagline">Built with ❤️ using React & Vite</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Overview</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    className="footer-link"
                    onClick={() => scrollToSection(link.href)}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Apps</h4>
            <ul className="footer-links">
              {apps.map((app, index) => (
                <li key={index}>
                  <button
                    className="footer-link"
                    onClick={() => navigateToApp(app.url)}
                  >
                    {app.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Connect</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                  aria-label={social.name}
                >
                  <img src={social.logo} alt={social.name} className="social-icon" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
