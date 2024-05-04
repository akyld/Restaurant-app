import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="footer-content-logo" src={assets.logo} alt="" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            perferendis esse excepturi porro voluptatum deleniti soluta tempora
            quidem inventore aliquam accusamus cupiditate dolore rerum animi
            exercitationem nulla, repudiandae quae eius?
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>+90-212-123-45-67</li>
            <li>contact@tastebudz.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">© 2024 TasteBudz - All Right Reserved.</p>
    </div>
  )
}

export default Footer

/*  */
