import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Login from './Components/Pages/Login'
import Home from './Components/Pages/Home'
import EditProfile from './Components/ProfilePage/EditProfile';





function App() {
    const [ user, setUser] = useState(false)
    const [ name, setName] = useState('')
    const [ username, setUserName] = useState('')
    const [ number, setMobile] = useState('')
    const [ stack, setStack] = useState('')
    const [ password, setPassword] = useState('')
  

  

    const HandleLogin = async () => {
      const data = { username, password }
      console.log(data)

      fetch('https://ict-del-gram-app.herokuapp.com/api/users/login', {
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

    const HandleSignUp = async () => {
      const data = { username, password }
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
          <Login 
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
