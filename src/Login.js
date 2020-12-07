import React,{useState} from 'react';
import Home from './Home';
import SaharaStore2 from './images/SaharaStore2.jpg'
import './Login.css';
import{Link,useHistory} from"react-router-dom";
 import {auth} from './firebase';
// import { useStateValue } from './StateProvider';


function Login() {
    const history = useHistory('')
    const [email,setEmail] =useState('');
    const   [password,setPassword]=useState('')

    const signIn =e =>{
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth =>{
                history.push('/')
            })
            .catch(error =>alert(error.message));


    }
const register =e =>{
        e.preventDefault();
    auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth) =>{
            console.log(auth);
            if(auth){
                history.push('/')
            }
        })
        .catch(error => alert(error.message))

}



    return (
<div className="login">
    <Link to="/">
    <img className="login_logo" src={SaharaStore2}></img>
    </Link>

    <div className="login__container">
    <h1>Sign-in</h1>
    <form>
        <h5>E-mail</h5>
        <input type='text' value={email} onChange={e=>setEmail(e.target.value)}/>
        
        <h5>Password</h5>
        <input type='password' value={password} onChange={e =>setPassword(e.target.value)}/>
        
        <button type='submit' onClick={signIn}className='login__signInButton'> Sign-In </button>
        
            </form>
            <p>By Signing-in you agree to Sahara's Condition of use & sale.
                Please see our Privacy Notice, our Cookies Notice and our Internet-Based Ads</p>

            <button onClick={register} className='login__registerButton'>Create your Sahara Account </button>
</div>
</div>
        
    )
}

export default Login
