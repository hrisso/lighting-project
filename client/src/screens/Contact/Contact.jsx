import "./Contact.css";
import Layout from "../../components/shared/Layout/Layout";

const Contact = (props) => {

  return (
    <div> 
      <Layout user={props.user}>
        <h1 className='team'>Meet the Team</h1>   
        <p className="meet">The Linterna app was built in a seven day sprint by the team members below. This project was developed with React, Express, and MongoDB as well as styled with CSS. </p>
        <div className="container">
          <div className="contactcard">
            <h4>Elizabeth Rights</h4> 
            <a href="https://www.linkedin.com/in/er812/" target="_blank">
              <img 
                src="https://sguru.org/wp-content/uploads/2018/02/linkedin-png-linkedin-icon-1600.png" target="_blank" /> 
            </a> 
            <a href="https://github.com/ER812" target="_blank"> 
              <img
                src="http://pngimg.com/uploads/github/github_PNG45.png" target="_blank" />
            </a>
          </div> 
          <div className="contactcard">
            <h4>Heather Risso</h4>  
            <a href="https://www.linkedin.com/in/heatherrisso/" target="_blank">
              <img
                src="https://sguru.org/wp-content/uploads/2018/02/linkedin-png-linkedin-icon-1600.png" target="_blank" />
            </a> 
            <a href="https://github.com/hrisso" target="_blank">
              <img src="http://pngimg.com/uploads/github/github_PNG45.png" target="_blank"/>
            </a>
          </div>
          <div className="contactcard">
            <h4>Saudi Rodriguez</h4> 
            <a href="https://www.linkedin.com/in/saudirodriguez/" target="_blank">
              <img
                src="https://sguru.org/wp-content/uploads/2018/02/linkedin-png-linkedin-icon-1600.png" target="_blank" /> 
            </a> 
            <a href="https://github.com/SaudiR" target="_blank">
              <img src="http://pngimg.com/uploads/github/github_PNG45.png" target="_blank"/>
            </a>
          </div> 
          <div className="contactcard">
            <h4>Markell Dehaney</h4>
          <a href="https://www.linkedin.com/in/markell-dehaney/" target="_blank">
            <img
              src="https://sguru.org/wp-content/uploads/2018/02/linkedin-png-linkedin-icon-1600.png" target="_blank" />
          </a> 
          <a href="https://github.com/markelld" target="_blank">
            <img src="http://pngimg.com/uploads/github/github_PNG45.png" target="_blank"/>
            </a>  
          </div>  
        </div>
        <p className="credit">Homepage lantern photo courtesy of Mick Roth</p>
      </Layout>
    </div> 
    
  )
}

export default Contact;

        