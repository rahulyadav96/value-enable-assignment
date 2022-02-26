
import { useContext,useEffect, useState } from 'react';
import { Route, Switch,Redirect } from 'react-router-dom';
import './App.css';
import { AdminDash } from './components/AdminDash';
import { CustomerDash } from './components/CustomerDash';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Moderator } from './components/ModeratorDash';
import { Navbar } from './components/Navbar';
import { Signup } from './components/Signup';
import {AuthContext} from "./context/AuthContext";
import axios from 'axios';

function App() {
  const{auth} = useContext(AuthContext);

  const [message,setMessage] = useState("")

  useEffect(()=>{
      axios.get('/api')
      .then(res=>setMessage(res.data.message))
      .catch(err=>console.log(err))
  },[])

  return (
    <div className="App">
      <Navbar />
      {message}
      <Switch>
        <Route  exact path="/">
          {
            auth.user.role == "admin"?<AdminDash />:
            auth.user.role=="customer"?<CustomerDash />:
            auth.user.role =="moderator"?<Moderator />:
            <Home />
          }
        </Route>
        <Route path='/log-in'>
          {
            auth.token!=""? <Redirect to="/" />:<Login />
          }
        </Route>
        <Route path="/sign-up" >
          <Signup />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
