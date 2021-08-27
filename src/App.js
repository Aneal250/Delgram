import React, { useState, useEffect} from 'react';
import axios from 'axios'
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Home from './Components/Pages/Home'
import EditProfile from './Components/ProfilePage/EditProfile';
import SignUp from './Components/Authentication/SignUp';
import Authenticate from './Components/Authentication/Authenticate';





function App() {
    const [ user, setUser] = useState(false)
    const [ fullName, setfullName] = useState('')
    const [ email, setEmail] = useState('')
    const [ number, setMobile] = useState('')
    const [ username, setUserName] = useState('')   
    const [ stack, setStack] = useState('')
    const [ password, setPassword] = useState('')
  

  

    const HandleLogin = async () => {
      const data = { username, password }
      console.log(data)

      axios.post('https://ict-del-gram-app.herokuapp.com/api/users/login', {
        "userName": username,
        "password": password
      })
      .then( (response) => {
        setUser(true)
      })
      .catch( (error) => {
        console.log(error);
      });

      // fetch('https://ict-del-gram-app.herokuapp.com/api/users/login', {
      //   method: 'POST', 
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(data),
      // })
      // .then(response => response.json())
      // .then(data => {
      //   console.log('Success:', data);
      // })
      // .catch((error) => {
      //   console.error('Error:', error);
      // });
    }

    const HandleSignUp = async () => {
      const data = { username, password, }
      console.log(data)

      fetch('https://ict-del-gram-app.herokuapp.com/api/users/signup', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
    



  return (
    <>
    <Router>
      <div className="App">

        {
          user ?
          <Home/> :

          <Authenticate
          username={username}
          setUserName={setUserName}
          password={password}
          setPassword={setPassword}
          HandleLogin={HandleLogin}
          HandleSignUp={HandleSignUp}
          />
        
        }

       {/* <EditProfile/> */}
    </div>
    </Router>
    </>
  );
}

export default App;
