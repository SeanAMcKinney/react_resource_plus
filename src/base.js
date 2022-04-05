//npm install firebase
//Firebase is a cloud computing too that includes a lot of features like db management, messaging, machine learing, authentication, and file storage.
//Steps to creat authentication functionality:
//1. Create a firebase app at firebase.google.com
//2. Register the app with firebase
//3. Configure/Initialize firebase by creating the base.js and .env files
    //a. Make sure the .env file is at the root of the entire project
    //b. base.js is at the root of the src folder
//4. Configure GitHub authentication in Firebase and GitHub
//5. Create the context which will house all user info and login/logout functionality
//6. Call to the login/logout/user funtionality as needed in other components
import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBeLJ592K2J5pyVBg21UfCtdkN_EBMOjDY",
    authDomain: "resourceplus-8150d.firebaseapp.com",
    projectId: "resourceplus-8150d",
    storageBucket: "resourceplus-8150d.appspot.com",
    messagingSenderId: "504798650406",
    appId: "1:504798650406:web:e36cdee8878e15d08f86e7"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Authentication
const auth = getAuth(app); //This is what ties this local app to the auth functionality in Firebase and GitHub

export {auth}; //We export auth so we can use this object in our logic in the React Context(AuthContext).