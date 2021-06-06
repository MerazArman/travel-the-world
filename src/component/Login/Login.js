import React, { useContext, useState } from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import { FcGoogle } from 'react-icons/fc';
import './Login.css'
import Header from '../Header/Header';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { firebaseConfigInitializeApp, googleHandler, signInWithPasswordEmail, signUpWithPasswordEmail } from './LoginSettings';





// !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()



const Login = () => {
  // const [userLogged, setUserLogged] = useContext(UserContext);
  //------------------------------------ state declaration ------------------------------
   const [newUser, setNewUser] = useState(false);
   const [user, setUser] = useState({
     isSignIn:false,
     name:'',
     email:'',
     password:'',
     confirmPassword: '',
     photo:'',
     error:'',
    //  success:false
   });

   const [userLogged, setUserLogged] = useContext(UserContext);
   const history = useHistory();
   const location = useLocation();
   let { from } = location.state || { from: { pathname: "/" } };

     firebaseConfigInitializeApp()

  // //------------------------------------- google sign authentication start now -------------------------------------- --

   const googleHandlerBtn = () =>{
     googleHandler()
     .then((res) =>{
       setUser(res)
       setUserLogged(res)
       history.replace(from)
     })
   }


  //---------------------------------- email validation start now-----------------------------------------

  const handleBlur = (e) => {
    let isFormValid = true;
    if (e.target.name === 'email') {
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
      // console.log(isFormValid);
    }
    if (e.target.name==='password') {
      isFormValid = /\d{1}/.test(e.target.value);
      // console.log(isFormValid);
    }
    // if (e.target.name==='confirmPassword') {
    //   isFormValid = /\d{1}/.test(e.target.value);
    //   // console.log(isFormValid);
    // }
    if (isFormValid) {
      let userInfo = { ...user }
      userInfo[e.target.name] = e.target.value;
      setUser(userInfo)
      console.log(userInfo);
  }

  }


  //-------------------------------------------- sign up and sign in authentication -------------------------------

  const handleSubmitForm = (e) =>{
    if (newUser && user.password && user.confirmPassword) {

        signUpWithPasswordEmail(user.name, user.email, user.password)
        .then((res) =>{
          setUser(res)
          setUserLogged(res)
          history.replace(from)
        })
    }

    if (!newUser && user.email && user.password) {

        signInWithPasswordEmail(user.email, user.password)
        .then((res) =>{
          setUser(res)
          setUserLogged(res)
          history.replace(from)
        })
    }
    e.preventDefault();    
  }



  return (
    <div className="container">
      <Header></Header>
      <h1>Name : {console.log(userLogged.email)} </h1>
      <div class="center">
        <h1>{newUser ? "Create Account" : "Login"}</h1>
        <form onSubmit={handleSubmitForm}>
          {newUser &&
          <div class="txt_field">
            <input type="text" name="name" onBlur={handleBlur} required  />
            <span></span>
            <label>Username</label>
          </div>
          }
          <div class="txt_field">
            <input type="text" name="email" onBlur={handleBlur} required />
            <span></span>
            <label>Email</label>
          </div>
          <div class="txt_field">
            <input type="password" name="password" onBlur={handleBlur} required />
            <span></span>
            <label>Password</label>
          </div>
          {newUser && 
           <div class="txt_field">
            <input type="password" name="confirmPassword" onBlur={handleBlur} required />
            <span></span>
            <label>Confirm Password</label>
           </div>
          }
          {!newUser &&  <div class="pass">Forgot Password?</div>}
          {user.success ? <h5 style={{color:'green'}}>account created successfully</h5> : <h5 style={{color:'red'}}> {user.error}</h5>}
          <input type="submit" value={newUser ? "Sign up" : "Sign in"} />
          <div class="signup_link">
            {newUser ? "already have an account?" : "Don't have an account ?"} <span onClick={() => setNewUser(!newUser)}> {newUser ? " Sign in" : "Sign up"} </span>
          </div>
        </form>

      </div>
      <div className="social-site-box">
        <p className="or-style">or</p>
        <button className="fb-account"> <FacebookIcon color="primary" className="fb-icon" fontSize="large" ></FacebookIcon> Continue with Facebook</button>
        <button className="google-account" onClick={googleHandlerBtn}> <FcGoogle className="fb-icon" fontSize="large" ></FcGoogle> Continue with Google</button>
      </div>
    </div>
  );
};

export default Login;