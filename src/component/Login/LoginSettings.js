import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';


export const firebaseConfigInitializeApp = () => {
    !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
};


  //------------------------------------- google sign authentication start now -------------------------------------- --

    export const googleHandler = () =>{
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return  firebase.auth().signInWithPopup(googleProvider)
    .then((res) => {
        const {displayName, email, photoURL} = res.user;
        const userInfo = {
          isSignIn: true,
          name:displayName,
          email:email,
          photo:photoURL,
          success:true
        }
        console.log(res, res.credential, res.credential.accessToken, res.user );
        return userInfo;
    })
    .catch((error) => {
        console.log(error, error.code, error.message, error.email, error.credential);
    });

  }

  //=====================================fb authentication start now --------------------------------=====










//======================= sign out authentication ===========================

// export const handleSignOut = () => {
//     return firebase.auth().signOut()
//     .then(res => {
//       const signedOutUser = {
//         isSignedIn: false,
//         name: '',
//         email: '',
//         photo: '',
//         error: '',
//         success: false
//       }
//     return signedOutUser;
//     }).catch(err => {
//       // An error happened.
//     });
//   }




//    -------------------------------- email password authentication================================

export const signUpWithPasswordEmail = (name, email, password) =>{
     return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((res) => {
      let  successShow= res.user;
      successShow.error= "";
      successShow.success= true;
      updateUserProfile(name)
      console.log(res);
      return successShow
    })
    .catch((err) => {
      let errorShow = {};
      errorShow.error = err.message;
      errorShow.success = false;
      console.log(err.message, err.code);
      return errorShow ;
    });
}

//==========================================  signInWithPasswordEmail=======================

export const signInWithPasswordEmail = (email, password) =>{
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then((res) => {
        let  successShow= res.user;
        successShow.error= "";
        successShow.success= true;
        console.log(res.user);
        return successShow;
      })
      .catch((err) => {
        let errorShow = {};
        errorShow.error = err.message;
        errorShow.success = false;
        console.log(err.message, err.code);
        return errorShow;
      });
}


// ------------------------------------------ update profile setup ------------------------------------- 
const updateUserProfile = (name) => {
    const  user = firebase.auth().currentUser
    user.updateProfile({
      displayName: name
    })
    .then(() => {
      console.log('successfully apdate', name);
    })
    .catch((error) =>  {
      console.log(error.message);
    });
   }