
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Login from "./Components/Authentication/Login";
import SignUp from "./Components/Authentication/SignUp";
import Home from "./Components/Pages/Home";




function App() {
    
  return (
    <>
    <Router>
      <div className="App">
        
        <Route component={SignUp} path='/' exact />
        <Route component={Login} path='/Login' exact />
        <Route component={Home} path='/Home' exact />
     
    </div>
    </Router>
    </>
  );
}

export default App;
