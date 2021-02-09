import Nav from "../Nav/Nav";
import "./Layout.css";
import Footer from "../Footer/Footer";

const Layout = (props) => (
  <div className="layout">
    <Nav user={props.user} />
    <div>
      {props.children}
    </div>
    <Footer />
  </div>
)
export default Layout; 
