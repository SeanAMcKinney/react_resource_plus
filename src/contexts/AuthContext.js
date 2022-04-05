//We wil create a React Context in this file that will hous all authentication info (currentUser, login, logout) and transport the information to any component to use it. We could store this info in the App component and just pass props, but this isn't ideal for larger applications. But instead, we create a strorage container to house this into, outside of the normal flow of data (props and callback functions).
import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../base' //to have access to the auth object, which initializes the auth functionality from Firebase
import { GithubAuthProvider, signInWithPopup, signOut } from 'firebase/auth'

//Below we creat a context that will store all the info in this file
const AuthContext = React.createContext();

//This makes the storage container accessible in other components. We will import useAuth anytime we want to get user info or use login/logout
export function useAuth(){
    return useContext(AuthContext);
}

//The rest of this file is creating a component that will allow the app to communicate this info to other components that are nested inside this one. 'children' is referring to those components nested inside.
export default function AuthProvider({children}){
    //Create hooks for currentUser and another custom hook to determine if the context has information to share with nested components and load thos components in after they have been given the info.
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true); 

//The object below will hold currentUser info, login, and logout, so we can use them in components as necessary.
    const value = { currentUser };

    return(
        <AuthContext.Provider value={value}>
            {/* Below we are waiting for the AuthContext info to populate before loading the components in the UI */}
            {!loading && children}
        </AuthContext.Provider>
    )

}