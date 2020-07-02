import * as firebase from 'firebase'
import { Toast } from './toast';
import { Redirect } from 'react-router';


//Firebase Keys
const config = {
    apiKey: "AIzaSyBWWzAucUGVF5mJD1y5Qmc-pCaQ2G5zz1o",
    authDomain: "minet-3f92e.firebaseapp.com",
    databaseURL: "https://minet-3f92e.firebaseio.com",
    projectId: "minet-3f92e",
    storageBucket: "minet-3f92e.appspot.com",
    messagingSenderId: "1038148748536",
    appId: "1:1038148748536:web:da555f8152698ae369e70d",
    measurementId: "G-TYS1RJ17Y3"
  };

firebase.initializeApp(config)


//MainLoginLogic
export async function loginUS(username:string ,password:string){
    const email = `${username}@gmail.com`
    try{
    const res = await firebase.auth().signInWithEmailAndPassword(email,password)
    return(res)
    return true
    }catch(error){
        Toast(error.message)
    return false
    }
}


//CreateUser
export async function registerUser(username:string, password:string){
    //ProGamerMove
    const email = `${username}@gmail.com`
    try{
        const res = await firebase.auth().createUserWithEmailAndPassword
        (email,password)
        console.log(res)
        return true
    }catch(error){
        console.log(error)
        Toast(error)
        return false
    }
}

//UserSubscription
export function getCurrentUser(){
    return new Promise((resolve,reject) =>{
        const unsubscribe = firebase.auth().onAuthStateChanged(function(user){
            if (user){
                resolve(user)
            }else{
                resolve(null)
            }
            unsubscribe()
        })
    })
}

//Logout

export function logoutUser(){
    return firebase.auth().signOut()
}