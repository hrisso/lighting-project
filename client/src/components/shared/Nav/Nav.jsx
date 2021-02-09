import "./Nav.css"
import { NavLink } from "react-router-dom";

const Nav = ({ user }) => {
  const signedInOptions = (
    <>
      <NavLink to="/add">Add</NavLink>
      <NavLink to="/sign-out">Sign out</NavLink>
    </>
  )
  const signedOutOptions = (
    <>
      <NavLink to="/sign-up">Sign up </NavLink>
      <NavLink to="/sign-in">Sign in</NavLink>
    </>
  )
  return (
    <nav>
      <div className="nav">
        <NavLink to="/">Linterna</NavLink>
        <div className="links">
          <NavLink to="/products">Products</NavLink>
          {user ? signedInOptions : signedOutOptions}
          {user && <div>{user.username}</div>}
        </div>
      </div>
    </nav>
  )
}
export default Nav; 