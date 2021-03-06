import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './screens/Home/Home';
import Products from './screens/Products/Products';
import AddProduct from './screens/AddProduct/AddProduct';
import EditProduct from './screens/EditProduct/EditProduct';
import ProductDetail from './screens/ProductDetail/ProductDetail';
import Contact from './screens/Contact/Contact';
import { Route, Switch, Redirect } from 'react-router-dom';
import { verifyUser } from './services/users';
import SignUp from './screens/SignUp/SignUp';
import SignIn from './screens/SignIn/SignIn';
import SignOut from './screens/SignOut/SignOut.jsx';
import { SliderData } from "./screens/Home/SliderData";

const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])

  const clearUser = () => setUser(null)

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Home user={user} slides={SliderData} />
        </Route>
        <Route path="/sign-up">
          <SignUp setUser={setUser} />
        </Route>
        <Route path="/sign-in">
          <SignIn setUser={setUser} />
        </Route>
        <Route path="/sign-out">
          <SignOut setUser={setUser} clearUser={clearUser} />
        </Route>
        <Route exact path="/products">
          <Products user={user} />
        </Route>
        <Route path="/add">
          {user ? <AddProduct user={user} /> : <Redirect to="/sign-up" />}
        </Route>
        <Route exact path="/products/:id/edit">
          {user ? <EditProduct user={user} /> : <Redirect to='/' />}
        </Route>
        <Route exact path="/products/:id">
          <ProductDetail user={user} />
        </Route> 
        <Route exact path="/contact">
          <Contact user={user}/>
        </Route>
      </Switch>
    </div>
  )
}

export default App;
