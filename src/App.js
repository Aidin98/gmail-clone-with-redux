import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {BrowserRouter as Router ,Switch , Route} from 'react-router-dom'

import './App.css';
import EmailList from './EmailList';
import { selectSendISMessageOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import { auth } from './firebase';
import Header from './Header';
import Login from './Login';
import Mail from './Mail';
import SendMail from './SendMail';
import Sidebar from './Sidebar';

function App() {
  const sendMessageIsOpen=useSelector(selectSendISMessageOpen)
  const user=useSelector(selectUser)
  const dispatch=useDispatch()
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user){
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      }
    })
  },[])
  return (
    <Router>
      {!user ?(
        <Login />
      ):(
         <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>
            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>
       {sendMessageIsOpen && <SendMail />}
      </div>
      )}
     
    </Router>
  );
}

export default App;
