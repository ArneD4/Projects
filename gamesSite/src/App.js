import React, {useState, useEffect } from "react"
import fire from './fire'
import Login from './Login'
import Hero from './Hero'
import './App.scss';

import DiceGame from './components/DiceGame'
import JumpGame from './components/JumpGame'
import SnakeGame from "./components/SnakeGame";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from "./NavBar";





function App() {
  const [user, setUser] = useState('');
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);



  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () =>{
    setEmailError('');
    setPasswordError('');
  }


  const handleLogin = () =>{
      clearErrors();
      fire  
      .auth()
      .signInWithEmailAndPassword(email,password)
      .catch(err =>{
        switch(err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
            case "auth/user-not-found":
              setEmailError(err.message);
              break;
              case "auth/wrong-password":
                break;
        }
      })
  };


  const handleSignup = () =>{
    clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .catch(err =>{
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          case "auth/user-not-found":
            setPasswordError(err.message);
            break;
            case "auth/weak-password":
              break;
      }
    })
  };


  const handleLogout = () =>{
    fire.auth().signOut();
  }


  const authListener = () => {
    fire.auth().onAuthStateChanged((user)=>{
      if (user) {
        clearInputs();
        setUser(user);
      }else{
        setUser("")
      }
    })
  };


  useEffect(()=>{
    authListener();
  }, [])





  return (
<Router>
    <div className="App">
      {user ? (
       <Hero handleLogout={handleLogout}>
    <Route path = "/" exact component={Hero}/>
       </Hero>


       
      ):(
        <Login
        email={email} 
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
        /> 
      )}
    </div>




    <Route path = "/DiceGame" component={DiceGame}/>
    <Route path = "/JumpGame" component={JumpGame}/>
    <Route path = "/SnakeGame" component={SnakeGame}/>
  </Router>
  );
}

export default App;
