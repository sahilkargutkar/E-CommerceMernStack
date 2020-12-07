import React,{useEffect} from 'react';
import Header from './Header';
import './App.css';
// import SaharaStore from './images/SaharaStore.jpg'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment'; 
import {auth  } from './firebase';
import { useStateValue } from './StateProvider';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './Orders'; 

const promise = loadStripe('pk_test_51HvM1dIRf2WKFUM4DPWnOiItVxYCAz8GiV6T5ZYQqeww6tkY0cOAAEZ3fmbBwINy16qMgq9Ftwn5DZKzFfqtX61w00WV7IOUBj');


function App() {

  const[{},dispatch] =useStateValue();


  useEffect(() => {
    auth.onAuthStateChanged(authUser =>{
      console.log('The User is >>>',authUser);
  
if(authUser){
    dispatch({
      type:'SET_USER',
      user:authUser,
    })
  }
  else{
    dispatch({
      type:'SET_USER',
      user:null
    });
  }
  })
}, [])

  return (
  <Router>
    <div className="app">
      <Switch>
      <Route path="/orders"><Header/>
        <Orders />
        </Route>
        <Route path="/login">
          <Login/>
          </Route>
        <Route path="/checkout"><Header/>
        <Checkout/>
          </Route>
          
          <Route path="/payment">
            <Header/>

            <Elements stripe={promise} >
              <Payment />
            </Elements>

          </Route>
      <Route path="/"><Header />
      <Home />
        </Route>
        
      </Switch>
    </div>
  </Router>
  
    
  );
}

export default App;
