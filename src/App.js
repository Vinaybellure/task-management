// import Add_task from './components/Add_task/Add_task';
// import Login from './components/Login/Login'
// import Signup from './components/Login/Signup';
import './App.scss'
import { useEffect, useState } from 'react';
import firebase from 'firebase'
import Navigation from './Navigation/Navigation'

function App() {
  const [authenticated, setauthenticated] = useState(false);

  useEffect(() => {
      firebase.auth().onAuthStateChanged((authenticated) => {
        authenticated ?  setauthenticated(true) : setauthenticated(false)
      });
    })

  return <Navigation authenticated={authenticated} />;
}

export default App;
