import "./Footer.css";  
import { Link } from "react-router-dom";


const Footer = (props) => (
  <footer>
    <p>Be Bold. Be Bright.</p>
    <a href="https://github.com/hrisso/lighting-project" target="_blank" alt="Github">
      <img src="https://res.cloudinary.com/doas1ztbf/image/upload/v1612902916/Octocat_kh8pkg.png"/>
    </a> 
    <Link className="contact-link" to="/contact">
      Contact Us
    </Link>
  </footer>
)
export default Footer;