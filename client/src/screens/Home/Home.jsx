import "./Home.css"; 
import Layout from "../../components/shared/Layout/Layout"; 
import Carousel from 'react-bootstrap/Carousel';

const Home = ( ) => {
  return (
    <div>
      <Layout />
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1582492065409-9315e8075a2c?ixid=MXwxMjA3fDB8MHxzZWFy[…]58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1604610728890-6f4b631ed081?ixid=MXwxMjA3fDB8MHxzZWFy[…]58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1574286963546-2afa6f51a6cf?ixid=MXwxMjA3fDB8MHxzZWFy[…]fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
export default Home;