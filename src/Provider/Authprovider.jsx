import  { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.config';
import axios from 'axios';




export const AuthContext = createContext()
const auth = getAuth(app);
const gogoolProvider = new GoogleAuthProvider()


const Authprovider = ({children}) => {
    const [users,setUsers] = useState(null)
    const [loading,setLoading] = useState(true)



   const createUser = (email,password)=>{
    setLoading(true)
     return createUserWithEmailAndPassword(auth,email,password);
   }

   const sighinIn = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);

   }

   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUsers(currentUser);
      

        if(currentUser){
            axios.post("https://summer-camp-surver.vercel.app/jwt",{email:currentUser.email})
            .then(data=>{
                // console.log(data.data);
                localStorage.setItem("access-token",data.data.token)
                setLoading(false);
            })
        }   
         else{
            localStorage.removeItem("access-token")
        }
        
       

    });
    return () => {
        return unsubscribe();
    }
}, [])


const siginInGogool = ()=>{
    setLoading(true)
  return   signInWithPopup(auth,gogoolProvider)
}

const updateUserProfile = (name,photo)=>{
    setLoading(true)
  return  updateProfile(auth.currentUser, {
        displayName:name, photoURL: photo
      })
}


const logOut = ()=>{
    setLoading(true)
   return signOut(auth)
}


 const authInfo = {
  users,
  loading,
  createUser,
  sighinIn,
  updateUserProfile,
  siginInGogool ,
  logOut
 }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;