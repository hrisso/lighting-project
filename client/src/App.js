import './App.css';
import Layout from "./components/shared/Layout/Layout";
import SignIn from "./screens/SignIn/SignIn";
import SignUp from "./screens/SignUp/SignUp";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Layout />
      <Route exact path="/sign-in">
        <SignIn />
      </Route>
      <Route exact path="/sign-up">
        <SignUp />
      </Route>
    </div>
  );
}

export default App;
